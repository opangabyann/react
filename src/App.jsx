import React from "react";
import { Routes, Route, Link,NavLink } from "react-router-dom";
import Setting from "./pages/setting";
import About from "./pages/about";
import Home from "./pages/home";
import Detail from "./pages/detail";

export default function App() {
  return (
    <React.Fragment>
        <div className="space-x-5 py-5 border">
          {/* <Link to={"/"}>Home</Link>
          <Link to={"/setting"}>setting</Link>
          <Link to={"/about"}>about</Link> */}

          <NavLink  to="/" style={({ isActive }) =>
              isActive ? {color : "red" ,} : undefined
            }>
            Home 
          </NavLink>

          <NavLink  to="/setting" style={({ isActive }) =>
              isActive ? {color : "red"} : undefined
            }>
            setting
          </NavLink>

          <NavLink  to="/about" style={({ isActive }) =>
              isActive ? {color : "red"} : undefined
            }>
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
        <Route path="/setting" element={<Setting />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/:nama" element={<Detail />} />
      </Routes>
    </React.Fragment>
  );
}
