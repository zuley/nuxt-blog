/*
 * @Author: zuley
 * @Date: 2021-01-25 19:22:44
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-25 19:49:52
 */

import AppConfig from '~/config/appConfig'
import { PageData } from '~/types/config'
import { axiosPost } from '~/utils/axios'

export default {
  // 获取菜单
  getTopList (page: number = 1, size: number = 10) {
    const findPath = AppConfig.schema.page.db_name + '/find'
    const params = {
      limit: size,
      skip: (page - 1) * size,
      query: {
        parent: {
          "$eq": null
        }
      }
    }
    return axiosPost(findPath, params, false).then(res => (res as any).data) as Promise<PageData[]>
  }
}