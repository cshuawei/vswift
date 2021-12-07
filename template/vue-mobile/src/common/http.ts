/**
 * 常见http方法
 */
import axios from 'axios'
import { Http } from '~/common'
import $ux from './ux'

const $http = (url: Http.Url, data?: Http.Data, options?: Http.Options) => {
  return new Promise<any>((resolve, reject) => {
    const method = options?.method || 'post'
    const config = <Pick<Http.Options, 'data' | 'params'>>{}
    if (method === 'get') {
      config.params = data
    } else {
      config.data = data
    }
    axios({
      url,
      method,
      withCredentials: options?.withCredentials,
      baseURL: options?.baseURL || process.env.VUE_APP_BASE_URL,
      timeout: options?.timeout || 6000,
      ...config,
      // validateStatus(status) {
      //   return status < 500 // 状态码在大于或等于500时才会 reject
      // }
    }).then((res: any) => {
      const d = res.data
      const code = d.code.toString().slice(0, 1)
      if (code === '2') {
        resolve(d.data)
      } else {
        if (typeof options?.isErrorHint === 'undefined' || options?.isErrorHint === true) {
          $ux.toast(d.msg || '未知的错误')
        }
        resolve(d)
      }
    }).catch((err: any) => {
      if (err.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      } else {
        console.log('Error', err.message)
      }
      console.log(err.config)
      reject(err.message)
    })
  })
}

export default $http
