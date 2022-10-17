import axios from "./base_url2";

export  function LoginProsses(payload){
    return axios.post('/login' , payload)
}

export  function getAllArtikel(){
    return axios.get('/artikel')
}

