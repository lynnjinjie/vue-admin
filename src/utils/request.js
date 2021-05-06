import axios from 'axios'

// 创建axios示例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截
service.interceptors.request.use((config) => {
  return config
})

// 响应拦截
service.interceptors.response.use((response) => {
  const res = response.data
  return res
})

export default service
