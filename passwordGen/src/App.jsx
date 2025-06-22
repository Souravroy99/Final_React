import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [isNum, setIsNum] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [password, setPassword] = useState("")


  // useRef Hook
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNum) {
      str += "0123456789"
    }
    if(isChar) {
      str += "!@#$%^&*(+-~)_"
    }

    let sLen = str.length; 
    for(let i=1 ; i<=length ; i++) {
      let idx = Math.floor(Math.random()*sLen) % sLen   
      pass += str[idx] ;
    }

    setPassword(pass);
  }, [length, isNum, isChar])


  const copyPassword = useCallback(() => {
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0, 3)
    
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  },[isNum, isChar, length])


  return (
    <>
      <div className='max-w-xl w-full shadow-md rounded-lg mx-auto px-6 py-4 mt-20 bg-gray-700 text-orange-500'>
        <h1 className='text-3xl font-semibold text-center mb-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg mb-4 overflow-hidden'>

          <input 

            ref = {passwordref}

            type="text" 
            value={password} 
            className='outline-none w-full text-xl font-semibold py-1 px-3' 
            placeholder='Password'
            readOnly
          />
          <button onClick={copyPassword} className='bg-blue-700 text-md px-2 font-semibold'>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 pl-2">
            <input type="checkbox" onChange={() => setIsNum((prev) => !prev)}/>
            <label>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 pl-2">
            <input type="checkbox" onChange={() => setIsChar((prev) => !prev)}/>
            <label>Special Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
