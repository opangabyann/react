import React from "react"
import Login from "./page/login"
import { Route,Routes } from "react-router-dom"
import Register from "./page/register"
import ResetPw from "./page/restPw"

export default function App (){
  return(
    <React.Fragment>
       <Routes >
         <Route path="/" element={<Login/> }/>
         <Route path="/login" element={<Login/> }/>
         <Route path="/register" element={<Register/> }/>
         <Route path="/reset-password" element={<ResetPw/> }/>
       </Routes>
    </React.Fragment>
  )
}