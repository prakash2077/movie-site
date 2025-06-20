'use client'
import CoolButton from '@/components/CoolButton';
import MyButton from '@/components/MyButton';
import MyList from '@/components/MyList';
import MyTitle from '@/components/MyTitle';
import {useState, useEffect} from 'react';


const page = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => setUsers(users))
    },[])

  return (
    <div>
        <MyTitle>All Users</MyTitle>
      <MyList listThese={users} />
      <MyButton linkText={'/'} buttonText={'Go home'} />
      <CoolButton>Just added for cool look</CoolButton>
    </div>
  )
}

export default page
