import MyButton from '@/components/MyButton'
import MyList from '@/components/MyList'
import MyTitle from '@/components/MyTitle'
import React from 'react'

const page = () => {

  const favMovies = [
    {title: 'John Wick', id : 1},
    {title: 'No Remorse', id : 2},
    {title: 'Gladiator', id : 3},
  ]

  return (
    <div className='p-10 flex flex-col '>
        <MyTitle>My Fav Movies</MyTitle>
        <MyList listThese={favMovies} />
    <MyButton buttonText={'Go back'} linkText={'/movies/'} />
    </div>
  )
}

export default page
