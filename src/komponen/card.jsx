import React from "react";

export default function Card({ data }) {
  console.log(data);
  return (
    <React.Fragment>
      {/* <p>name : opang</p>
      <p>email : opang@gmail</p>
      <p>tempat lahir : jakarta</p>
      <p>tanggal lahir : 7 maret 2006</p>
      <p>username : opang</p>
      <p>password: 12345</p>
      <p>konfirmasi password: 12345</p> */}

      {data?.map((item) => {
        return (
          <div>
            <p>nama : {item.nama}</p>
            <p>email : {item.email}</p>
            <p>tempat lahir: {item.tempatLahir}</p>
            <p>tanggalLahir : {item.tanggalLahir}</p>
            <p>username : {item.username}</p>
            <p>password : {item.password}</p>
            <p>konfirmasi password : {item.confirmPassword}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
}
