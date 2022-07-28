import React from "react";

export default function Nilai({nama,data}){
    console.log=('nama',nama)
    console.table= (data)
    return(
        <React.Fragment>
            <h1>daftar nilai</h1>
            <h1>{nama}</h1>
            <ol>
                {/* <li>{data[0]}</li>
                <li>{data[1]}</li>
                <li>{data[2]}</li>
                <li>{data[3]}</li>
                <li>{data[4]}</li> */}

                {data?.map((item,index)=>{
                    return(
                        <li>Nilai ujian ke-{index} adalah {item}</li>
                    )
                })}
            </ol>
        </React.Fragment>
    )
}