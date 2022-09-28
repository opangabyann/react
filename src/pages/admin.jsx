import React from "react";
import { NavLink, Outlet ,useNavigate} from "react-router-dom";
import Button from "../komponen/button";

export default function Admin() {
    const navigate = useNavigate()
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} className="border-2 border-black h-auto">
      <div
        style={{ display: "flex", flexDirection: "column",marginLeft:10}}
        className="border-r-2 border-black"
      >
        <NavLink
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          className="my-5"
          to={"/admin/dashboard"}
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          to={"/admin/buku"}
        >
          Buku
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
          className="my-5"
          to={"/admin/About"}
        >
          About
        </NavLink>
      </div>

      <div >
         <Outlet/>
      </div>

      <div className="">
        <Button title={"back"} color={"white"} onClick={()=>{
            return navigate('/')
        }}/>
      </div>
    </div>
  );
}
