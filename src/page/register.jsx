import React from "react";
import Button from "../komponen/button";
import Input from "../komponen/input";
import Option from "../komponen/option";

export default function Register() {
  return (
    <React.Fragment>
      <section className="w-screen h-screen bg-black flex justify-center items-center">
        <div className="w-[95%] h-[95%] bg-white flex justify-center">
          <div className="w-[50%] h-[50%] flex flex-col mt-[35px]">
            <p className="font-semibold text-[35px] text-center">Register</p>
            <section className="w-[100%] h-[100%] flex flex-row justify-between">
              <div className="w-[50%] h-[45%] flex flex-col bg-white px-1">
                <Input
                  label="Alamat email"
                  placeholder={"email"}
                  inputStyle={
                    "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
                  }
                  labelStyle={"text-center font-semibold mt-[40px] mb-[5px]"}
                />
                <Input
                  label="password"
                  placeholder={"passwprd"}
                  inputStyle={
                    "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
                  }
                  labelStyle={"text-center font-semibold mt-[20px] mb-[5px]"}
                />
                <Input
                  label="konfirmasi password"
                  placeholder={"konfirmasi password"}
                  inputStyle={
                    "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
                  }
                  labelStyle={"text-center font-semibold mt-[20px] mb-[5px]"}
                />
                <Input
                  label="Alamat"
                  placeholder={"Alamat"}
                  inputStyle={
                    "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
                  }
                  labelStyle={"text-center font-semibold mt-[20px] mb-[5px]"}
                />
              </div>

              <div className="w-[50%] h-[45%] flex flex-col bg-white px-1">
                <Input
                  label="nama pengguna"
                  placeholder={"nama pengguna"}
                  type="number"
                  inputStyle={
                    "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
                  }
                  labelStyle={"text-center font-semibold mt-[40px] mb-[5px]"}
                />
                <Input
                  label="nomor telepon"
                  placeholder={"nomor telepon"}
                  type="number"
                  inputStyle={
                    "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
                  }
                  labelStyle={"text-center font-semibold mt-[20px] mb-[5px]"}
                />
                <Input
                  label="jenis kelamin"
                  placeholder={"jenis kelamin"}
                  inputStyle={
                    "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
                  }
                  labelStyle={"text-center font-semibold mt-[20px] mb-[5px]"}
                />
                <Button
                  title={"register"}
                  buttonStyle={
                    "w-[100%] bg-black text-white p-1 rounded-md mt-[50px]"
                  }
                />
              </div>
            </section>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
