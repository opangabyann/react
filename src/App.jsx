import React from "react";
import { Routes, Route } from "react-router-dom";
// import Surat from "./page/surat";
import Surat from "./page/surat"

export default function App() {
  return (
    <React.Fragment>
      <section className="">
        <h1 className="text-4xl text-black">api alquran</h1>

        <Routes>
        <Route path="/surat" element={<Surat />} />
          <Route path='/' component={<Surat/>}/>
        </Routes>
      </section>
    </React.Fragment>
  );
}
