export const saveStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value);

export const saveLogin = (email) => {
  const emailList = getStorage('loggedEmails');
  const noRepetitions = emailList.filter((savedEmail, index) => (
    savedEmail !== email && index < 2));
  saveStorage('loggedEmails', [email, ...noRepetitions]);
};
