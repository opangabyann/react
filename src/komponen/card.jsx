import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Card({ namaProduk, rating, harga, desc, gambar }) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="w-[250px] h-[300px] bg-white rounded-md shadow-lg shadow-[rgb(28,79,73)] flex flex-col justify-between cursor-pointer">
        <div className="w-[100%] h-[55%] bg-[rgb(28,79,73)]  rounded-t-md background-image">
          <img src={gambar} alt={namaProduk} className="w-full h-full" />
        </div>

        <div className="w-[100%] h-[45%] px-3 py-3 flex flex-col justify-between">
          <div className=" h-[25%] w-[100% ] flex flex-row justify-between  text-ellipsis">
            <p className="font-bold text-sm">{namaProduk}</p>

            <div className="flex flex-row">
              <AiFillStar color={"#FC671A"} />
              <p className=" font-bold text-xs text-[rgba(0,0,0,0.55)]">
                {rating}
              </p>
            </div>
          </div>

          <div className="w-[100%] ">
            <p className="font-bold text-xs text-[rgba(0,0,0,0.55)] truncate">
              {desc}
            </p>
          </div>

          <div className="h-[25%] w-[100%] flex flex-row justify-between items-center">
            <p className="font-bold text-sm text-[#FC671A]">{harga}</p>

            <div
              className="w-[20%] h-[100%] bg-[#FC671A] rounded-md flex justify-center items-center cursor-pointer"
              onClick={() => {
                return navigate("/home/detailProduk");
              }}
            >
              <IoIosArrowForward color="white" size={20} fontWeight={20} />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
