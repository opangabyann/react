import React from "react";
import Isi from "./komponen/inputTampilan";

export default function App(){

    return(
        <React.Fragment>
            <Isi label={"nama"} placeholder={'nama anda'}/>
            <Isi label={"email"} placeholder={'email anda'}/>
            <Isi label={"tempat lahir"} placeholder={'tempat lahir'}/>
            <Isi label={"nama"} placeholder={'nama anda'}/>
        </React.Fragment>
    )
}