import axios from '../router/axiosConfig'

export const login = (url, params) =>axios.post(url, params)
