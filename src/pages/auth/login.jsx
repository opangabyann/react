import Cookies from "js-cookie";
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
import React from "react";
import Input from "../../komponen/input";
import { LoginProsses } from "../../Api/auth";
import Swal from "sweetalert2";


export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [Payload, setPayload] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setPayload((Payload) => {
      return {
        ...Payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setLoading(true)
        const response = await LoginProsses(Payload);
        const data = response.data;
        Cookies.set("myapps_token" , data?.token);
        return navigate('/artikel');
               
    } catch (e) {
      console.log(e)
      Swal.fire({
        icon: 'error',
        title: 'gagal mas!',
        text: 'Ada yang masih kosong masehh',
      })
    }finally{
        setLoading(false) 
    }
    console.log("jalan", Payload);
  };
  return (
    <div>
      <h1>page Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name={"email"}
          //   value={"email"}
          label={"email"}
          placeholder={"email"}
          type={"email"}
          onChange={handleChange}
        />
        <Input
          name={"password"}
          //   value={"password"
          label={"password"}
          placeholder={"password"}
          type={"password"}
          onChange={handleChange}
        />
        <Button
          color="blue"
          text="white"
          title={loading ? "proses" : "login"}
          //   onClick={() => {
          //     Cookies.set("myapps_token", "ini isi token");
          //     return navigate("/user", { replace: true });
          //   }}
        />
      </form>
    </div>
  );
}
