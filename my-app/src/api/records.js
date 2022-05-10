import axios from 'axios'
import { basicURL, recordsRoute } from './routes'

export const postRecord = async (data) => {
    const res = await axios.post(`${basicURL}/${recordsRoute}`, data)
    return res.data
}

export const getRecord = async () => {
    const res = await axios.get(`${basicURL}/${recordsRoute}`)
    return res.data
}