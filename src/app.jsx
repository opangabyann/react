import React from "react";
import Card from "./card";
import Warna from "./komponen/warna";

export default function App(){
    let [count,setCount] = React.useState(0)
    let [warna,setWarna] = React.useState("pink")
    return(
        <div>
            <Card count={count} setcount={setCount} />
            <Warna warna={warna} setwarna={setWarna}/>
        </div>
    )
}