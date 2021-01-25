/*
 * @Author: zuley
 * @Date: 2021-01-15 09:46:38
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-25 18:48:21
 */

import AppConfig from '~/config/appConfig'
import { MenuData, OptionData } from '~/types/config'
import { axiosPost } from '~/utils/axios'

export default {
  // 获取菜单
  getMenu (code: string) {
    const findPath = AppConfig.schema.menu.db_name + '/find'
    const params = {
      query: {
        type_code: { "$eq": code }
      }
    }
    return axiosPost(findPath, params, false).then(res => (res as any).data) as Promise<MenuData[]>
  },
  // 获取设置
  getOption (code: string) {
    const findPath = AppConfig.schema.option.db_name + '/find'
    const params = {
      query: {
        code: { "$eq": code }
      }
    }
    return axiosPost(findPath, params, false).then((res: any) => {
      if (res.total === 0) return { code: '', name: '', value: '' }
      return res.data
    }) as Promise<OptionData>
  }
}