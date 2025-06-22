import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  const changeBackground = (e) => {
    setColor(e);
  }

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-3 bg-white px-3 py-2 rounded-3xl">
              <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: 'red'}} onClick = {(e) => changeBackground('red')}>Red</button>
              
              <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: 'Blue'}} onClick = {(e) => changeBackground('Blue')}>Blue</button>

              <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: 'Green'}} onClick = {(e) => changeBackground('Green')}>Green</button>  

              <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: 'Violet'}} onClick = {(e) => changeBackground('violet')}>Violet</button>

              <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: 'Orange'}} onClick = {(e) => changeBackground('orange')}>Orange</button>
          </div>
        </div>        
      </div>
    </>
  )
}

export default App
