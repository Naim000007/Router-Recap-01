import React, { useEffect, useState } from 'react'
// import Github from './Github';

function Github() {
    const [data, setData] = useState({})
    useEffect(()=>{
       fetch('https://api.github.com/users/Naim000007') 
       .then(res => res.json())
       .then (data => {
        console.log(data);
        setData(data)
       })
    },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
       GitHub Followers : {data.followers} <br />
       Github Name: {data.name}
       <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github
