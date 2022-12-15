import React from "react";
import { FaHistory } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Historybeli } from "../../API/Produk";
import Button from "../../komponen/Button";

export default function History() {
  const [history, setHistory] = React.useState([]);
  const convertRupiah = require("rupiah-format");
  const navigate = useNavigate()
  const nama = useSelector((state) => state.authProses.name);
  const email = useSelector((state) => state.authProses.email);
  const getHistoryHandle = async () => {
    try {
      const response = await Historybeli();
      console.log(response.data.data);
      setHistory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getHistoryHandle();
  }, []);
  return (
    <React.Fragment>
      <section className="w-screen h-screen bg-[#E9E9E9] flex flex-col items-center">
      <header className="flex flex-row w-[100%] h-[13%] bg-[#1c4f49] sticky top-0 items-center justify-end ">
          
          
          <div className="flex flex-col ">
            <p className="text-xl font-medium text-white mr-5">{nama}</p>
            <div className="w-5 h-0 bg-white"></div>
            <p className="text-md font-semibold text-white mr-5">{email}</p>
          </div>

          <div className="rounded-full h-11 w-11 bg-gray-50 "></div>

          <div className="h-[90%] w-[3px] bg-white mx-5"></div>

          <div className="mr-28 cursor-pointer flex flex-row">
            <FaHistory
              className="mr-2 ml-2"
              size={25}
              color="white"
              onClick={() => {
                return navigate("/historyPembelian");
              }}
            />
            <IoMdCart
              size={25}
              color="white"
              onClick={() => {
                return navigate("/keranjang");
              }}
            />
          </div>
        </header>

        <body className="w-[90%] h-[87%]  grid grid-row-1 overflow-scroll">
        <Button
              title={"back"}
              
              onClick={()=> {
                return navigate (-1)
              }}
            />
          {history.map((item, index) => {
            const json = item?.produk?.gambarProduk;
            const obj = JSON.parse(json);
            return(
                <div key={index} className="w-[700px] h-[150px]  bg-white rounded-md shadow-lg shadow-[rgb(28,79,73)] flex flex-row my-2">
                  <div className="w-[20%] h-[100%] bg-green-500 rounded-md">
                  <img
                    src= {obj[0].gambar1}
                    alt={item?.produk?.namaProduk}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-col w-[40%] h-[100%] justify-between p-3 ml-3">
                  <p className="text-lg font-semibold">{item?.produk?.namaProduk}</p>
                  <p className="text-lg font-semibold text-[#FC671A]">{convertRupiah.convert(item.produk.harga)}</p>
                  <p className="text-sm font-regular ">{item?.createdAt}</p>

                  {/* <div className="flex flex-row w-[80%] justify-between">
                    <div className="border border-[#FC671A] w-[30px] rounded-md flex items-center justify-center cursor-pointer">
                      <HiOutlinePlusSm color="#FC671A" size={20} />
                    </div>

                    <p>5</p>
                    <div className="border border-[#FC671A] w-[30px] rounded-md flex items-center justify-center cursor-pointer">
                      <AiOutlineMinus color="#FC671A" size={20} />
                    </div>
                  </div> */}
                </div>
            </div>
            )
          })}
        </body>
      </section>
    </React.Fragment>
  );
}
