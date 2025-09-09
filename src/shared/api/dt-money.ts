import { Platform } from 'react-native'
import axios from 'axios'
import { AppError } from '../helpers/AppError'

const baseURL = Platform.select({
  android: 'http://10.0.2.2:3001',
  ios: 'http://localhost:3001'
})

const dtMoneyApi = axios.create({
  baseURL
})

dtMoneyApi.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(new AppError('Falha na requisição'))
    }
  }
)

export { dtMoneyApi }
