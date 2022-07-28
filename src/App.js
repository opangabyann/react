import React from "react";
import "./styles/style.css"
import Identitas from "./module/identitas";
import Nilai from "./module/nilai";

function App() {
  let [data,setData] = React.useState([10,20,30,40,50])
  return (
    <React.Fragment>
      <h1>latihan props</h1>
      <section>
        <div className="section">
          <Identitas nama={'naufal'} kelas={'XI RPL'} nilai={100}/>
          <Identitas nama={'abyan'} kelas={'XI RPL'} nilai={90}/>
          <Identitas nama={'rivaldi'} kelas={'XI RPL'} nilai={98}/>
          <Identitas nama={'opang'} kelas={'XI RPL'} nilai={80}/>
          <Identitas/>
        </div>
        <Nilai nama={'opang'} data={data}/>
      </section>
    </React.Fragment>
  );
}


export default App;
