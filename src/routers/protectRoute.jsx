import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { authMe } from "../redux/action/authAction";
import { syncToken } from "../Api/base_url2";


export default function ProtectedRoute({children}){
    const auth = Cookies.get("myapps_token")
    const isAuth = useSelector((state)=> state?.authProses?.isAuth);

    console.log("auth =>" ,isAuth)
    let [process, setProcess]=React.useState(true)
    let dispatch = useDispatch()
    const onLoaded = async(values)=>{
        let results = await dispatch(authMe(values))
        syncToken()
        setProcess(false)

        console.log("res =>", results)
    };

    React.useEffect(()=> {
        if(!isAuth){
            if(auth !== undefined) {
                onLoaded()
            }else{
                setProcess(false)
            }
        }else{
            syncToken();
            setProcess(false)
        }
    },[])

    if (process){
        return <div>Loading</div>
    }else{
        console.log("token =>",auth);
        return auth !== undefined ? children : <Navigate to={"/login"}/>
    }

}