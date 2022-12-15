import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/Button";
import Input from "../../komponen/Input";
import Option from "../../komponen/option";
import { useDispatch } from "react-redux";
import { RegisterProsses } from "../../API/auth";
import Swal from "sweetalert2";
import { authRegister } from "../../redux/action/authaction";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);
  const [formError, setformError] = React.useState("");
  // const [loading,setLoading] = React.useState()
  const [emailError, setEmailError] = React.useState("");
  const [jenisKelaminError, setJenisKelaminError] = React.useState("");
  const [statusError, setstatusError] = React.useState("");
  const [nameError, setnameError] = React.useState("");
  const [passwordError, setpasswordError] = React.useState("");
  const [user, setUser] = React.useState({
    name: "",
    password: "",
    email: "",
    jenisKelamin: "",
    status: "",
  });

  const handleChange = (e) => {
    setUser(() => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
    if (
      user.name !== "" ||
      user.email !== "" ||
      user.password !== "" ||
      user.jenisKelamin !== "" ||
      user.status !== ""
    ) {
      if (user.name !== "") {
        setnameError("");
      }
      if (user.email !== "") {
        setEmailError("");
        setformError("");
      }
      if (user.password !== "") {
        setpasswordError("");
      }
      if (user.jenisKelamin !== "") {
          setJenisKelaminError("")
      }
      if (user.status !== "status") {  
          setstatusError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      user.email === "" ||
      user.password === "" ||
      user.name === "" ||
      user.jenisKelamin === "" ||
      user.status === ""
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "masih ada yang kosong!",
      });

      if (user.name === "") {
        setnameError("username wajib diisi!");
      }
      if (user.email === "") {
        setEmailError("email wajib diisi!");
      }
      if(user.password === ""){
        setpasswordError("password wajib diisi!")
      }
      if (
        user.jenisKelamin !== "laki-laki" ||
        user.jenisKelamin !== "perempuan"
      ) {
        if (user.jenisKelamin !== "laki-laki") {
          setJenisKelaminError("gender wajib diisi!");
        }
        if (user.jenisKelamin !== "perempuan") {
          setJenisKelaminError("gender wajib diisi!");
        }
      }
      if (user.status !== "active" || user.status !== "non active") {
        if (user.status !== "active") {
          setstatusError("status wajib diisi!");
        }
        if (user.status !== "non active") {
          setstatusError("status wajib diisi!");
        }
      }

      return;
    } else
      try {
        setLoading(false);
        const response = await dispatch(authRegister(user));
        console.log("response => ", response);
        // setLoading(true)
        if(response?.response?.data?.errors.email.msg === "Email sudah digunakan" || response?.response?.data?.errors.password.msg === "Password wajib 8 huruf"){
          if(response?.response?.data?.errors.email.msg === "Email sudah digunakan"){
            setEmailError("Email sudah digunakan")
          }
          if( response?.response?.data?.errors.password.msg === "Password wajib 8 huruf"){
            setpasswordError("Password wajib 8 huruf")
          }
        }
        if (response?.status === "Success") {
          
          navigate("/login");

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: response?.msg,
          });
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: response?.response?.data?.errors?.email?.msg,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
  };
  return (
    <section className="flex h-screen w-screen bg-[rgb(28,79,73)]">
      <section className=" flex w-[50%] h-screen items-center justify-center">
        <div className="flex w-[95%] h-[95%] bg-[#F5F3EF] rounded-tl-2xl rounded-bl-2xl"></div>
      </section>

      <section className="w-[50%] h-screen flex">
        <div className="w-[50%] flex flex-col  mt-12 ml-10">
          <h1 className="font-bold text-xl text-white mb-5">Register</h1>

          <form action="" onSubmit={handleSubmit}>
            <Input
              name="name"
              value={user.name}
              label={"Username"}
              onChange={handleChange}
              placeholder="Username"
              inputStyle={`input-text border border-white bg-[rgb(28,79,73)] rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3`}
            />
            <p className="text-xs italic text-red-500 font-semibold">
              {nameError}
            </p>
            <Input
              name="email"
              value={user.email}
              label={"Email"}
              onChange={handleChange}
              placeholder="Email"
              inputStyle={`input-text border border-white bg-[rgb(28,79,73)] rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3`}
            />
            <p className="text-xs italic text-red-500 font-semibold">
              {emailError}
            </p>
            <Input
              name="password"
              label={"Password"}
              onChange={handleChange}
              placeholder="Password"
              inputStyle={`input-text border border-white bg-[rgb(28,79,73)] rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3`}
            />
            <p className="text-xs italic text-red-500 font-semibold">
              {passwordError}
            </p>

            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-[50%]">
                <Option
                  name="jenisKelamin"
                  value={user.jenisKelamin}
                  label={"gender"}
                  onChange={handleChange}
                  option1={"laki-laki"}
                  option2={"perempuan"}
                  optionStyle={`bg-[rgb(28,79,73)] outline-none border border-white text-white text-sm rounded-lg focus:ring-white focus:border-white block w-[95%] p-2 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3`}
                />
                <p className="text-xs italic text-red-500 font-semibold">
                  {jenisKelaminError}
                </p>
              </div>

              <div className="w-[50%]">
                <Option
                  name="status"
                  value={user.status}
                  label={"status"}
                  onChange={handleChange}
                  option1={"active"}
                  option2={"non active"}
                  optionStyle={`bg-[rgb(28,79,73)] outline-none border border-white text-white text-sm rounded-lg focus:ring-white focus:border-white block w-[100%] p-2 focus:outline-none focus:border-2 focus:border-[#FC671A] focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3`}
                />
                <p className="text-xs italic text-red-500 font-semibold">
                  {statusError}
                </p>
              </div>
            </div>
            <p
              className="text-[#FC671A] text-xs flex justify-end cursor-pointer"
              onClick={() => {
                return navigate("/forgotpassword");
              }}
            >
              forgot password ?
            </p>
            <div className="flex justify-center items-center mt-8">
              <Button
                title={loading ? "Register" : "proses"}
                buttonStyle={`w-[70%] text-white bg-[#FC671A] py-2 rounded-md  hover:border hover:border-white`}
                // onClick={() => {
                //   return navigate("/home");
                // }}
              />
            </div>
          </form>

          <div className="flex justify-center mt-5">
            <p
              className="text-white text-xs flex justify-center mt-2 cursor-pointer"
              onClick={() => {
                return navigate("/login");
              }}
            >
              Already have an account ?
            </p>
            <p
              className="text-[#FC671A] text-xs flex justify-center mt-2 cursor-pointer ml-1"
              onClick={() => {
                return navigate("/login");
              }}
            >
              login
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
