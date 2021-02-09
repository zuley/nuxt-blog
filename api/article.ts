/*
 * @Author: zuley
 * @Date: 2021-02-04 11:43:57
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 16:11:47
 */
import qs from 'qs'
import AppConfig from '~/config/appConfig'
import { ArticleData } from '~/types/config'
import { axiosGet, axiosPost } from '~/utils/axios'

import Classify from './classify'

const findPath = AppConfig.schema.article.db_name + '/find'
const docPath = AppConfig.schema.article.db_name

export default {
  // 获取文章列表
  async getList (classify: string = '', type: string = 'id', page: number = 1, size: number = 10) {
    const params: any = {
      query: {}
    }
    const queryStr = qs.stringify({
      limit: size,
      skip: (page - 1) * size
    })
    if (classify && type === 'id') params.query.cat = classify
    if (classify && type === 'slug') {
      const actclassify = await Classify.getDataBySlug(classify)
      if (actclassify.length === 0) return []
      params.query.cat = actclassify[0]._id
    }
    return await axiosPost(findPath + '?' + queryStr, params, false, false).then((res: any) => res.data) as Promise<ArticleData[]>
  },
  // 获取文章详情
  async getDataById (id: string) {
    return await axiosGet(docPath + '/' + id, {}).then((res: any) => res.data) as Promise<ArticleData>
  }
}