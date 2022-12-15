import React from "react";
import { BsFillPlusSquareFill, BsPlusSquare } from "react-icons/bs";
import { HiOutlinePlusSm } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import Button from "./Button";
export default function CardKeranjang({ harga, gambar, namaProduk ,handle}) {
  return (
    <div className="w-[700px] h-[150px]  bg-white rounded-md shadow-lg shadow-[rgb(28,79,73)] flex flex-row">
      <div className="w-[20%] h-[100%] bg-green-500 rounded-md">
        <img src={gambar} alt={namaProduk} className="w-full h-full" />
      </div>

      <div className="flex flex-col w-[20%] h-[100%] justify-between p-3 ml-3">
        <p className="text-lg font-semibold">{namaProduk}</p>
        <p className="text-lg font-semibold">{harga}</p>

        <div className="flex flex-row w-[80%] justify-between">
          <div className="border border-[#FC671A] w-[30px] rounded-md flex items-center justify-center cursor-pointer">
            <HiOutlinePlusSm color="#FC671A" size={20} />
          </div>

          <p>5</p>
          <div className="border border-[#FC671A] w-[30px] rounded-md flex items-center justify-center cursor-pointer">
            <AiOutlineMinus color="#FC671A" size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[55%] h-[100%] justify-between p-3 ml-3 items-end">
        <p className="text-lg font-semibold justify-center">{harga}</p>

        <Button title={'delete'} buttonStyle="w-[40%] text-white bg-red-500 text-white py-2 rounded-md  " onClick={handle}/>
      </div>
    </div>
  );
}
