import React from "react";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Setting from "./pages/setting";
import About from "./pages/about";
import Home from "./pages/home";
import Detail from "./pages/detail";
import NotFound from "./pages/notFound";
import Phone from "./pages/setting/phone";
import Profile from "./pages/setting/profile";
import Komputer from "./pages/setting/komputer";

export default function App() {
  return (
    <React.Fragment>
      <div className="space-x-5 py-5 border">
        {/* <Link to={"/"}>Home</Link>
          <Link to={"/setting"}>setting</Link>
          <Link to={"/about"}>about</Link> */}

        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        >
          Home
        </NavLink>

        <NavLink
          to="/setting"
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        >
          setting
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        >
          about
        </NavLink>

        {/* <NavLink  to="/about" style={({ isActive }) =>
              isActive ? {color : "red"} : undefined
            }>
            about
          </NavLink> */}
      </div>
      <Routes>
        <Route path="/" element={<p>tes doang aja si</p>} />
        <Route path="/setting" element={<Setting />}>
          <Route path="komputer" element={<Komputer/>} />
          <Route path="phone" element={<Phone/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/:nama" element={<Detail />} />
        <Route path="404" element={<NotFound />} />
        <Route path="/home" element={<Navigate to={"/"} replace />} />
        <Route path="*" element={<Navigate to={"/404"} replace />} />
      </Routes>
    </React.Fragment>
  );
}
