import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { GetDetail, TambahKeranjang } from "../../API/Produk";
import Button from "../../komponen/Button";
import Swal from "sweetalert2";
import { BeliProses, KeranjangProses } from "../../redux/action/addcart";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import { FaHistory } from "react-icons/fa";

export default function Detail() {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nama = useSelector((state) => state.authProses.name);
  const email = useSelector((state) => state.authProses.email);
  const [gambar, setGambar] = React.useState("");
  const [fetchPage, setFetchPage] = React.useState(true);
  // const [produk,setProduk]= React.useState('')
  const convertRupiah = require("rupiah-format");
  const [beli, setBeli] = React.useState({
    data: [
      {
        id: "",
        produkId: "",
        jumlah: 1,
        userId: 1,
        createdAt: "",
        updatedAt: "",
        produk: {
          namaProduk: "",
          harga: "",
          stok: "",
          rating: "",
          gambarProduk: "",
        },
      },
    ],
  });
  const [produk, setProduk] = React.useState({
    produkId: "",
  });
  const [payload, setPayload] = React.useState([]);

  const Tambah = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(KeranjangProses(produk));
      if (response.status === 201) {
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
          title: "berhasil ditambah ke keranjang",
        });
      }

      console.log(response);
    } catch (error) {}
  };

  const getDetailhandle = async () => {
    try {
      setFetchPage(false);
      const response = await GetDetail(uuid);
      setFetchPage(true);
      console.log("Detail =>", response.data);
      setPayload(response.data.data);
      setProduk({ produkId: response.data.data.id });
      const json = response.data.data.gambarProduk;
      const obj = JSON.parse(json);
      setGambar(obj);
      setBeli({
        data: [
          {
            id: response.data.data.id,
            jumlah: 1,
            userId: 1,
            produkId: response.data.data.id,
            createdAt: response.data.data.createdAt,
            updatedAt: response.data.data.updatedAt,
            produk: {
              namaProduk: response.data.data.namaProduk,
              harga: response.data.data.harga,
              stok: response.data.data.stok,
              rating: response.data.data.rating,
              gambarProduk: response.data.data.gambarProduk,
            },
          },
        ],
      });
    } catch (e) {
      console.log(e);
    } finally {
      setFetchPage(true);
    }
  };

  const BeliProduk = async () => {
    try {
      const response = await dispatch(BeliProses(beli));
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  // const tambahKeranjangHandle = async(e) => {
  //   e.preventDefault()
  //   try{
  //     const response = await TambahKeranjang()
  //     console.log("keranjang =>" ,response.data)
  //     navigate('/keranjang')
  //     if(response.status === "Success"){
  //       navigate('/keranjang')
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: "top-end",
  //         showConfirmButton: false,
  //         timer: 2000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener("mouseenter", Swal.stopTimer);
  //           toast.addEventListener("mouseleave", Swal.resumeTimer);
  //         },
  //       });

  //       Toast.fire({
  //         icon: "success",
  //         title: response?.msg,
  //       });
  //     }
  //   }catch(e){
  //     console.log(e)
  //   }
  // }
  // const json = payload?.gambarProduk;
  //     const obj = JSON.parse(json );
  React.useEffect(() => {
    getDetailhandle();
  }, []);
  console.log("produk =>", payload);
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

        {fetchPage ? (
          <body className="w-[90%] h-[87%] flex mt-6  p-2 flex-row ml-8">
            <div className="w-[32%] h-[95%] bg-white rounded-xl shadow-md shadow-[rgba(28,79,73,0.5)]">
              <img
                src={gambar[0]?.gambar1}
                alt={payload?.namaProduk}
                className="w-full h-full"
              />
              <Button title={"back"} onClick={()=> {
                return navigate( -1)
              }}/>
            </div>

            <section className="w-[50%] h-[95%] ml-5 p-5">
              <div className="flex flex-col">
                <p className="text-2xl font-bold ">{payload.namaProduk}</p>

                <div className="flex flex-row mt-2">
                  <AiFillStar color={"#FC671A"} size="20" />
                  <p className="text-sm font-semibold ml-2">{payload.rating}</p>
                  <p className="text-sm font-semibold ml-10">{`${payload.stok} stok`}</p>
                </div>
              </div>

              <div className="flex flex-col mt-10">
                <p className="text-xl font-semibold mb-4">Description</p>
                <p className="text-justify tracking-tighter text-sm">
                  {payload.deskripsi}
                </p>
              </div>

              <div className="flex flex-col mt-24">
                <p className="text-xl font-bold text-[#1c4f49] mb-10">
                  {convertRupiah.convert(payload.harga)}
                </p>
                <div className="flex flex-row">
                  <Button
                    title={"buy"}
                    onClick={BeliProduk}
                    buttonStyle={`w-[25%] text-white bg-[#FC671A] font-semibold py-2 rounded-md  hover:bg-[rgba(252,103,26,0.4)] mr-3`}
                  />

                  <Button
                    title={"cart"}
                    name="produkId"
                    onClick={Tambah}
                    buttonStyle={`w-[25%] text-[#FC671A] font-semibold border border-[#FC671A] py-2 rounded-md  hover:bg-[rgba(252,103,26,0.4)] `}
                  />
                </div>
              </div>
            </section>
          </body>
        ) : (
          <p className="text-animate">loading</p>
        )}
      </section>
    </React.Fragment>
  );
}
