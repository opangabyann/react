import React from "react";
import Card from "./card";

export default function App(){
    let [count,setCount] = React.useState(0)
    let [message,setMessage]= React.useState()
    return(
        <div>
            <Card count={count} setcount={setCount}/>
            <Card message={message} setmessage={setMessage}/>
        </div>
    )
}