import React from "react";
import "./styles/style.css";
import Input from "./komponen/input";
import Button from "./komponen/button";

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange=(e)=>{
    e.preventDefault();
    console.log('oghey')
    setValues((values)=>{
        return{
            ...values,
            [e.target.name] :e.target.value
        }
    })
  }
  return (
    <React.Fragment>
      <div style={{display:'flex'}}>
        <form  style={{width:'50%',}}>
          <Input
            name="username"
            value={values.username}
            label={"username"}
            placeholder={"username"}
            onChange={(event)=>{
                event.preventDefault();
                console.log('ok jalan')
                console.log(event)
                setValues((values)=>{
                    return{
                        ...values,
                        username:event.target.value
                    }
                })
            }}
          />
          <Input
            name="email"
            value={values.email}
            isError={false}
            label={"email "}
            placeholder={"email"}
            onChange={handleChange}
          />
          <Input
            name="password"
            value={values.password}
            label={"password"}
            placeholder={"password"}
            onChange={handleChange}

          />
          <Input
            name="confirmPassword"
            value={values.confirmPassword}
            label={"konfirmasi password"}
            placeholder={"konfirmasi password"}
            onChange={handleChange}

          />
          <Button title={"confirm"} />
        </form>

        <div style={{width:'50%',border:'1px solid blue',height:'100vh'}}>
            <p>username : {values?.username}</p>
            <p>email : {values?.email}</p>
            <p>password : {values?.password}</p>
            <p>confirmPassword: {values?.confirmPassword}</p>

        </div>

        
      </div>
    </React.Fragment>
  );
}
