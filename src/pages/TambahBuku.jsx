import React from "react";
import Button from "../komponen/button";
import Input from "../komponen/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TambahBuku() {
  const navigate = useNavigate();
  const [error, setError] = React.useState({});
  // const [button, setButton] = React.useState(true);
  const [message,setMessage] = React.useState("")
  const [Loading, setLoading] = React.useState(true);
  const [buku, setBuku] = React.useState({
    kode_penulis: "44444",
    judul_buku: "",
    nama_pengarang: "",
    nama_penerbit_buku: "",
    ketebalan_buku: "",
    tahun_terbit_buku: "",
    sinopsis: "",
  });


  const handleBlur = (e) => {
    if (
     e.target.value === "" 
    ) {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: true,
        };
      });
    }else{
      setError((error) => {
        return {
          ...error,
          [e.target.name]: false,
        };
      });
    }

    return;
  };

  const handleChange = (e) => {
    setBuku(() => {
      return {
        ...buku,
        [e.target.name]: e.target.value,
      };
    });

    handleBlur(e)// handleSubmit()
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      
      setLoading(false);
      const response = await axios.post(
        "https://api-react-2.herokuapp.com/api/perpustakaan",
        buku
      );
      console.log(buku);
      // return navigate("/admin/buku");
      alert("berhasil brou");
      setLoading(true);

    } catch (e) {
      console.log(e);
      alert("aduh gagal maseh");
    }
    

    if ( buku.judul_buku === "" ||
    buku.ketebalan_buku === "" ||
    buku.kode_penulis === "" ||
    buku.nama_penerbit_buku === "" ||
    buku.nama_pengarang === "" ||
    buku.sinopsis === "" ||
    buku.sinopsis.length < 10 ||
    buku.tahun_terbit_buku < 2020 ||
    buku.tahun_terbit_buku > 2022){
    
      if (buku.judul_buku === "") {
        setMessage("ada yang belum diisi")
        setError((error) => {
          return {
            ...error,
            judul_buku: true,
          };
        });
      }

      if (buku.ketebalan_buku === "") {
        setError((error) => {
          return {
            ...error,
            ketebalan_buku: true,
          };
        });
      }
      if (buku.kode_penulis === "") {
        setError((error) => {
          return {
            ...error,
            kode_penulis: true,
          };
        });
      }
      if (buku.nama_penerbit_buku === "") {
        setError((error) => {
          return {
            ...error,
            nama_penerbit_buku: true,
          };
        });
      }
      if (buku.nama_pengarang === "") {
        setError((error) => {
          return {
            ...error,
            nama_pengarang: true,
          };
        });
      }
      if (buku.sinopsis === "") {
        setError((error) => {
          return {
            ...error,
            sinopsis: true,
          };
        });
      }

      if (buku.sinopsis.length < 10) {
        setError((error) => {
          return {
            ...error,
            sinopsis: true,
          };
        });
      }

      if (
        buku.tahun_terbit_buku < 2020 ||
        buku.tahun_terbit_buku > 2022 ||
        buku.tahun_terbit_buku === ""
      ) {
        setError((error) => {
          return {
            ...error,
            tahun_terbit_buku: true,
          };
        });
      }
    }

      
  };
  const handleReset = () => {
    setBuku(() => {
      return {
        kode_penulis: "",
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: "",
        tahun_terbit_buku: "",
        sinopsis: "",
      };
    });
  };

  

  return (
    <React.Fragment>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h1 className="text-red-800 italic">{message}</h1>
          <Input
            value={buku.kode_penulis}
            name={"kode_penulis"}
            placeholder={"kode penulis"}
            label={"kode penulis"}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {error.kode_penulis}
          />
          <Input
            value={buku.judul_buku}
            name={"judul_buku"}
            placeholder={"judul buku"}
            label={"judul buku"}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {error.judul_buku}

          />
          <Input
            value={buku.nama_pengarang}
            name={"nama_pengarang"}
            placeholder={"nama pengarang"}
            onChange={handleChange}
            label={"nama pengarang"}
            onBlur={handleBlur}
            error = {error.nama_pengarang}

          />
          <Input
            value={buku.nama_penerbit_buku}
            name={"nama_penerbit_buku"}
            placeholder={"nama penerbit"}
            label={"nama penerbit"}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {error.nama_penerbit_buku}

          />
          <Input
            value={buku.ketebalan_buku}
            name={"ketebalan_buku"}
            placeholder={"ketebalan buku"}
            label={"ketebalan buku"}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {error.ketebalan_buku}
            
          />
          <Input
            value={buku.tahun_terbit_buku}
            name={"tahun_terbit_buku"}
            placeholder={"tahun terbit"}
            label={"tahun terbit"}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {error.tahun_terbit_buku}

          />
          <Input
            value={buku.sinopsis}
            name={"sinopsis"}
            placeholder={"sinopsis"}
            label={"sinopsis"}
            onChange={handleChange}
            onBlur={handleBlur}
            error = {error.sinopsis}

          />

          <Button
            title={Loading ? "simpan" : "sabar akhii"}
            color={"white"}
          />
          <Button title={"reset"} color={"white"} onClick={handleReset} />
        </form>
      </div>
    </React.Fragment>
  );
}
