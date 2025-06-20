import MyButton from '@/components/MyButton'
import React from 'react'
import MyTitle from '@/components/MyTitle'
import MyList from '@/components/MyList'


const Movies = () => {
  const movies = [
    {title: 'Mad Max: Fury Road', id: 1},
    {title: 'Die Hard', id: 2},
    {title: 'Inception', id: 3},
  ]
  return (
    <div className='p-10 flex flex-col '>
        <MyTitle>Movies</MyTitle>
        <MyList listThese={movies} />
        <div>
          <MyButton linkText={'/movies/fav-movies'} buttonText={'My Fav Movies'} />
          <MyButton linkText={'/'} buttonText={'Go back'} />
        </div>
    </div>
  )
}

export default Movies
