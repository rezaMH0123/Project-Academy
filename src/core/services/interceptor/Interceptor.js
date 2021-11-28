import axios from 'axios'
import { getItem } from '../storage/storage'

axios.interceptors.response.use(
    (response) => {
        console.log('با موفقیت انجام شد')
        return response
    },
    async(error) => {
        try {
            const expectedError =
                error.response &&
                error.response.state >= 400 &&
                error.response.status < 500

            if (!expectedError) {
                try {
                    // console.log(error.response.data.message[0].message)
                } catch (error) {}
            }
        } catch (error) {}
        return Promise.reject(error)
    },
)

axios.interceptors.request.use((config) => {
    config.headers['x-auth-token'] = getItem('token')
    return config
})

export default axios
