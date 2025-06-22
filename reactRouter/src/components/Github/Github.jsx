import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/souravroy99`)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [])

  return (
    <div className='text-center m-4 bg-gray-400 p-4 text-3xl'>
        Github Followers: {data.followers}
        <img className='w-80' src={data.avatar_url} alt="" />
    
    </div>

  )
}

export default Github