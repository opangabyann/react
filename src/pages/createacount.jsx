import Input from "../komponen/input";
import Button from "../komponen/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "../komponen/jenisklmn";

export default function Create() {
    let navigate = useNavigate()
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "laki-laki",
    password: "",
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
    // console.log(user);
    try{
        setLoading(false)
        const response = await axios.post("https://belajar-react.smkmadinatulquran.sch.id/api/users/create")

        // return navigate ("/user")
    }catch(err){
    }
  }
  return (
    <div>
      <h1>tambah user</h1>
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

         {/* <Select 
         value={user.jenis_kelamin}
         name={"jenis_kelamin"}
         label={"jenis_kelamin"}
         onChange={handleChange}>
         <option >pilih option</option>
            <option value={"laki-laki"}>laki-laki</option>
            <option value={"perempuan"}>perempuan</option>
         </Select> */}

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

          <Button title={setLoading ? "simpan" : "sedang menyimpan"} />
        </div>
      </form>
    </div>
  );
}
