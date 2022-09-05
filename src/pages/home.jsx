import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){
    const Navigate = useNavigate()

    const [msg,setMsg] = React.useState('belum login')

    const handleLogin = ()=>{
        setMsg("proses login");

        return Navigate("about", {replace : true})
        
    }
    return(
        <div>
            <p>ini adalah page home</p>
            <p>{msg}</p>
            <button onClick={handleLogin}>login</button>
        </div>
    )
}