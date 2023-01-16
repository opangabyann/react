import React from "react";
import Button from "../komponen/button";
import Input from "../komponen/input";

export default function ResetPw() {
  return (
    <React.Fragment>
      <section className="w-screen h-screen bg-black flex justify-center items-center">
        <div className="w-[95%] h-[95%] bg-white flex justify-center ">
          <div className="w-[25%] h-[25%] flex flex-col mt-[35px]">
            <p className="font-semibold text-[35px] text-center">
              Reset password
            </p>
            <Input
              label="Password baru"
              placeholder={"Password baru"}
              inputStyle={
                "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
              }
              labelStyle={"text-center font-semibold mt-[40px] mb-[5px]"}
            />
            <Input
              label="Konfirmasi password"
              placeholder={"Konfirmasi password"}
              inputStyle={
                "border border-[rgb(194,194,194)] rounded-md px-2 py-1"
              }
              labelStyle={"text-center font-semibold mt-[20px] mb-[5px]"}
            />
            <Button
              title={"reset password"}
              buttonStyle={
                "w-[100%] bg-black text-white p-1 rounded-md mt-[30px]"
              }
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
