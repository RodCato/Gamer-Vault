import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";
import LoadingSpinner from "../components/LoadingSpinner";

const GameIndex = ({ games, deleteGame, loading }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [reverseOrder, setReverseOrder] = useState(false);
 


  // const handleDelete = (id) => {
  //   deleteGame(id);
  // };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search");
    setSearchTerm(search || "");
  }, [location.search]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = games.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  }, [games, searchTerm]);



  const sortGames = (gamesToSort) => {
    let sorted = [...gamesToSort];

    if (sortBy === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "date") {
      sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    }

    if (reverseOrder) {
      sorted.reverse();
    }

    return sorted;
  };

  const handleSearch = (searchValue) => {
    const queryParams = new URLSearchParams();
    queryParams.set("search", searchValue);
    const newSearch = queryParams.toString();

    window.history.pushState({}, "", `?${newSearch}`);

    setSearchTerm(searchValue);
    setSortBy("");
    setReverseOrder(false);
  };

  const sortedGames = sortGames(filteredGames);

  return (
    <div>
      <div style={{ marginTop: "4rem" }}>
        <SearchComponent searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <label>
          <input
            type="radio"
            name="sortType"
            value="title"
            checked={sortBy === "title"}
            onChange={() => setSortBy("title")}
          />
          Sort by Title
        </label>
        <label>
          <input
            type="radio"
            name="sortType"
            value="date"
            checked={sortBy === "date"}
            onChange={() => setSortBy("date")}
          />
          Sort by Date Added
        </label>
        <label>
          <input
            type="checkbox"
            checked={reverseOrder}
            onChange={() => setReverseOrder(!reverseOrder)}
          />
          {reverseOrder ? "Order is reversed" : "Reverse Order"}
        </label>
      </div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <main className="card-columns">
          {sortedGames.map((game, index) => (
            <div key={index}>
              <br />
              <br />
              <Card className="eachCard">
                <img
                  alt={`profile of the game ${game.title}`}
                  src={game.image}
                />
                <CardBody className="card-body">
                  <CardTitle style={{ fontWeight: "600" }}>
                    {game.title}
                  </CardTitle>
                  <div className="button-container">
                    <Button className="pixel-btn">
                      <NavLink to={`/game/${game.id}`} className="nav-link">
                        See Game Details
                      </NavLink>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </main>
      )}
    </div>
  )
};  

export default GameIndex;