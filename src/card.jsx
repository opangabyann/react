import React from "react";

export default function Card({count,setcount,message}){
    const handleTambah = ()=>{
        setcount(count + 1)
    }

    const handleKurang = ()=>{
        setcount(count -1)
    }
    
    return (
        <React.Fragment>
            <h3>{count}</h3>
            <button onClick={handleTambah}>tambah</button>
            <button onClick={handleKurang}>kurang</button>
        </React.Fragment>
    )
}