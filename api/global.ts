/*
 * @Author: zuley
 * @Date: 2021-01-15 09:46:38
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-02 15:11:36
 */
import AppConfig from '~/config/appConfig'
import { MenuData, OptionData } from '~/types/config'
import { axiosPost } from '~/utils/axios'
import { treeFormat } from '~/utils/util'

export default {
  // 获取菜单
  async getMenu (code: string) {
    const findPath = AppConfig.schema.menu.db_name + '/find'
    const params = {
      query: {
        type_code: { "$eq": code }
      }
    }
    const resData = await axiosPost(findPath, params, false).then(res => (res as any).data) as Promise<MenuData[]>
    return treeFormat(resData)
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