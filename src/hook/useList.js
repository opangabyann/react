import { useState,useEffect } from "react";
import axios from 'axios';

function useList(){
    const [Alquran,setAlquran] = useState ([])
    const getAlquran = async ()=> {
        try{
            const response = await axios.get("http://api.alquran.cloud/v1/quran/en.asad")
            setAlquran(response.data?.data?.surahs)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=> {
        getAlquran()
    },[])

    return { Alquran };
}

export default useList