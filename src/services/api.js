import axios from "axios";

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})
api.interceptors.request.use(async config => {
    const token = 'dEw2_93PsnWZaisrN7x_'

    config.headers.authorization = `Bearer ${token}`

    return config
})

export default api