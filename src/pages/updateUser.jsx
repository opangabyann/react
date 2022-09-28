
import Input from "../komponen/input";
import Button from "../komponen/button";
import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
// import Select from "../komponen/jenisklmn";x 

export default function UpdateUser() {
    let navigate = useNavigate()
    let {id} = useParams()
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "laki-laki",
 
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
        setLoading(false)
        const response = await axios.put(`https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${id}`,user)
        // setLoading(true)
        // return navigate ("/user")
    }catch(err){

    }
  };

  const getDetailUser = async(id)=>{
    try{
        const response = await axios.get(`https://belajar-react.smkmadinatulquran.sch.id/api/users/detail/${id}`)

        console.log(response.data)

        const dataUser = response.data.data;

        console.log(dataUser)
        setUser((user)=>{
            return {
                username: dataUser.username,
                email: dataUser.email,
                name: dataUser.name,
                jenis_kelamin: dataUser.jenis_kelamin,
            }
        })
    }catch(err){}
  }
  React.useEffect(()=>{
    getDetailUser()
  },[id])
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

          <Button title={setLoading ? "sedang" : "simpan"} />
        </div>
      </form>
    </div>
  );
}
