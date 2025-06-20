"use client";
import { useState, useEffect } from "react";
import MyList from "@/components/MyList";
import MyTitle from "@/components/MyTitle";

const movies = [
    { title : 'Dune', id: 1},
    { title : 'Jumanji', id: 2},
    { title : 'After Earth', id: 3},
    { title : 'San Andreas', id: 4},
    { title : 'San Andreas', id: 5},
]


export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    fetch("https://api.vercel.app/pokemon")
    .then((res) => res.json())
    .then((data) => setPokemons(data))
    .catch((err) => console.error("Fetch Error: ", err))
  }, [])

  console.log(pokemons)

  return (
    <>
      <MyTitle>Hey Next JS</MyTitle>
      <MyList listThese={movies} />
      <MyList listThese={pokemons} />
    </>
  );
}
