//axios import
import axios from "axios";

//link para o banco de dados
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export default api;