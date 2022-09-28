import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Admin from "./pages/admin";
import About from "./pages/Admin/About";
import Buku from "./pages/Admin/Buku";
import Dashoard from "./pages/Admin/Dashboard";
// import Create from "./pages/createacount";
import Home from "./pages/home";
import TambahBuku from "./pages/TambahBuku";
import UpdateBuku from "./pages/updateUser";
import DetailBuku from "./pages/viewBuku";

// import UpdateUser from "./pages/updateUser";
// import Detail from "./pages/userdetail";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashoard />} />
          <Route path="buku" element={<Buku />} />
          <Route path="about" element={<About />} />
        </Route>
        
        <Route path="/admin/buku/tambah" element={<TambahBuku />} />
        <Route path="/buku/update/:id" element={<UpdateBuku />} />
        <Route path="/buku/view/:id" element={<DetailBuku />} />
        
        
        {/* <Route path="/user/create" element={<Create />} />
        <Route path="/user/update/:id" element={<UpdateUser />} /> */}
        {/* <Route path="/404" element={<UpdateUser />} />

        <Route path="*" element={<Navigate to={"/user"} replace={true} />} /> */}
      </Routes>
    </React.Fragment>
  );
}
