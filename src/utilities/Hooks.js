import cryptojs from 'crypto-js'

const key = process.env.REACT_APP_SECRET_KEY

export const Encrypt = (text) => {
    let encrypt = cryptojs.AES.encrypt(text.toString(), key).toString();
    encrypt = encrypt.replace(/\//g, "_")
    return encrypt
};


export const Decrypt = (encriptText) => {
    let decrypt = encriptText.replace(/_/g, "/")
    const iv = "a0d5ebe6a0d5ebe6a0d5ebe6a0d5ebe6";
    return cryptojs.AES.decrypt(decrypt, key, { iv: cryptojs.enc.Hex.parse(iv)}).toString(cryptojs.enc.Utf8);
};