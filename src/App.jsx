import React from "react";
import { Input, Textarea, Button } from "./komponen/input";
import Card from "./komponen/card";

export default function App() {
  const [values, setValues] = React.useState({
    judul: "",
    catatan: "",
  });
  const [data, setData] = React.useState([]);
  const [error,setError] = React.useState("")
  

  const handleChange = (e) => {
    e.preventDefault();
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.judul === ""){
      alert ('judul nya belum diisi')
      setError((error)=>{
        error('masih kosong')
      })
    }else if (values.catatan === ""){
      alert ('catatan nya belum diisi')
    }
    
    values.id = new Date().getTime()
    setData((data) => {
      return [...data, values];
    });
    setValues((values) => {
      return{
        judul: "",
      catatan: "",
      }
    })
  };

  const handleBlur = (e) => {
    e.preventDefault();
    
    if (e.target.value === "") {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    } else {
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
    }
  };

  return (
    <React.Fragment>
      <p className="border">Notes</p>
      <form onSubmit={handleSubmit}>
        
          <div className="w-1/5">
            <p className="font-sans">Buat Catatan</p>

            <Input
              isError ={error?.judul}
              textError ={'wajib diisi'}
              name={"judul"}
              value={values.judul}
              label={"judul"}
              placeholder={"judul"}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Textarea
              name={"catatan"}
              value={values.catatan}
              label={"catatan"}
              placeholder={"catatan"}
              onChange={handleChange}
              onBlur={handleBlur}

            />

            <Button title={"confirm"} />
          </div>

          <div>
            <Card data={data} setData={setData}/>
          </div>

      </form>
    </React.Fragment>
  );
}
