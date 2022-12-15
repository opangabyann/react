// import axios from 'axios';
import Cookies from 'js-cookie';
import client, { syncToken } from './base_url';

export async function LoginProsses(payload){
    return client.post('/login',payload)
}

export async function RegisterProsses(payload){
    return client.post('/register',payload)
}
export async function ForgotPWProsses(payload){
    return client.post(`lupa-password`,payload)
}
export async function ResetPWProsses(id,token,payload){
    return client.post(`reset-password/${id}/${token}`,payload)
}
export function authMeProcess() {
    syncToken();
    return client.get("/authme");
  }