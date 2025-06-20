"use client";
import MyList from "@/components/MyList";
import MyTitle from "@/components/MyTitle";
import MyButton from "@/components/MyButton";
import CoolButton from "@/components/CoolButton";
// This is HomePage

export default function Home() {
  
  const movies = [
      { title : 'Dune', id: 1},
      { title : 'Jumanji', id: 2},
      { title : 'After Earth', id: 3},
      { title : 'San Andreas', id: 4},
      { title : 'Alice in Wonderland', id: 5},
      { title : 'Dune 2', id: 6},
      {title : 'Ala Vaikuntapuramlo', id : 7},
      {title : 'Blade Runner 2049', id: 8},
      {title : 'The Shawshank Redemption', id: 9},
      {title : 'Coco', id: 10},
      {title : 'Toy Story', id: 11}
  ]
  
  return (
    <div className='p-10 flex flex-col '>
        <MyTitle>Hey Next JS</MyTitle>
      <MyList listThese={movies} />

      <MyButton linkText={'/movies'} buttonText={'Go to All Movies'} />
      {/* A button to show that link to movies route */}
      <MyButton buttonText={'All Users'} linkText={'/users'} />
      {/* A button to show that link to users route */}
      <MyButton buttonText={'About'} linkText={'/about'} />
      {/* A button that shows the about when clicked */}
      <CoolButton>Cool Button</CoolButton>
    </div>
  );
}
