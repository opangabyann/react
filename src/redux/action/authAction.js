import Cookies from 'js-cookie';
import {authMeProcess, LoginProsses, RegisterProsses} from '../../Api/auth';

export function authLogin(payload){
    return async (dispatch)=>{
        try{
            let response = await LoginProsses(payload);
            let data = response.data
            console.log("data =>", data)
            dispatch({
                type : "login",
                name : data?.user?.name,
                email : data?.user?.email,
                isAuth : true
            })
            Cookies.set('myapps_token', data?.token)
            return data
        }catch(err){
            console.log(err)
            return err;
        }
    }
}

export function authRegister(payload){
    return async (dispatch)=>{
        try{
            let response = await RegisterProsses(payload);
            let data = response.data
            console.log("data =>", data)
            dispatch({
                type : "login",
                name : data?.user?.name,
                email : data?.user?.email, 
                isAuth : true
            })
            Cookies.set('myapps_token', data?.token)
            return data
        }catch(err){
            console.log(err)
            return err;
        }
    }
}

export function authMe (payload){
    return async (dispatch)=>{
        try{
            let response = await authMeProcess()
            let data = response.data;

            dispatch({
                type : "login",
                name : data?.user?.name,
                email : data?.user?.email,
                isAuth : true,
            })
            console.log('data =>', data)
            Cookies.set("myapps_token",data?.token);
            return data
        }catch(e){
            console.log(e);
            return e
        }
    }
}