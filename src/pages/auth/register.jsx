import React from "react";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import { useDispatch } from "react-redux";
import { RegisterProsses } from "../../Api/auth";
import { authRegister } from "../../redux/action/authAction";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [loading,setLoading] = React.useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [messageError, setMessageError] = React.useState("");
    const [nameError, setNameError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [password_confirmationError, setPWConfirmationError] = React.useState("");
  const [Payload, setPayload] = React.useState({
    name: "",
    password: "",
    password_confirmation: "",
    email: "",
  });

  const handleChange = (e) => {
    setPayload(()=>{
        return {
            ...Payload,
            [e.target.name] : e.target.value,
        }
    })
  }
  const handleSubmit = async(e)=> {
    e.preventDefault();
    try{
        setLoading(true)
        const response = await dispatch(authRegister(Payload))
        console.log("regster =>" , response)
        if(response?.status === 'Success'){
            return navigate('/artikel')
          }else{
            setMessageError(response?.response?.data?.message)
            setNameError(response?.response?.data?.errors.name)
            setEmailError(response?.response?.data?.errors.email)
            setPasswordError(response?.response?.data?.errors.password)
            setPWConfirmationError(response?.response?.data?.errors.password_confirmation)
          }
    }catch(err){
        console.log(e)
    }finally{
        setLoading(false)
    }
  }

  return (
    <div>
      <h1>page register</h1>
      <h1 className="text-red-600 italic">{messageError}</h1>

      <form onSubmit={handleSubmit}>
        <Input
          name={"name"}
            value={Payload.name}
          label={"username"}
          placeholder={"username"}
        
          onChange={handleChange}
        />
        <p className="text-red-600 italic">{nameError}</p>
        <Input
          name={"email"}
            value={Payload.email}
          label={"email"}
          placeholder={"email"}
          type={"email"}
          onChange={handleChange}
        />
        <p className="text-red-600 italic">{emailError}</p>
        <Input
          name={"password"}
            value={Payload.password}
          label={"password"}
          placeholder={"password"}
          type={"password"}
          onChange={handleChange}
        />
        <p className="text-red-600 italic">{passwordError}</p>
        <Input
          name={"password_confirmation"}
            value={Payload.password_confirmation}
          label={"password_confirmation"}
          placeholder={"password_confirmation"}
          type={"password"}
          onChange={handleChange}
        />
        <p className="text-red-600 italic">{password_confirmationError}</p>
        <Button color="blue" text="white" title={loading ?"proses" : "submit"}/>
      </form>
    </div>
  );
}
