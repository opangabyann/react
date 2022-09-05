import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

export default function User() {
  const [user, setUser] = React.useState([
    {
      name: "Akbar",
      kelas: "XI RPL",
    },
    {
      name: "Bayu",
      kelas: "XI RPL",
    },
    {
      name: "Hilmi",
      kelas: "XI RPL",
    },
    {
      name: "Gathfan",
      kelas: "XI RPL",
    },
    {
      name: "Rauza",
      kelas: "XI TKJ",
    },
  ]);
  return (
    <div>
      <h1>User Page</h1>
      <div className="flex flex-col">
      {user?.map((item) => {
            return (
              <div>
                <NavLink to={`${item.name}/${item.kelas}`}>{item.name}</NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}