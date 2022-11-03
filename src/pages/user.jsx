import React from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Button from "../komponen/button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import { Delete, GetAllUser } from "../Api/user";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action/countAction";

import { authProses } from "../redux/reducers/authReducers";

export default function User() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([]);
  
  const [page, setPage] = React.useState(100);
  const [messageError, setMessageError] = React.useState("");
  const [isFetchUser, setIsFetchUser] = React.useState(false);
  const store = useSelector((state) => state);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log("store =>", store);
  console.log("count =>", count);
  // const navigate = useNavigate()x
  const getUserHandle = async () => {
    try {
      setIsFetchUser(true);
      const response = await GetAllUser(page);

      setUsers(response.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetchUser(false);
    }
  };

  const deleteUser = (id) => {
    console.log("jalan", id);
    Swal.fire({
      title: "serius?",
      text: "gabisa di balikin lagi loh!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "iya!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await Delete(id);
          Swal.fire("dihapus!", "udah di apus!", "success");
        } catch (e) {
          Swal.fire("gagal!", "gagal ngapus!", "error");
        }
      }
    });
  };

  React.useEffect(() => {
    getUserHandle();
  }, []);
  console.log("user", users);
  console.log("page", page);
  return (
    <div>
      <h1 className="">table user</h1>
      <Button
        title={"tambah user"}
        color={"white"}
        onClick={() => {
          navigate("/user/create");
        }}
      />
      <Button
        title={"logout"}
        color={"red"}
        text={"white"}
        onClick={() => {
          Cookies.remove("myapps_token");
          return navigate("/login");
        }}
      />
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
          {isFetchUser ? (
            <tr>
              <td colSpan={9}>
                <Skeleton
                  count={9}
                  baseColor="grey"
                  highlightColor="white"
                  borderRadius={50}
                />
              </td>
            </tr>
          ) : (
            users.map((user, index) => {
              return (
                <tr key={index} className="text-left border">
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.jenis_kelamin}</td>
                  <td>{user.stored_at}</td>
                  <td>{user.updated_at}</td>
                  <td>
                    <Button
                      title={"edit"}
                      onClick={() => {
                        return navigate(`/user/update/${user.id}`);
                      }}
                      color={"blue"}
                      text={"white"}
                    />

                    <Button
                      title={"delete"}
                      color={"red"}
                      text={"white"}
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    />
                  </td>
                  {/* <td>
                    <img className="rounded-full h-5 w-5" src={user.avatar} alt={user.avatar} />
                </td> */}
                </tr>
              );
            })
          )}
          <div className="border grid grid-cols-1 gap-5">
            <Button
              title={"green"}
              color="green"
              onClick={() => {
                dispatch({
                  type: "change",
                  color: "#379237",
                });
              }}
            />
            <Button
              title={"yellow"}
              color="yellow"
              onClick={() => {
                dispatch({
                  type: "change",
                  color: "#F0FF42",
                });
              }}
            />

            <Button
              title={"kembali"}
              color="red"
              text="white"
              onClick={() => {
                dispatch({
                  type: "return",
                  color: "FF5733",
                });
              }}
            />

            <p>status : {count.status}</p>
            <p>value : {count.value}</p>

            <Button
              onClick={() => {
                dispatch(increment());
              }}
              title={"tambah"}
            />

            <Button
              onClick={() => {
                dispatch(decrement());
              }}
              title={"kurang"}
            />
          </div>
        </tbody>
      </table>
    </div>
  );
}
