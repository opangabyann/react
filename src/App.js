import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Create from "./pages/createacount";
import UpdateUser from "./pages/updateUser";
import User from "./pages/user";
import Detail from "./pages/userdetail";
import Login from "./pages/auth/login";
import ProtectedRoute from "./routers/protectRoute";
import Artikel from "./pages/artikel/indegs";
import Createartikel from "./pages/artikel/createArtikel";


export default function App() {
  return (
    <React.Fragment>
      <h1 className="bg-red-500">Belajar Api</h1>

      <Routes>
        <Route path="/login" element={<Login />} />
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
