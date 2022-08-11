import React from "react";

export default function Card({ data, setData }) {
  console.log('data adalah', data)

  const handleDelete = (e) => {
    e.preventDefault();
    console.log('button di klik')

    let filter = data.filter ((item)=>{
      return item.id !== parseFloat(e.target.value)
    })

    console.log(filter)
    setData(()=>{
      return filter
    })
  }
  return (
    <React.Fragment>
      <p>username : opang</p>
      <p>email : opang@gmail</p>
      <p>password : 1232344</p>
      <p>confirmPassword: </p>

      {data?.map((item) => {
        return (
          <div>
            <p>id : {item.id}</p>
            <p>username : {item.username}</p>
            <p>email : {item.email}</p>
            <p>password : {item.password}</p>
            <p>confirmPassword: {item.confirmPassword}</p>
            <button onClick={handleDelete}>hapus</button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
