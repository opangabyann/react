import React from "react";
import Button from "../komponen/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate()

    const handleLogin= () => {
        navigate("/admin/dashboard")
    }

    const handleHome= () => {
        navigate("/Home")
    }
  return (
    <React.Fragment>
      <div>
        <h1 className="text-center ">penilaian tengah semester 2022</h1>
        
        <div className="flex flex-row justify-end">
        <div className="">
          <Button title={"home"} color={"white"} onClick={handleHome}></Button>
        </div>

        <div className="mx-3">
          <Button title={"login"} color={"white"} onClick={handleLogin}/>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}
