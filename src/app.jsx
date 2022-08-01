import React from "react";
import Data from "./produk";

export default function App ({data}) {
    return(
        <React.Fragment>
            <h1>latihan</h1>
            <h2>data produk indonesia</h2>
            <Data data = {produk}/>
        </React.Fragment>
    )
}