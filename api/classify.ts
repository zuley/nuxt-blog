/*
 * @Author: zuley
 * @Date: 2021-01-27 10:36:16
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 16:11:15
 */

import AppConfig from '~/config/appConfig'
import { ResData, ClassifyData } from '~/types/config'
import { axiosGet, axiosPost } from '~/utils/axios'

const findPath = AppConfig.schema.classify.db_name + '/find'
const docPath = AppConfig.schema.classify.db_name + '/'

export default {
  // 获取分类
  getTopList (page: number = 1, size: number = 10) {
    const params = {
      limit: size,
      skip: (page - 1) * size,
      query: {
        parent: null
      }
    }
    return axiosPost(findPath, params, false, false).then((res: any) => res.data) as Promise<ClassifyData[]>
  },
  // 获取子集分类
  getChildList (parent: string, page: number = 1, size: number = 10) {
    const params = {
      limit: size,
      skip: (page - 1) * size,
      query: {
        parent: parent
      }
    }
    return axiosPost(findPath, params, false).then((res: any) => res.data) as Promise<ClassifyData[]>
  },
  // 根据 slug 获取内容
  getDataBySlug (slug: string) {
    return axiosPost(findPath, {
      query: {
        slug
      }
    }, false, false ).then((res: any) => res.data) as Promise<ClassifyData[]>
  }
}