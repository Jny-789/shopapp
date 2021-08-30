import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = false;
axios.defaults.responseType = "json";
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";

axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
    return Promise.reject(error);
  })

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

export default axios;