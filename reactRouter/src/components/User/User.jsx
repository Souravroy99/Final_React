import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userId} = useParams()

  return (
    <div className='bg-gray-600 p-4 text-2xl font-semibold text-white'>User: {userId}</div>
  )
}

export default User