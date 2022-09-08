import React from "react";
import {Routes,Route, Navigate} from "react-router-dom"

export default function App(){
    return(
        <React.Fragment>
            <h1 className="bg-red-500">Belajar Api</h1>

            <Routes>
                <Route path="/user" element=""/>
                <Route path="/user/:id/detail" element=""/>
                <Route path="*" element={<Navigate to={"/user"} replace={true}/>}/>
            </Routes>
        </React.Fragment>
    )
}