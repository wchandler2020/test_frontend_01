import axios from "axios";
import "interceptors/axios";

const BASE_URL = 'http://localhost:8000/api/'
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const refreshToken = () => api.post('/token/refresh/', {refresh: localStorage.getItem('refresh_token')});


const authenticatedApi = () => axios.create({
    baseURL: BASE_URL,// replace with your API base URL
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
    


const getClients = () =>  authenticatedApi().get('clients')

const getDashboard= (client='') => authenticatedApi().get(`dashboard?${client?`client=${client}`: ''}`)

const getTableauData= (client='') => authenticatedApi().get(`tableau-data?${client?`client=${client}`: ''}`)

export default {getClients, getDashboard,getTableauData}