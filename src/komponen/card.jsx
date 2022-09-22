import React from "react";

export default function Card({ data, setData }) {
  console.log("data adalah", data);

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });

    
    setData(() => {
      return filter;
    });

    console.log("button delete klik");
  };

  return (
    <React.Fragment>
      {data?.map((item, i) => {
        return (
          <div>
            <p>id : {item?.id}</p>
            <p>Username : {item?.username}</p>
            <p>Email : {item?.email}</p>
            <p>Password : {item?.password}</p>
            <p>Konfirmasi {item?.confirmPassword}</p>
            <button value={item?.id} onClick={handleDelete}>
              Hapus
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
