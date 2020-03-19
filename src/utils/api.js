import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/"
});

api.interceptors.request.use(config => {
  config.params = {
    ts: "1",
    apikey: "ddeba72e88a848edf128b64ab6988e32",
    hash: "04d80751926b18f2b53cf2bab68f6d4b",
    ...config.params
  };
  return config;
});

export default api;
