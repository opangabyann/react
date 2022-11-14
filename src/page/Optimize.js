import React from "react";
import Button from "../komponen/buttton";


export default function Parent (){
    const [count,setCount] = React.useState(0);
    const [ user, setUser] = React.useState("opang");
    console.log("parent render");

    return (
        <div>
            <h1>Parent</h1>
            <p>count : {count}</p>

            <Button title={"Klik"} color="blue" text="white" onClick={()=>{
                setCount ((c)=> count +1)
            }}/>

            <Child user = {user}/>
        </div>
    )
}

function Child({user}){
    console.log("child render");

    return (
        <div>
            <h2>Child</h2>
            <p>User : {user}</p>
        </div>
    )
}

function delay(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do{
        currentDate = Date.now();

    }while (currentDate - date < milliseconds)
}