import React from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function Detail(){
    let {id,nama}= useParams()
    let navigate = useNavigate()
    return(
        <React.Fragment>
            <p> ini adalah detail</p>
            <p>id nya adalah {id} {nama}</p>
            <button onClick={()=>{
                return navigate ("/home")
            }}>home</button>
        </React.Fragment>
    )
}