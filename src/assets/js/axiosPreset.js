import axios from 'axios'
//  全局配置axios
const initAxios = vm => {
  axios.defaults.baseURL = '后端接口的baseURL'
  axios.defaults.withCredentials = true
  axios.defaults.crossDomain = true
  axios.defaults.timeout = 30000
  axios.defaults.headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  axios.interceptors.response.use(
    res => {
      const status = res.data.status
      if (status === 1) {
        return res.data.data
      } else {
        if (res.data.msg) {
          // Message.warning(res.data.msg)
          vm.$message.warning(res.data.msg)
        }
        return Promise.reject(res)
      }
    },
    error => {
      return Promise.reject(error)
    }
  )
}

export default initAxios
