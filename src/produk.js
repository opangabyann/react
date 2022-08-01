import React from "react";



function Data () {
  const [produk,setProduk]= React.useState([
    {
      jenis : 'elektrik',
      produk :'handphone',
      brand : [
        {
          nama : 'samsung',
          harga : '1.000.000',
        },
        {
          nama : 'xiaomi',
          harga : '500.000',
        }
      ],
    },
    {
      jenis : 'transportasi',
      produk : 'mobil',
      brand : [
        {
          nama : 'toyota',
          harga : '1.000.000.000',
        },
        {
          nama : 'honda',
          harga : '500.000.000'
        }
      ]
    }
  ])
  return (
    <React.Fragment>
      <p></p>
    </React.Fragment>
  );
}

export default Data;