import axios from 'axios'

const jsonServerMockApi = axios.create({
    baseURL: 'http://localhost:3001'
})

export default jsonServerMockApi