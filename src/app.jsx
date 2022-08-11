import React from "react";
import "./styles/style.css";
import Input from "./komponen/input";
import Button from "./komponen/button";
import Card from "./komponen/card";

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [data, setData] = React.useState([]);
  const [error,setError]= React.useState({})

  const handleChange = (e) => {
    e.preventDefault();
    console.log("oghey");
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("udah ke submit");

    values.id = new Date().getTime()
    setData((data) => {
      return [...data, values];
    });

    setValues((values) => {
      return {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    });

    if (e.target.value !== ''){
      
    }
  };

  const handleBlur= (e)=>{
    e.preventDefault();
    
    if (e.target.value === '') {
      setError((error)=>{
        return{
          ...error,
          [e.target.name] : true
        }

      })
    }
  };
  console.log('errors', error)

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <form style={{ width: "50%" }} onSubmit={handleSubmit}>
          <Input
            isError={error?.username}
            textError={'wajib diisi'}
            name="username"
            value={values.username}
            label={"username"}
            placeholder={"username"}
            onBlur={handleBlur}
            onChange={(event) => {
              event.preventDefault();
              console.log("ok jalan");
              console.log(event);
              setValues((values) => {
                return {
                  ...values,
                  username: event.target.value,
                };
              });
            }}
          />

          <Input
            isError={error?.email}
            textError={'wajib diisi'}
            
            name="email"
            value={values.email}
            label={"email "}
            placeholder={"email"}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          <Input
            isError={error?.password}
            textError={'wajib diisi'}

            name="password"
            value={values.password}
            label={"password"}
            placeholder={"password"}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          <Input
            isError={error?.confirmPassword}
            textError={'wajib diisi'}

            name="confirmPassword"
            value={values.confirmPassword}
            label={"konfirmasi password"}
            placeholder={"konfirmasi password"}
            onChange={handleChange}
            onBlur={handleBlur}

          />
          <Button title={"confirm"} />
        </form>

        <div
          style={{ width: "50%", border: "1px solid blue", height: "100vh" }}
        >
          <Card data={data} setData={setData}/>
        </div>
      </div>
    </React.Fragment>
  );
}
