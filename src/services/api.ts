import axios from 'axios'

const token = localStorage.getItem('@KudoApi:token')

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization: `bearer ${token}`
  }
})

export default api
