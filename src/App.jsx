import React from "react"
import useJuz from "./hook/useJuz"
import useJuzz from "./hook/useJuz"
import useList from "./hook/useList"
import Button from "./komponen/buttton"


function App() {
  // const {page , setPage ,pageSize , setPageSize} = usePage();
  // // const [page, setPage] = useState(10);
  // // const [pageSize,setPageSize] = useState(1)

  // const handlePage = (e)=> {
  //   setPage(e.target.value)
  // }
  // const handlePagesize = (e)=> {
  //   setPageSize(e.target.value)
  // }
  const {Alquran} = useList()
  const {alquran,setJuz,juz} = useJuz(1)
  console.log("alquran", Alquran)
  console.log("juz", alquran)
  return(
    <React.Fragment>
      <h1>belajar custom hook</h1>
      <h2 className="font-bold">{juz}</h2>
      <Button onClick={()=>{
        setJuz((juz) => juz + 1)
      }} title="ubah juz"/>
    {/* <h1>belajar custom hook</h1>
   <h1> Page Size :{pageSize}</h1>
    <h1>page : {page}</h1>
    <div>
      <select name="" id="" onChange={handlePagesize} value={pageSize}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
      </select>
      <div>
        <button className="border" onClick={handlePage} value={1}>1</button>
        <button className="border" onClick={handlePage} value={2}>2</button>
        <button className="border" onClick={handlePage} value={3}>3</button>
        <button className="border" onClick={handlePage}value={4}>4</button>
        <button className="border" onClick={handlePage}value={5}>5</button>
      </div>
    </div> */}
    </React.Fragment>
  )
}

export default App