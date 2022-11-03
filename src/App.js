import React, { useSyncExternalStore } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Create from "./pages/createacount";
import UpdateUser from "./pages/updateUser";
import User from "./pages/user";
import Detail from "./pages/userdetail";
import Login from "./pages/auth/login";
import ProtectedRoute from "./routers/protectRoute";
import Artikel from "./pages/artikel/indegs";
import Createartikel from "./pages/artikel/createArtikel";
import Editartikel from "./pages/artikel/editArtikel";
import { useSelector } from "react-redux";
import Register from "./pages/auth/register";

export default function App() {
  const warna = useSelector((state)=> state.color)
  console.log("color", warna.color)
  return (
    <React.Fragment>
      <h4>{warna.color}</h4>
      <h1 style={{
        backgroundColor : warna.color
      }}>Belajar Api</h1>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/artikel"
          element={
            <ProtectedRoute>
              <Artikel/>
            </ProtectedRoute>
          }
        />
        <Route
        path="/artikel/create"
        element={
          <ProtectedRoute>
            <Createartikel/>
          </ProtectedRoute>
        }
      />
       <Route
        path="/artikel/edit/:slug"
        element={
          <ProtectedRoute>
            <Editartikel/>
          </ProtectedRoute>
        }
      />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/create"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <ProtectedRoute>
              <UpdateUser />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to={"/user"} replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}
