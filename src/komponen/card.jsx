import React from "react";


export default function Card({ data, setData }) {
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("ok");
    let filter = data.filter((item) => {
      return item.id !== parseFloat(e.target.value);
    });
    console.log(filter);
    setData(() => {
      return filter;
    });
  };
  return (
    <React.Fragment>
      {data.map((item) => {
        return (
          <div className="border flex-row containerCard mt-10">
            <h1 className="font-sans text-lg">{item.judul}</h1>
            <p>{item.id}</p>
            <p>{item.catatan}</p>
            <button value={item.id} onClick={handleDelete} className="border-none bg-slate-900 text-slate-200 w-1/5">
              Delete
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
}
