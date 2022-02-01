import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://manan-whatsapp-clone-mern.herokuapp.com/',
});

export default instance;
