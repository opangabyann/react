import React from "react";
import Card from "../../komponen/card";
import { useSelector } from "react-redux";
import { GetKategori, GetProduct } from "../../API/Produk";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { IoMdCard, IoMdCart } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import Input from "../../komponen/Input";
import Button from "../../komponen/Button";
// import { GetProduk } from "../../API/Produk";

export default function Home() {
  const nama = useSelector((state) => state.authProses.name);
  const email = useSelector((state) => state.authProses.email);
  const navigate = useNavigate();
  const [fetchPage, setFetchPage] = React.useState(true);
  const [kategori, setKategori] = React.useState([]);
  const [produk, setProduk] = React.useState([]);
  const [payload, setPayload] = React.useState({
    kategori: "",
    keyword: "",
    hargaTerendah: "",
    hargaTertinggi: "",
  });

  const convertRupiah = require("rupiah-format");

  //convert number

  // const handleKategoriHP = (e) => {
  //   setPayload(() => {
  //     return {
  //       kategori: "handphone",
  //       keyword: "",
  //       hargaTerendah: "",
  //       hargaTertinggi: "",
  //     };
  //   });
  // };
  // const handleKategoriMobli = (e) => {
  //   setPayload(() => {
  //     return {
  //       kategori: "mobil",
  //       keyword: "",
  //       hargaTerendah: "",
  //       hargaTertinggi: "",
  //     };
  //   });
  // };

  const handleChange = async (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const getProdukHandle = async () => {
    try {
      setFetchPage(false);
      const response = await GetProduct(
        payload.kategori,
        payload.keyword,
        payload.hargaTerendah,
        payload.hargaTertinggi
      );
      // setPayload(payload.kategori,
      //   payload.keyword,
      //   payload.hargaTerendah,
      //   payload.hargaTertinggi)
      console.log("status produk", response);
      console.log("respon produk", response.data.data.rows);
      setProduk(response.data.data.rows);
    } catch (e) {
      console.log(e);
    }
  };

  const getKategoriHandle = async () => {
    try {
      const response = await GetKategori();
      console.log("kategori =>", response.data.data);
      setKategori(response.data.data);
    } catch (e) {}
  };
  React.useEffect(() => {
    getProdukHandle();
    getKategoriHandle();
  }, [
    payload.kategori,
    payload.hargaTerendah,
    payload.hargaTertinggi,
    payload.keyword,
  ]);
  console.log("produk =>", produk);
  console.log("payload", payload);
  // console.log('nama =>', nama)
  return (
    <React.Fragment>
      <section className="w-screen h-screen bg-[#E9E9E9] flex flex-col items-center">
        <header className="flex flex-row w-[100%] h-[13%] bg-[#1c4f49] sticky top-0 items-center justify-end ">
          <div className="flex items-center justify-center w-[70%]">
            <Input
              name="keyword"
              value={payload.keyword}
              onChange={handleChange}
              // type='number'
              placeholder="search"
              inputStyle={
                "text-white border border-white bg-[rgb(28,79,73)]  rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A]  focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white"
              }
            />
          </div>
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

        <body className="w-[95%] h-[87%] flex mt-5 p-2">
          <div className="w-[20%] h-[100%] bg-[rgb(28,79,73)] rounded-md border border-[#FC671A] flex flex-col p-5">
            <div className="flex flex-row w-[100%] ">
              <BsFilter size={20} color="white" />
              <p className="text-white items-center justify-center ml-2">
                filter
              </p>
            </div>
            <div className="flex flex-col w-[100%] mt-2 ">
              <p className="text-white items-center justify-center">Kategori</p>
              <select
                className="bg-[rgb(28,79,73)] outline-none border border-white text-white text-sm rounded-lg focus:ring-white focus:border-white block w-[95%] p-2 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white mb-3"
                id=""
                name="kategori"
                value={payload.kategori}
                onChange={handleChange}
              >
                <option value={""}>semua</option>

                {kategori.map((item, index) => {
                  return (
                    <option key={index} value={item.kategori}>
                      {item.kategori}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="w-[100%]">
              <Input
                name="hargaTerendah"
                value={payload.hargaTerendah}
                onChange={handleChange}
                label="harga terendah"
                type="number"
                placeholder="harga terendah"
                inputStyle={
                  "text-white border border-white bg-[rgb(28,79,73)] w-[100%] rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A]  focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white"
                }
              />
              <Input
                name="hargaTertinggi"
                value={payload.hargaTertinggi}
                onChange={handleChange}
                label="harga tertinggi"
                type="number"
                placeholder="harga terendah"
                inputStyle={
                  "text-white border border-white bg-[rgb(28,79,73)] w-[100%] rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A]  focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white"
                }
              />
            </div>

            <div className="w-[100%] mt-3">
              <Button
                title={"reset kategori"}
                buttonStyle={
                  "w-[100%] text-white font-semibold border border-white py-2 rounded-md  hover:bg-[rgba(252,103,26,0.4)] "
                }
                onClick={() => {
                  setPayload(() => {
                    return {
                      kategori: "",
                      keyword: "",
                      hargaTerendah: "",
                      hargaTertinggi: "",
                    };
                  });
                }}
              />
            </div>
          </div>

          <div className="w-[80%] h-[100%]  ml-10 grid grid-cols-3 gap-y-5 overflow-scroll">
            {produk.length === 0 ? (
              <p className="flex text-lg justify-center items-center italic font-bold">produk tidak ditemukan !</p>
            ) : (
              produk?.map((item, index) => {
                const json = item?.gambarProduk;
                const obj = JSON.parse(json);
                return (
                  <NavLink to={`/produk/detail/${item.uuid}`}>
                    <div key={index}>
                      <Card
                        namaProduk={item.namaProduk}
                        rating={item.rating}
                        harga={convertRupiah.convert(item?.harga)}
                        desc={item.deskripsi}
                        gambar={obj[0]?.gambar1}
                      />
                    </div>
                  </NavLink>
                );
              })
            )}
            {/* <Card /> */}
          </div>
        </body>
      </section>
    </React.Fragment>
  );
}
