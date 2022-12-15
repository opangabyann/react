import React from "react";
import { AiFillStar, AiOutlineMinus } from "react-icons/ai";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import DeleteKeranjang, {
  KeranjangSaya,
  TambahKeranjang,
  UpItem,
} from "../API/Produk";
import Button from "../komponen/Button";
import CardKeranjang from "../komponen/cardKeranjang";
import { BeliProses, CountProses } from "../redux/action/addcart";
import Swal from "sweetalert2";
import { convert } from "rupiah-format";
import { FaHistory } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Input from "../komponen/Input";

export default function Keranjang() {
  const [keranjang, setKeranjang] = React.useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nama = useSelector((state) => state.authProses.name);
  const email = useSelector((state) => state.authProses.email);
  const [fetchUser, setFetchUser] = React.useState(true);
  const [beli, setBeli] = React.useState([]);
  const [count, setCount] = React.useState(1);
  const [item, setItem] = React.useState({
    
  });
  const convertRupiah = require("rupiah-format");
  // const [id, setId] = React.useState({
  //   id : "",
  // });
  const getKeranjangHandle = async () => {
    try {
      setFetchUser(false);
      const response = await KeranjangSaya();
      console.log("keranjang res", response.data);
      setKeranjang(response.data.data);
      console.log("keranjang =>", keranjang);
      setBeli(response.data);
      
      console.log('item =>', item)
      
      console.log("payload beli =>", beli);
      // setId({id : response.data.data.id});
      // console.log("id", id);
      setFetchUser(true);
    } catch (e) {}
  };

  const deleteKeranjangHandle = async (id) => {
    try {
      console.log("delete klik jalan");
      const response = await DeleteKeranjang(id);
      console.log(response);
      if (response.status === 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response?.data.msg,
        });
      }
      getKeranjangHandle();
    } catch (err) {
      console.log(err);
    }
  };
  const BeliProduk = async () => {
    Swal.fire({
      title: "Yakin ingin beli ?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#FC671A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await dispatch(BeliProses(beli));
          console.log("beli produk res =>", response.data);
          if (response.status === "Berhasil menambah 1 data dan gagal 0 data") {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: response?.data.msg,
            });
          }
          getKeranjangHandle();
        } catch (e) {
          console.log(e);
        }
        Swal.fire("berhasil", "transaksi anda sudah berhasil", "success");
      }
    });
  };

  const ubahItem = async (id,jumlah) => {
    try {
      const response = await dispatch(CountProses(item)) ;
      console.log("up item => ", response);
      setItem({ 
        id : id,
        jumlah: jumlah ,

      });
      getKeranjangHandle();
    } catch (e) {}
  };
  let array = keranjang.map((value) => value?.produk?.harga * value.jumlah);
  const hasil = array.reduce((total, currentValue) => total + currentValue, 0);

  console.log("hasil =>", hasil);
  React.useEffect(() => {
    getKeranjangHandle();
  }, []);
  return (
    <React.Fragment>
      <section className="w-screen h-screen bg-[#E9E9E9] flex flex-col items-center">
        <header className="flex flex-row w-[100%] h-[13%] bg-[#1c4f49] sticky top-0 items-center justify-end ">
          <div className="flex items-center justify-center w-[70%]">
            {/* <Input
              name="keyword"
              value={payload.keyword}
              onChange={handleChange}
              // type='number'
              placeholder="search"
              inputStyle={
                "text-white border border-white bg-[rgb(28,79,73)]  rounded-md pl-4 p-1 focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A] focus:text-white focus:outline-none focus:border-2 focus:border-[#FC671A]  focus:placeholder:text-white placeholder:text-[rgba(255,255,255,0.5)] enabled:hover:border-2 enabled:hover:placeholder:text-white"
              }
            /> */}
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

        <body className="w-[90%] h-[83%]  overflow-scroll">
          <div className="w-[55%]  justify-between flex flex-col">
            <p>total harga = {convertRupiah.convert(hasil)}</p>
            <Button
              title={"beli"}
              buttonStyle="w-[45%] text-white bg-[#FC671A] text-white py-2 rounded-md  "
              onClick={BeliProduk}
            />
          </div>
          <Button
            title={"back"}
            onClick={() => {
              return navigate(-1);
            }}
          />
          {keranjang.map((item, index) => {
            const json = item?.produk.gambarProduk;
            const obj = JSON.parse(json);
            const tambah = ()=>{
              ubahItem(item.id,item.jumlah + 1)
              getKeranjangHandle()
            }
            const kurang = ()=> {
              ubahItem(item.id,item.jumlah -1 )
              getKeranjangHandle()
            }
            return (
              <div
                key={index}
                className="w-[700px] h-[150px] my-5 bg-white rounded-md shadow-lg shadow-[rgb(28,79,73)] flex flex-row"
              >
                <div className="w-[20%] h-[100%] bg-green-500 rounded-md">
                  <img
                    src={obj[0]?.gambar1}
                    alt={item?.produk?.namaProduk}
                    className="w-full h-full"
                  />
                </div>

                <div className="flex flex-col w-[40%] h-[100%] justify-between p-3 ml-3">
                  <p className="text-lg font-semibold">
                    {item?.produk?.namaProduk}
                  </p>
                  <p className="text-lg font-semibold text-[#FC671A]">
                    {convertRupiah.convert(item?.produk?.harga)}
                  </p>

                  <div className="flex flex-row w-[80%] ">
                    <div className="border border-[#FC671A] w-[30px] rounded-md flex items-center justify-center cursor-pointer">
                      <HiOutlinePlusSm
                        color="#FC671A"
                        size={20}
                        onClick={()=>{
                          return tambah()
                        }}
                      />
                    </div>

                    <p className="mx-3 text-md font-semibold">{item?.jumlah}</p>

                    <div className="border border-[#FC671A] w-[30px] rounded-md flex items-center justify-center cursor-pointer">
                      <AiOutlineMinus color="#FC671A" size={20} onClick={()=>{
                          return kurang()
                        }}/>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[55%] h-[100%] justify-between p-3 ml-3 items-end">
                  <p className="text-lg font-semibold justify-center">
                    {convertRupiah.convert(item?.produk?.harga * item.jumlah)}
                  </p>

                  <div className="flex flex-row w-[25%] items-end justify-between">
                    <Button
                      title={"delete"}
                      buttonStyle="w-[100%] text-white bg-red-500 text-white py-2 rounded-md  "
                      onClick={() => deleteKeranjangHandle(item?.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div></div>
        </body>
      </section>
    </React.Fragment>
  );
}
