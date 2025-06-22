import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15) ;

  const addValue = () => {
    setCount(count+1) ;
  }

  const removeValue = () => {
    setCount(count-1) ;
  }

  return (
    <>
        <h1>Final React Learning</h1>
        <h2>Counter value: {count}</h2>
        <p>{count}</p>

        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
