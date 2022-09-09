import React from "react";
import { Routes, Route } from "react-router-dom";
import Surat from "./page/surat";

export default function App() {
  return (
    <React.Fragment>
      <section className="bg-slate-900">
        <h1>api alquran</h1>

        <Routes>
          {/* <Route path='/' component={<Surat/>}/> */}
          <Route path="/surat" element={<Surat />} />
          <Route path="/detail" component={<d />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}
