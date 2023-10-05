import React from 'react'
import { Link } from "react-router-dom";


const AboutUs1 = () => {
    const people = [
        {
          name: 'Jessica Ricks',
          role: 'Product / Project Manager',
          image: require ("../assets/jesspng.png"),
          bio: (
            <>
              Master product<br/> &amp; project juggler, <br/>Mountain
              conqueror, <br/>Pasta admirer.
            </>
          ),
          portfolio: "https://jricks86.github.io/portfolio/",
          li: "https://www.linkedin.com/in/jricks86/",
          ig: null,
          twitter: null,
          page: "/Jess",

        },
        {
          name: 'Catalino Rodriguez',
          role: 'Tech Lead',
          image: require("../assets/crodpng.png"),
          bio: (
            <>
             Unrivaled <br/>Joy-con/keyboard maestro, <br/>Master of
             codewar katas, <br/>Mario Kart expert.
            </>
                ),
          portfolio: "https://crod.co/",
          li: "https://www.linkedin.com/in/catalinorodriguez/",
          ig: null,
          twitter: "https://twitter.com/CRodDev",
          page: "/CRod"
        },
        {
          name: 'Vance Apostol',
          role: 'Design Lead',
          image: require("../assets/vancepng.png"),
          bio: (
            <>
              Pixel wizard, <br/>Pancake thief, <br/>
              LVL 99 Roller skater
            </>
                ),
          portfolio: "https://lotus.haleakaladesign.com/lotus/",
          li: "https://www.linkedin.com/in/vancea/",
          ig: "https://www.instagram.com/vanceplants/",
          twitter: null,
          page: "/Vance",
        },
      ]

  return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet JVC the team that brought you Gamer Vault.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
                <Link to={person.page}>
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-40 w-40 rounded-full" src={person.image} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                    <p className="text-sm font-semibold leading-5 text-gray-500">{person.bio}</p>
                  </div>
                </div>
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
  )
}

export default AboutUs1
