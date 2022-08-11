import React from "react";


function App () {
  let [count,setCount] = React.useState(0)
  let [text,setText] = React.useState(true)
  let [message,setMessage] = React.useState(0)
  let [loading,setLoading] = React.useState(true)

  React.useEffect(()=>{
    setMessage(message + 1)

    console.log('useEffect berjalan')
  }, [count,text])

  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])

  if (loading){
    return <h1>sabar bentar ....</h1>
  }

  return (
    <React.Fragment>
      <h1>belajar useEffect</h1>
      <h3>{message === 10 ? "ini sepuluh " : "bukan sepuluh"}</h3>
      <h1>message : {message}</h1>
      <h1>count : {count}</h1>

      <button onClick={()=>{
        setCount(count + 1)
      }}>
        tambah
      </button>

      <button
      onClick={()=>{
        setText(!text)
      }}
      >
        ubah
      </button>
    </React.Fragment>
  );
}

export default App;