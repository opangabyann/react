import React from "react";
import Button from "../../komponen/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Buku() {
  const navigate = useNavigate();
  const [buku, setBuku] = React.useState([]);
  const [loading,setLoading] = React.useState(false);
  const [messageError, setMessageError] = React.useState("")
  const getUserHandle = async () => {
    try {
      const response = await axios.get(
        "https://api-react-2.herokuapp.com/api/perpustakaan?kode=44444"
      );
      //   console.log("response =>", response.data);cd
      setBuku(response.data.data.data);
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserHandle();
  }, []);


  const deleteuser = async (id) => {
    try{
      setLoading(true)
      const response = await axios.delete(`https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=44444`);
      getUserHandle()
      setLoading(false)
    }catch(err) {
    }
    console.log("delete",deleteuser)
  }
  return (
    <React.Fragment>
      <div>
        <div>
          <Button
            title={"tambah buku"}
            color={"white"}
            onClick={() => {
              return navigate("/admin/buku/tambah");
            }}
          />
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>kode</th>
                <th>pengarang</th>
                <th>penerbit</th>
                <th>tahun terbit</th>
                <th>ketebalan</th>
                <th>sinopsis</th>
                <th>aksi</th>
              </tr>
            </thead>

            <tbody>
              {buku.map((buku, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{buku.kode_penulis}</td>
                    <td>{buku.judul_buku}</td>
                    <td>{buku.nama_pengarang}</td>
                    <td>{buku.nama_penerbit_buku}</td>
                    <td>{buku.tahun_terbit_buku}</td>
                    <td>{buku.ketebalan_buku}</td>
                    <td>{buku.sinopsis}</td>
                    <td>
                      <Button
                        title="edit"
                        color="white"
                        onClick={() => {
                          return navigate(`/buku/update/${buku.id}`);
                        }}
                      />
                      <Button
                        title="view"
                        color="white"
                        onClick={() => {
                          return navigate(`/buku/view/${buku.id}`);
                        }}
                      />

                      <Button
                        title={loading? "sedang menghapus":" hapus"}
                        color="red"
                        text={"white"}
                        onClick={() => {
                          deleteuser(buku.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}
