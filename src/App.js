import React from "react";

import Header from "./Component/header";

import Page from "./page";
import Tes from "./Component/module/Tes";
import {Input , Button} from "./Component/Name"

function App () {
  return (
    <React.Fragment>
      <h1>latihan export import</h1>
      <Header/>
      <Page/>
      <Tes/>
      <Input />
      <Button/>
    </React.Fragment>
  );
}

export default App;