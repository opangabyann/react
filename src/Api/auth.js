import axios from "./base_url2";

export async function LoginProsses(payload){
    return axios.post('/login' , payload)
}
export async function RegisterProsses(payload){
    return axios.post('/register' , payload)
}
export  function getAllArtikel(){
    return axios.get('/artikel')
}

