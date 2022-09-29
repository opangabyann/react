import Input from "../komponen/input";
import Button from "../komponen/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "../komponen/jenisklmn";
import Swal from "sweetalert2";
import { CreateUser } from "../Api/user";

export default function Create() {
  let navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState({});
  const [messageError, setMessageError] = React.useState("");
  const [gagal, setGagal] = React.useState({});
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "laki-laki",
    password: "",
    password_confirmation: "",
  });

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: true,
        };
      });
    }
  };

  const handleChange = (e) => {
    setUser((user) => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user);
    try {
      setLoading(false);
      const response = await CreateUser(user)
      setLoading(true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "udah disimpen ke backend",
        showConfirmButton: false,
        timer: 1500,
      });
      // return navigate ("/user")
    } catch (err) {
      setLoading(true);
      setMessageError("periksa lagi mas")
      setGagal(err?.response?.data?.errors);
      console.log("gagal =>", gagal);
    }
  };
  return (
    <div>
      <h1>tambah user</h1>
      <h1 className="text-red-600 italic font-semibold text-sm">
        {messageError}
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""></label>
          <Input
            value={user.username}
            name={"username"}
            label={"username"}
            placeholder={"nama"}
            onChange={handleChange}
            onBlur={handleBlur}
            isError={error.username}
            textError={"yang ini wajib diisi mas"}
          />
          <p className="text-red-600 italic font-semibold text-sm">
            {gagal?.username?.[0]}
          </p>
          <Input
            value={user.name}
            name={"name"}
            label={"name"}
            onChange={handleChange}
            onBlur={handleBlur}
            textError={"jangan dikosongin mas"}
            isError={error.name}
          />
          <p className="text-red-600 italic font-semibold text-sm">
            {gagal?.name?.[0]}
          </p>

          <Input
            value={user.email}
            name={"email"}
            label={"email"}
            onChange={handleChange}
            onBlur={handleBlur}
            isError={error.email}
            textError={"jangan dikosongin mas"}
          />
          <p className="text-red-600 italic font-semibold text-sm">
            {gagal?.email?.[0]}
          </p>

          <Input
            value={user.jenis_kelamin}
            name={"jenis_kelamin"}
            label={"jenis_kelamin"}
            onChange={handleChange}
            onBlur={handleBlur}
            isError={error.jenis_kelamin}
            textError={"jangan dikosongin mas"}
          />
          <p className="text-red-600 italic font-semibold text-sm">
            {gagal?.jenis_kelamin?.[0]}
          </p>

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
            onBlur={handleBlur}
            isError={error.password}
            textError={"jangan dikosongin mas"}
          />
          <p className="text-red-600 italic font-semibold text-sm">
            {gagal?.password?.[0]}
          </p>

          <Input
            value={user.password_confirmation}
            name={"password_confirmation"}
            label={"konfirmasi password"}
            onChange={handleChange}
            onBlur={handleBlur}
            isError={error.password_confirmation}
            textError={"jangan dikosongin mas"}
          />
          <p className="text-red-600 italic font-semibold text-sm">
            {gagal?.password_confirmation?.[0]}
          </p>

          <Button
            title={loading ? "simpan" : "sedang menyimpan"}
            text={"black"}
            color={"white"}
          />

          <Button title={"kembali"} text={"black"} color={"white"} onClick={()=>{
            navigate ('/user')
          }}/>
        </div>
      </form>
    </div>
  );
}
