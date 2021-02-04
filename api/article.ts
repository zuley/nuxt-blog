/*
 * @Author: zuley
 * @Date: 2021-02-04 11:43:57
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-04 17:29:19
 */

import AppConfig from '~/config/appConfig'
import { ArticleData } from '~/types/config'
import { axiosPost } from '~/utils/axios'

import Classify from './classify'

const findPath = AppConfig.schema.article.db_name + '/find'

export default {
  // 获取文章列表
  async getList (classify: string = '', type: string = 'id', page: number = 1, size: number = 10) {
    const params: any = {
      limit: size,
      skip: (page - 1) * size,
      query: {}
    }
    if (classify && type === 'id') params.query.cat = classify
    if (classify && type === 'slug') {
      const actclassify = await Classify.getDataBySlug(classify)
      if (actclassify.data.length === 0) return []
      params.query.cat = actclassify.data[0]._id
    }
    return await axiosPost(findPath, params, false, false).then((res: any) => res.data) as Promise<ArticleData[]>
  },
}