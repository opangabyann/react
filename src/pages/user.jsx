import React from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const getUserHandle = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page= ${page}`);
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
      

      <h1>table user</h1>
      <table className="table-cell">
        <thead>
          <tr>
            <th>No</th>
            <th>email</th>
            <th>first name</th>
            <th>last name</th>
            <th>Avatar</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,index
          ) => {
            return (
              <tr key={index} className="text-left border">
                <td>{index +1}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                    <img className="rounded-full h-5 w-5" src={user.avatar} alt={user.avatar} />
                </td>
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
