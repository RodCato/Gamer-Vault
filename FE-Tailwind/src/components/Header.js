import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("click", closeMenu);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav id="nav">
        <button
          className="burger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/games">All Games</Link>
          {currentUser && (
            <>
              <Link to="/mygames">My Games</Link>
              <Link to="/gamenew">Add Game</Link>
              <Link to="/" onClick={handleClick}>
                Log Off
              </Link>
            </>
          )}
          {!currentUser && (
            <>
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
