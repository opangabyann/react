import axios from "./base_url";

export async function GetAllUser(pageSize){
    return axios.get(`users/${pageSize}`)
}

export async function CreateUser (payload){
    return axios.post('/users/create', payload)
}
export async function Detailuser(id){
    return axios.get(`/users/detail/${id}`)
}

export async function Update (id, payload){
    return axios.put(`/users/update/${id}`,payload)
}

export async function Delete (id){
return axios.delete(`/users/hapus/${id}`)
}