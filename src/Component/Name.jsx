import React from "react"
import "../styles/style.css"

function Button(){
    return(
        <React.Fragment>
            <button style={{
                backgroundColor : 'red',
                color :"aquamarine",
            }}
            >simpan</button>
        </React.Fragment>
    )
}


function Input(){
    return(
        <React.Fragment>
            <input className="input" placeholder="input ..." />
        </React.Fragment>
    )
}

export {Input , Button}