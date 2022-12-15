import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../komponen/Button";
import Input from "../komponen/Input";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { authForgotPW } from "../redux/action/authaction";

export default function ForgotPW() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {id ,token} = useParams()
  const [emailError,setEmailError] = React.useState("")
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState({
    email: "",
  });

  const handleChange = (e) => {
    setUser(() => {
      return {
        ...user,
        [e.target.name]: e.target.value,
      };
    });

    setEmailError("")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if ()
    try {
      setLoading(false);
      const response = await dispatch(authForgotPW(user));
      console.log("response =>", response);
      // setLoading(true)
      if(response?.status === 'Success'){
        // navigate('/home')
     
       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true, 
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer);
           toast.addEventListener('mouseleave', Swal.resumeTimer);
         },
       });

       Toast.fire({
         icon: 'success',
         title: response?.msg,
       });
     }else{
       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 3000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer);
           toast.addEventListener('mouseleave', Swal.resumeTimer);
         },
       });

       Toast.fire({
         icon: 'error',
         title: response?.response?.data?.msg,
       });
       setEmailError(response?.response?.data?.msg)
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
            <RiLockPasswordLine color="#FC671A" size={28} />
          </div>

          <div className="flex ">
            <h1 className="font-bold text-2xl text-white mt-5 flex-col">
              Forgot password?
            </h1>
          </div>
          <div>
            <p className="text-[rgba(255,255,255,0.7)] font-normal">
              No worries we'll send you reset instruction
            </p>
          </div>
          <div className="w-[50%] mt-7">
            <form action="" onSubmit={handleSubmit}>
              <Input
                name="email"
                value={user.email}
                onChange={handleChange}
                label={"Email"}
                placeholder="Email"
                inputStyle={`input-text border border-white bg-[rgb(28,79,73)] rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] placeholder:text-white enabled:text-slate-200 `}
              />
              <p className="text-xs italic text-red-500 font-semibold mb-5">{emailError}</p>
              <Button
                title={loading ? "Send email" : "proses"}
                buttonStyle={`w-[100%] text-white bg-[#FC671A] py-2 rounded-md  hover:border hover:border-white`}
                // onClick={()=>{
                //   return navigate ('/resetpassword')
                // }}
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
