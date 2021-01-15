/**
 * 描述：请求封装
 * 作者：猪不乐意
 * 日期：2019年10月4日
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { message } from 'ant-design-vue'

// 引入配置文件
import appConfig from '~/config/appConfig'

// 开启cookie跨域验证session信息 jimmy
axios.defaults.withCredentials = true

// 创建一个请求对象
let axiosX: AxiosInstance = axios.create({
  baseURL: appConfig.apiBasePath
})

// request 拦截
axiosX.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// response 拦截
axiosX.interceptors.response.use(
  response => {
    // 成功则直接返回数据
    return response.data
  },
  error => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~接口错误')
    console.log(error)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~结束请求')
  }
)

interface XHRConfig {
  method: 'get' | 'post' | 'delete'
  params?: object
  loading?: boolean
  stringify?: boolean
  options?: object
}

/**
 * @param {string}  method   请求方法
 * @param {string}  url      请求地址
 * @param {Object}  params    请求参数
 * @param {Boolean} loading  loading 状态
 * @param {Boolean} stringify 是否格式化参数
 */
function XHR (url: string, { method = 'get', params = {}, loading = false, stringify = true,  options = {} }: XHRConfig) {
  const axiosConfig: AxiosRequestConfig = { method, url, ...options }
  // 格式化参数
  let fromData: object | string
  // 请求为 post
  if (method === 'get') {
    axiosConfig.params = params
  } else {
    fromData = stringify ? qs.stringify(params) : params
    axiosConfig.data = fromData
  }
  // 启用loading
  if (loading) message.loading({ content: '加载中' })
  // 返回结果
  return new Promise((resolve, reject) => {
    axiosX(axiosConfig).then((res: any) => {
      if (process.client) message.destroy()
      resolve(res)
    }).catch((error: any) => {
      if (process.client) message.destroy()
      reject(error)
    })
  })
}

/**
 * GET 请求
 * @param {String} url 地址
 * @param {Object} params 参数
 * @param {Boolean} loading 加载状态，默认开启
 * @param {Object} options 请求头设置
 */
export function axiosGet (url: string, params: object, loading = false, options?: object) {
  return XHR(url, { method: 'get', params, loading, options })
}

/**
 * POST 请求
 * @param {String} url 地址
 * @param {Object} params 参数
 * @param {Boolean} loading 加载状态，默认开启
 * @param {Boolean} stringify 是否格式化参数
 * @param {Object} options 请求头设置
 */
export function axiosPost (url: string, params: object, loading = false, stringify = true, options?: object) {
  return XHR(url, { method: 'post', params, loading, options, stringify })
}

/**
 * delete 请求
 * @param {String} url 地址
 * @param {Object} params 参数
 * @param {Boolean} loading 加载状态，默认开启
 * @param {Boolean} stringify 是否格式化参数
 * @param {Object} options 请求头设置
 */
export function axiosDelete (url: string, params: object, loading = true, stringify = true, options: object) {
  return XHR(url, { method: 'delete', params, loading, options, stringify })
}
