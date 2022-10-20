import axios from "./base_url2";

export async function createArtikel(payload){
    console.log("payload nye =>",payload)
     
    const formData = new FormData()
    formData.append('judul',payload.judul)
    formData.append('artikel',payload.artikel)
    formData.append('thumbnail',payload.thumbnail)

    return axios.post('/artikel',formData)
}

export function getDetailartikel(payload){
    return axios.get(`/artikel/${payload}`)
}

export function updateartikel(payload){
      
    const formData = new FormData()
    formData.append('judul',payload.judul)
    formData.append('artikel',payload.artikel)
    formData.append('thumbnail',payload.thumbnail)

    return axios.post(`/artikel/update/${payload?.id}`)
}