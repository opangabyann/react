import { Beli, TambahKeranjang,UpItem } from "../../API/Produk";

export function KeranjangProses(payload) {
    return async (dispatch) => {
      try {
        let response = await TambahKeranjang(payload);
        console.log(response);
        let data = response;
        console.log(data.data);
        return data;
      } catch (err) {
        console.log("Error", err);
        return err.response;
      }
    };
  }
  
  export function BeliProses(payload) {
    return async (dispatch) => {
      try {
        let response = await Beli(payload);
        console.log(response);
        let data = response.data;
        console.log(data);
        return data;
      } catch (err) {
        console.log("Error", err);
        return err.response;
      }
    };
  }

  export function CountProses(payload) {
    return async (dispatch) => {
      try {
        let response = await UpItem(payload);
        console.log(response);
        let data = response.data;
        console.log(data);
        return data;
      } catch (err) {
        console.log("Error", err);
        return err.response;
      }
    };
  }