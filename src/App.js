import React from "react";
import Input from "./komponen/input";
import "./styles/style.css";
import Card from "./komponen/card";
import Select from "./komponen/select";

function App() {
  const [values, setValues] = React.useState({
    nama: "",
    email: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    password: "",
    confirmPassword: "",
  });

  const [data, setData] = React.useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    // console.log("sabi");
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.values,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setData((data) => {
      return [...data, values];
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setValues((values) => {
      return {
        nama: "",
        email: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin: "",
        password: "",
        confirmPassword: "",
      };
    });
  };
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <form onSubmit={handleSubmit}>
          <Input
            value={values.nama}
            name="nama"
            label={"nama"}
            placeholder={"nama"}
            onChange={handleChange}
          />
          <Input
            value={values.email}
            name="email"
            label={"email"}
            onChange={handleChange}
            placeholder={"email"}
          />
          <Input
            value={values.tempatLahir}
            name="tempatLahir"
            label={"tempat lahir"}
            onChange={handleChange}
            placeholder={"tempat lahir"}
          />
          <Input
            value={values.tanggalLahir}
            name="tanggalLahir"
            label={"tanggal lahir"}
            placeholder={"tanggal lahir"}
            type={"date"}
            onChange={handleChange}
          />
          <Input
            value={values.jenisKelamin}
            name="jenisKelamin"
            label={"jenis kelamin"}
            placeholder={"jenis kelamin"}
            type={<Select />}
            onChange={handleChange}
          />
          <Input
            value={values.password}
            name="password"
            label={"password"}
            placeholder={"password"}
            onChange={handleChange}
          />
          <Input
            value={values.confirmPassword}
            name="confirmPassword"
            label={"konfirmasi password"}
            placeholder={"konfirmasi password"}
            onChange={handleChange}
          />

          <button onClick={handleReset} className="reset">
            reset
          </button>
          <button className="simpan">simpan</button>
        </form>

        <div>
          {/* <p>nama : {values?.nama}</p> */}
          <Card data={data} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
