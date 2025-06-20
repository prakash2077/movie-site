"use client";
// import { useState, useEffect } from "react";
import MyList from "@/components/MyList";
import MyTitle from "@/components/MyTitle";
import MyButton from "@/components/MyButton";

const movies = [
    { title : 'Dune', id: 1},
    { title : 'Jumanji', id: 2},
    { title : 'After Earth', id: 3},
    { title : 'San Andreas', id: 4},
    { title : 'Alice in Wonderland', id: 5},
    { title : 'Dune 2', id: 6},
]


export default function Home() {

  return (

    <div className='p-10 flex flex-col '>
        <MyTitle>Hey Next JS</MyTitle>
      <MyList listThese={movies} />

      <MyButton linkText={'/movies'} buttonText={'Go to All Movies'} />
      
      <MyButton buttonText={'All Users'} linkText={'/users'} />

    </div>
  );
}
