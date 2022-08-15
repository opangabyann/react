import React from "react";

export default function Card({count,setcount,warna,setwarna}){
    const handleTambah = ()=>{
        setcount(count + 1)
    }

    const handleKurang = ()=>{
        setcount(count -1)
    }
    const handleMerah = ()=>{

    }
    return (
        <React.Fragment>
            <div>
            <h3>{count}</h3>
            <h3>{count < 10 ? "kurang dari 10" : "lebih dari 10"}</h3>
            <button onClick={handleTambah}>tambah</button>
            <button onClick={handleKurang}>kurang</button>
            </div>
        </React.Fragment>
    )
}