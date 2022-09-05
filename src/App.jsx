import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Register from "./pages/register";
import Dashboard from "./pages/admin/Dashboard";
import Kelas from "./pages/admin/kelas";
import User from "./pages/admin/user";
import UserDetail from "./pages/admin/detail";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Home />}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/admin" element={<Admin />} >
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="user" element={<User/>}/>
          <Route path="user/:id/:kelas" element={<UserDetail />} />
          <Route path="kelas" element={<Kelas />}/>
        </Route>

        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </React.Fragment>
  );
}
