import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-red-500 p-4 rounded-xl'>Tailwind 3.4.17</h1> */}
      <Card name="dragon" />
    </>
  )
}

export default App
