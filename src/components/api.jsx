//axios import
import axios from "axios";

//link para o banco de dados
const api = axios.create({
    baseURL: 'http://localhost:5001'
})

export default api;