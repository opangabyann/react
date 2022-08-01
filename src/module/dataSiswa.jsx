import React from "react";

export default function DataSiswa({ data, nilai }) {
  return (
    <React.Fragment>
      ini komponen data siswa
      {data.map(function (item, index) {
        return (
          <section>
            <div className="identitas">
              <p>nama : {item.nama}</p>
              <p>kelas : {item.kelas} </p>
              <p>nilai : {item.nilai}</p>
            </div>
          </section>
        );
      })}

      <div>
        <p>nama : {nilai.nama}</p>
        <p>kelas : {nilai.kelas}</p>
        <div>
            Nilai adalah
            {nilai.nilai.map(function (item){
                return <p>{item}</p>
            })}
        </div>
      </div>
    </React.Fragment>
  );
}
