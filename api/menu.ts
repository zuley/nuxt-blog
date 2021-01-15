/*
 * @Author: zuley
 * @Date: 2021-01-15 09:46:38
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-15 13:49:28
 */

import AppConfig from '~/config/appConfig'
import { MenuData } from '~/types/service'
import { axiosPost } from '~/utils/axios'

const findPath = AppConfig.schema.menu.db_name + '/find'

export default {
  getHead () {
    const params = {
      query: {
        type_code: { "$eq": AppConfig.dict.menu.head }
      }
    }
    return axiosPost(findPath, params, false).then(res => (res as any).data) as Promise<MenuData[]>
  },
  getFooterBlogroll () {
    const params = {
      query: {
        type_code: { "$eq": AppConfig.dict.menu.footer_blogroll }
      }
    }
    return axiosPost(findPath, params, false).then(res => (res as any).data) as Promise<MenuData[]>
  }
}