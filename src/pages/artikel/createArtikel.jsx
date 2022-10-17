import React from "react";

import Button from "../../komponen/button";
import Input from "../../komponen/input";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createArtikel } from "../../Api/artikel";


export default function Createartikel(){
    const [loading,setLoading] = React.useState(false)
    const navigate = useNavigate()
    const [artikel, setArtikel] = React.useState({
        judul : "",
        thumbnail : '',
        artikel : "",
        imagePreview : null,
    })

    const handleChange = (e)=>{
        setArtikel((artikel)=>{
            return {
                ...artikel,
                [e.target.name] : e.target.value,
            }
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(artikel)
        console.log("jalan")
        try{
            setLoading(true)
             await createArtikel(artikel);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "udah disimpen ke backend",
                showConfirmButton: false,
                timer: 1500,
              });
              return navigate('/artikel')

        }catch(err){
            alert('aduh gagal maseh')
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <React.Fragment>
            <div className="">
                <form className="" onSubmit={handleSubmit}>
                    <Input  name={"judul"} value={artikel.judul} placeholder="judul" label={"judul"} onChange={handleChange}/>
                    <Input name={"thumbnail"} value={artikel?.file} placeholder="thumbnail" label={"thumbnail"} type={"file"} onChange={(e)=>{
                        console.log(e.target.files[0])
                        let file = e.target.files[0];

                        if (file.size > 2000000){
                            return alert("too big file")
                        }
                         if (file.type === "image/jpeg" || file.type === "image/png"){
                            let reader = new FileReader()
                            reader.readAsDataURL(file)
                        reader.onloadend = () =>{
                            console.log(reader);
                            setArtikel((artikel)=>{
                                return{
                                    ...artikel,
                                    imagePreview : reader.result,
                                    thumbnail : file
                                }
                            })
                        }
                        }else{
                            return Swal.fire({
                                icon : "warning",
                                title : "must image"
                            }
                              )
                        }
                    }}/>
                    <img className="w-24 h-24" src={artikel.imagePreview} alt={artikel.imagePreview} />
                    <Input name={"artikel"} value={artikel.artikel} placeholder="artikel" label={"artikel"} onChange={handleChange}/>

                    <Button title={loading ? "sedang menyimpan" : "simpan"} color={"white"}/>

                        <Button title={"back"} color={"white"} onClick={()=>{
                            return navigate('/artikel')
                        }}/>

                </form>
            </div>
        </React.Fragment>
    )
}