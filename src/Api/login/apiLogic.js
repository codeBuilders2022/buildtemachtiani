import axios from "axios"
import { CorrectModal, IncorrectModal, InfoModal } from "../../components/molecules/modals/Modals";
// import { Decrypt } from "../../utilities/Hooks";
import cryptojs from 'crypto-js'
const key = process.env.REACT_APP_SECRET_KEY
import { Decrypt, Encrypt } from "../../utilities/Hooks";
const urlApi = process.env.REACT_APP_API_URL;

export const loginConfir = async (data, setName, navigate) => {
    if (data) {
      try {
        const res = await axios.post(urlApi + "/api/auth/local", data);
        const typeAcc = Decrypt(res.data.user.accounttype);
        const IdCrip = Encrypt(res.data.user.id);
        if (res.data.user.confirmed === true && process.env.REACT_APP_ACCOUNTTYPE === typeAcc) {
          setName(res.data);
          localStorage.setItem("token", res.data.jwt);
          localStorage.setItem("userWeb", res.data.user.username);
          localStorage.setItem("jeyaiodl", IdCrip);
          let idEncrypt = EncryptNB(res.data.user.id);
          localStorage.setItem("ref", idEncrypt);
          return { status: 200, dtasEncrypt: idEncrypt, id: res.data.user.id };
        } 
      } catch (error) { return error }
    }
  };
  

export const EncryptNB = (text)=>
{
    let encrypt = cryptojs.AES.encrypt(text.toString(), key).toString();
    encrypt = encrypt.replace(/\//g, "_")
    return encrypt
}

export const DecryptNB = (encriptText) => {
    let decrypt = encriptText.replace(/_/g, "/")
    const iv = "a0d5ebe6a0d5ebe6a0d5ebe6a0d5ebe6";
    return cryptojs.AES.decrypt(decrypt, key, { iv: cryptojs.enc.Hex.parse(iv)}).toString(cryptojs.enc.Utf8);
};