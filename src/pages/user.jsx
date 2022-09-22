import React from "react";
import axios from "axios";
import { Link, NavLink  } from "react-router-dom";
import Button from "../komponen/button";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate()
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(100);
  // const navigate = useNavigate()x
  const getUserHandle = async () => {
    try {
      const response = await axios.get("https://belajar-react.smkmadinatulquran.sch.id/api/users/100");
      console.log("response =>", response.data);
      setUsers(response.data.data);
      setPage(response.data.page);
    } catch (err) {}
  };

  React.useEffect(()=>{
    getUserHandle();

  },[page])
  console.log("user", users);
  console.log("page", page);
  return (
    <div>
    
      <h1 className="">table user</h1>
      <Link to={"/user/create"}> <p>tambah user</p></Link>
      <table className="table-auto">
        <thead>
          <tr>
            <th>No</th>
            <th>username</th>
            <th>nama</th>
            <th>email</th>
            <th>jenis kelamin</th>
            <th>Dibuat</th>
            <th>diupdate</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index
          ) => {
            return (
              <tr key={index} className="text-left border">
                <td>{index +1}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.jenis_kelamin}</td>
                <td>{user.stored_at}</td>
                <td>{user.updated_at}</td>
                <td><Button title={"edit"} onClick={()=>{
                  return navigate (`/user/update/${user.id}`)
                }} color={"red"} />

                <Button title={"delete"} color={"blue"}/>
                </td>
                {/* <td>
                    <img className="rounded-full h-5 w-5" src={user.avatar} alt={user.avatar} />
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
         <p>saat ini di page{page}</p>

      <div className="flex items-center">
        <button onClick={()=>{
            setPage(page -1)
        }}>previous</button>
        <button onClick={()=>{
            setPage(page + 1)
        }}>next</button>
      </div>
    </div>
  );
}
