
import Input from "../komponen/input";
import Button from "../komponen/button";
import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
// import Select from "../komponen/jenisklmn";x 

export default function DetailBuku() {
    // let navigate = useNavigate()
    let {id} = useParams()
  const [loading, setLoading] = React.useState(false);
  const [buku, setBuku] = React.useState({
    kode_penulis: '44444',
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
 
  });

  const handleChange = (e) => {
    setBuku((buku) => {
      return {
        ...buku,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async(id)=>{
    id.preventDefault()
    console.log(buku);

    try{
        setLoading(false)
        const response = await axios.put(`https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=44444`,buku)
        // setLoading(true)
        // return navigate ("/buku")
    }catch(err){

    }
  };

  const getDetailbuku = async(id)=>{
    try{
        const respon = await axios.get(`https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=44444`)

        console.log(respon.data.data)

        const databuku = respon.data.data

        console.log(databuku)
        setBuku(()=>{
            return {
              kode_penulis: '44444',
              judul_buku: databuku.judul_buku,
              nama_pengarang: databuku.nama_pengarang,
              nama_penerbit_buku: databuku.nama_penerbit_buku,
              ketebalan_buku: databuku.ketebalan_buku,
              tahun_terbit_buku: databuku.tahun_terbit_buku,
              sinopsis: databuku.sinopsis,
            }
        })
    }catch(err){}
  }
  React.useEffect(()=>{
    getDetailbuku(id)
  },[id])
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor=""></label>
          <Input
            value={buku.kode_penulis}
            name={"kode_penulis"}
            label={"kode penulis"}
            placeholder={"kode penulis"}
            onChange={handleChange}
            disabled
          />
          <Input value={buku.judul_buku} name={"judul_buku"} label={"judul_buku"} onChange={handleChange} disabled/>
          <Input value={buku.nama_pengarang} name={"nama_pengarang"} label={"nama pengarang"} onChange={handleChange} disabled/>
          <Input value={buku.nama_penerbit_buku} name={"nama_penerbit_buku"} label={"penerbit"} onChange={handleChange} disabled/>

          
          <Input
            value={buku.ketebalan_buku}
            name={"ketebalan_buku"}   
            label={"ketebalan"}
            onChange={handleChange}
            disabled
          />
          <Input
            value={buku.tahun_terbit_buku}
            name={"tahun_terbit_buku"}
            label={"tahun terbit"}
            onChange={handleChange}
            disabled

          />
          <Input
            value={buku.sinopsis}
            name={"sinopsis"}
            label={"sinopsis"}
            onChange={handleChange}
            disabled
          />

          <Button title={"update"} color="white"/>
        </div>
      </form>
    </div>
  );
}
