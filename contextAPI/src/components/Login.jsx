import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password}) ;
    }

    return (
        <div >
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder='username ' 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
            />
            {"  "}
            <input 
                type="text" 
                placeholder="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login