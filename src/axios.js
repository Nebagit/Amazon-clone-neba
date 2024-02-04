import axios from 'axios';

const instance = axios.create({
  baseURL: "https://nice-plum-fly-robe.cyclic.app"
});

export default instance;