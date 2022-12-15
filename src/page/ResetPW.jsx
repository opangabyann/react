import React from "react";
import { RiKey2Fill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../komponen/Button";
import Input from "../komponen/Input";
import { useNavigate, useParams } from "react-router-dom";
import { authResetPW } from "../redux/action/authaction";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function ResetPW() {
  const navigate = useNavigate();
  const { id, token } = useParams();
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);
  const [passwordError, setPasswordError] = React.useState("");
  const [user, setUser] = React.useState({
    passwordBaru: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setUser(() => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });
    if(user.passwordBaru === user.confirm){
      setPasswordError("")
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.passwordBaru !== user.confirm) {
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
        title: "password wajib sama",
      });
      if (user.passwordBaru !== user.confirm) {
        setPasswordError("password wajib sama");
      }
      return;
    } else
      try {
        setLoading(false);
        const response = await dispatch(authResetPW(id, token, user));
        console.log("responseReset =>", response);
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
            title: response?.msg,
          });
          //  setEmailError(response?.response?.data?.msg)
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(true);
      }
  };
  return (
    <React.Fragment>
      <section className="h-screen w-screen bg-[#1c4f49] flex justify-center">
        <section className="w-[50%] flex flex-col justify-start items-center  mt-6">
          <div className="rounded-full flex justify-center items-center bg-[#F5F3EF] h-14 w-14 pb-1">
            <RiKey2Fill color="#FC671A" size={28} />
          </div>

          <div className="flex ">
            <h1 className="font-bold text-2xl text-[rgb(255,255,255)] mt-5 flex-col">
              Set new password!
            </h1>
          </div>
          <div>
            <p className="text-[rgba(255,255,255,0.7)] font-normal">
              your new password must be different to previously used password
            </p>
          </div>
          <div className="w-[50%] mt-7">
            <form action="" onSubmit={handleSubmit}>
              <Input
                onChange={handleChange}
                name="passwordBaru"
                value={user.password}
                label={"New password"}
                placeholder="Password"
                inputStyle={`input-text border border-white bg-[rgb(28,79,73)] rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A]  focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3`}
              />
              <p className="text-xs italic text-red-500 font-semibold">
              {passwordError}
            </p>
              <Input
              onChange={handleChange}
              name="confirm"
              value={user.password}
                label={"confirm new password"}
                placeholder="confirm password"
                inputStyle={`input-text border border-white bg-[rgb(28,79,73)] rounded-md pl-4 p-1 focus:text-white focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A]  focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3`}
              />
              <p className="text-xs italic text-red-500 font-semibold">
              {passwordError}
            </p>
              <Button
                title={loading ? "Reset password" : "proses"}
                buttonStyle={`w-[100%] text-white bg-[#FC671A] py-2 rounded-md mt-4 hover:border hover:border-white`}
              />
            </form>
          </div>

          <div className="w-[50%] flex flex-row justify-center mt-10">
            <AiOutlineArrowLeft
              color="#FC671A"
              onClick={() => {
                return navigate("/login");
              }}
              className="cursor-pointer mr-3"
            />
            <p
              className="text-white text-xs cursor-pointer"
              onClick={() => {
                return navigate("/login");
              }}
            >
              Back to login
            </p>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
}
