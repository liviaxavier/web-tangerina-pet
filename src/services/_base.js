import axios from "axios";
    const url = 'http://localhost:8000/api'
const request = axios.create({
  baseURL: url
})

export default request;