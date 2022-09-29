
import Input from "../komponen/input";
import Button from "../komponen/button";
import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { Detailuser, Update } from "../Api/user";
import Skeleton from 'react-loading-skeleton'
import Swal from "sweetalert2";

// import Select from "../komponen/jenisklmn";x 

export default function UpdateUser() {
    let navigate = useNavigate()
    let {id} = useParams()
  const [loading, setLoading] = React.useState(false);
  const [isFetchUser, setIsFetchUser] = React.useState(false)

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "laki-laki",
    password : "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(user);

    try{
      setLoading(true)
        const response = await Update(id , user)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "udah disimpen ke backend",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsFetchUser(false)
        setLoading(false)
    }catch(err){
      // setLoading(false)
    }
  };

  const getDetailUser = async(id)=>{
    try{
        const response = await Detailuser(id)

        console.log(response.data)

        const dataUser = response.data.data;

        console.log(dataUser)
        setUser((user)=>{
            return {
                username: dataUser.username,
                email: dataUser.email,
                name: dataUser.name,
                jenis_kelamin: dataUser.jenis_kelamin,
                password: dataUser.password,
                password_confirmation: dataUser.password_confirmation,
            }
        })
    }catch(err){}
  }
  React.useEffect(()=>{
    getDetailUser(id)
  },[])
  return (
    <div>
      <h1>user dengan id {id}</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""></label>
          <Input
            value={user.username}
            name={"username"}
            label={"username"}
            placeholder={"nama"}
            onChange={handleChange}
          />
          <Input value={user.name} name={"name"} label={"name"} onChange={handleChange} />
          <Input value={user.email} name={"email"} label={"email"} onChange={handleChange} />
          <Input value={user.jenis_kelamin} name={"jenis_kelamin"} label={"jenis_kelamin"} onChange={handleChange} />

          
          <Input
            value={user.password}
            name={"password"}
            label={"password"}
            onChange={handleChange}
          />
          <Input
            value={user.password_confirmation}
            name={"password_confirmation"}
            label={"konfirmasi password"}
            onChange={handleChange}

          />

          <Button title={loading ? "sedang menyimpan" : "simpan"} color={"white"}/>
        </div>
      </form>
    </div>
  );
}
