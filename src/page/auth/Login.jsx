import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/Button";
import Input from "../../komponen/Input";
import { authLogin } from "../../redux/action/authaction";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const nama = useSelector((state)=> state.authProses.name)

  // console.log(nama)
  const [formError, setformError] = React.useState("");
  // const [loading,setLoading] = React.useState()
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setpasswordError] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [User, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser(() => {
      return {
        ...User,
        [e.target.name]: e.target.value,
      };
    });
    if (User.email !== "" || User.password !== "" || User.password > 7) {
      if (User.email !== "") {
        setEmailError("");
        setformError("")
      }
      if (User.password !== "" ) {
          setpasswordError("minimal 8 karakter");
      }
      if(User.password.length > 7){
        setpasswordError("")
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (User.email === "" || User.password === "") {
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
        title: "masih ada yang kosong",
      });
      if(User.email === ""){
      setEmailError("email wajib diisi!");

      }
      if(User.password === ""){
        setpasswordError("password wajib diisi")
      }
      
      return;
    }else
    try {
      setLoading(false);
      const response = await dispatch(authLogin(User));
      console.log("response =>", response);
      if(User.password < 8){
        setpasswordError("password wajib 8 huruf")
      }
      // setLoading(true)
      if (response?.status === "Success") {
        navigate("/home");

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
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
          title: response?.response?.data?.msg,
        });
        setEmailError(response?.response?.data?.msg);
      }
    } catch (err) {
      console.log(err);
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
        <div className="w-[50%] flex flex-col  mt-40 ml-14">
          <h1 className="font-bold text-xl text-white mb-5">Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <p className="text-xs italic text-red-500 font-semibold">
              {formError}
            </p>
            <Input
              name={"email"}
              value={User.email}
              onChange={handleChange}
              label={"Email"}
              placeholder="Email"
              inputStyle={`input-text text-white border border-white bg-[rgb(28,79,73)] enabled:text-white rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A]  focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3 `}
            />
            <p className="text-xs italic text-red-500 font-semibold">
              {emailError}
            </p>
            <Input
              name={"password"}
              value={User.password}
              onChange={handleChange}
              label={"Password"}
              placeholder="Password"
              inputStyle={`input-text text-white border border-white bg-[rgb(28,79,73)] rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A]  focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white`}
            />
            <p className="text-xs italic text-red-500 font-semibold">
              {passwordError}
            </p>
            <p
              className="text-[rgb(252,103,26)] text-xs flex justify-end mt-2 cursor-pointer"
              onClick={() => {
                return navigate("/forgotpassword");
              }}
            >
              forgot password?
            </p>
            <div className="flex justify-center items-center mt-8">
              <Button
                title={loading ? "Login" : "proses"}
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
                return navigate("/register");
              }}
            >
              Dont have an account ?
            </p>
            <p
              className="text-[#FC671A] text-xs flex justify-center mt-2 cursor-pointer ml-1"
              onClick={() => {
                return navigate("/register");
              }}
            >
              register
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
