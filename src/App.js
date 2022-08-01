import React from "react";
import "./styles/style.css";
import Identitas from "./module/identitas";
import Nilai from "./module/nilai";
import DataSiswa from "./module/dataSiswa";

function App() {
  let [data, setData] = React.useState([10, 20, 30, 40, 50]);
  const [dataSiswa, setDataSiswa] = React.useState([    //langkah pertama buat state nya di siini
    {
      nama: "opang",
      kelas: "XI RPL",
      nilai: 100,
    },
    {
      nama: "abyan",
      kelas: "XI RPL",
      nilai: 100,
    },
    {
      nama: "rivaldi",
      kelas: "XI RPL",
      nilai: 100,
    },
  ]);

  const [nilaiSiswa,setNilaiSiswa] = React.useState({
    nama : 'Opang',
    kelas : 'XI RPL',
    nilai : [80,90,90,100,80]
  })
  return (
    <React.Fragment>
      <h1>latihan props</h1>
      <section>
        <div className="section">
          <Identitas nama={"naufal"} kelas={"XI RPL"} nilai={100} />
          <Identitas nama={"abyan"} kelas={"XI RPL"} nilai={90} />
          <Identitas nama={"rivaldi"} kelas={"XI RPL"} nilai={98} />
          <Identitas nama={"opang"} kelas={"XI RPL"} nilai={80} />
          <Identitas />
        </div>
        <Nilai nama={"opang"} data={data} />
        <DataSiswa data = {dataSiswa} nilai= {nilaiSiswa} /> 
      </section>
    </React.Fragment>
  );
}

export default App;
