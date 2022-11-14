import React from "react"
import RefTutorial from "./page/useref"
import ReducerMateri from "./page/useReducer"


function App() {
  return(
    <React.Fragment>
      <h1 style={{textAlign: 'center'}} className="bg-red-500 text-white">Branch Main</h1>
      {/* <RefTutorial/> */}
      <ReducerMateri />
    </React.Fragment>
  )
}

export default App