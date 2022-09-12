import React from "react";
import {Routes,Route, Navigate} from "react-router-dom"
import User from "./pages/user";
import Detail from "./pages/userdetail";

export default function App(){
    return(
        <React.Fragment>
            <h1 className="bg-red-500">Belajar Api</h1>

            <Routes>
                <Route path="/user" element={<User/>}/>
                <Route path="/user/create" element={<User/>}/>
                <Route path="/user/:id/detail" element={<Detail/>}/>
                <Route path="*" element={<Navigate to={"/user"} replace={true}/>}/>
            </Routes>
        </React.Fragment>
    )
}