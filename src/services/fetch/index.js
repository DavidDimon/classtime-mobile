import axios from 'axios'
import { API_HOST } from 'react-native-dotenv'

const instance = axios.create({
  baseURL: `http://${API_HOST}`,
})

const fetch = (req, token) =>
  instance({
    ...req,
    ...(token
      ? {
          headers: {
            ...req.headers,
            Authorization: `Bearer ${token}`,
          },
        }
      : { ...req.headers }),
  })

export default fetch
