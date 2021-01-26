/*
 * @Author: zuley
 * @Date: 2021-01-25 19:22:44
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-26 19:45:37
 */

import AppConfig from '~/config/appConfig'
import { PageData } from '~/types/config'
import { axiosPost } from '~/utils/axios'

const findPath = AppConfig.schema.page.db_name + '/find'

export default {
  // 获取菜单
  getTopList (page: number = 1, size: number = 10) {
    const params = {
      limit: size,
      skip: (page - 1) * size,
      query: {
        parent: null
      }
    }
    return axiosPost(findPath, params, false, false).then((res: any) => res.data) as Promise<PageData[]>
  },
  // 获取子级页面列表
  getChildList (parent: string, page: number = 1, size: number = 10) {
    const params = {
      limit: size,
      skip: (page - 1) * size,
      query: {
        parent: parent
      }
    }
    return axiosPost(findPath, params, false).then((res: any) => res.data) as Promise<PageData[]>
  }
}