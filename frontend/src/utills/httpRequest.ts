import axios from 'axios'

const request = axios.create({
    baseURL: '/api',
})

export const get = async (path: string, options = {}) => {
    const res = await request.get(path, options)
    return res.data
}

export const post = async (path: string, body: unknown, options = {}) => {
    const res = await request.post(path, body, options)
    return res.data
}

export const put = async (path: string, body: unknown, options = {}) => {
    const res = await request.put(path, body, options)
    return res.data
}

export const del = async (path: string, options = {}) => {
    const res = await request.delete(path, options)
    return res.data
}

export default request
