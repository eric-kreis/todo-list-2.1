import CryptoJS from 'crypto-js';

export const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value
);

export const encode = (string) => (
  CryptoJS.AES.encrypt(string, 'SUPER SECRET').toString()
);

export const decode = (encrypted) => {
  const bytes = CryptoJS.AES.decrypt(encrypted, 'SUPER SECRET');
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const saveLogin = (email) => {
  const emailList = getStorage('loggedEmails');

  const noRepetitions = emailList
    .filter((savedEmail) => decode(savedEmail) !== email)
    .slice(0, 2);

  saveStorage('loggedEmails', [encode(email), ...noRepetitions]);
};
