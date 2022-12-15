import client from "./base_url";

export async function GetProduct(
  kategori,
  keyword,
  hargaTerendah,
  hargaTertinggi
) {
  return client.get(
    `/produk/list?kategori=${kategori}&page=1&pageSize=100&keyword=${keyword}&hargaTerendah=${hargaTerendah}&hargaTertinggi=${hargaTertinggi}`
  );
}

export async function GetDetail(uuid) {
  return client.get(`/produk/detail/${uuid}`);
}

export async function GetKategori() {
  return client.get("/kategori");
}

export async function TambahKeranjang(payload) {
  console.log("id", payload);
  return client.post("/keranjang/tambah", payload);
}
export async function KeranjangSaya() {
  return client.get("/keranjang");
}
export default function DeleteKeranjang(id){
  return client.delete(`/keranjang/hapus/${id}`)
}

export async function Beli(payload){
  return client.post('/beli/tambah',payload)
}

export async function Historybeli(){
  return client.get('/beli/history')
}

export async function UpItem(payload){
  return client.put('keranjang/ubah-jumlah-item',payload)
}