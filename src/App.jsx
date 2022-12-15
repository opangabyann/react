import React from "react";
import Login from "./page/auth/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./page/auth/Register";
import ForgotPW from "./page/forgotPW";
import Home from "./page/dashboard/home";
import ResetPW from "./page/ResetPW";
import ProtectRoutes from "./routers/protectedRoute";
import Detail from "./page/dashboard/detail";
import Keranjang from "./page/keranjang";
import History from "./page/dashboard/history";
export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPW />} />
        <Route path="/reset-password/:id/:token" element={<ResetPW />} />
        <Route
          path="/home"
          element={
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          }
        />
        <Route
          path="produk/detail/:uuid"
          element={
            <ProtectRoutes>
              <Detail />
            </ProtectRoutes>
          }
        />
        <Route
          path="/keranjang"
          element={
            <ProtectRoutes>
              <Keranjang/>
            </ProtectRoutes>
          }
        />
        <Route
          path="/historyPembelian"
          element={
            <ProtectRoutes>
              <History/>
            </ProtectRoutes>
          }
        />
      </Routes>
    </React.Fragment>
  );
}
