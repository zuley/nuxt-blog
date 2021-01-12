/*
 * @Author: zuley
 * @Date: 2021-01-12 11:03:42
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-12 12:03:58
 */

export interface AppConfig {
  /** API基础访问路径 */
  // 使用 RESTful API 时的基础访问路径。在CMS后台 -> 项目设置 -> API访问 -> 访问路径中获取
  apiBasePath: String;
  /** 内容模型设置 */
  schema: AppSchema;
  /** 字典配置 */
  dict: Dict;
}

export interface AppSchema {
  /** 设置 */
  option: {
    /** 数据库名 */
    db_name: String;
    /** 字段KEY名 */
    fieldKEY: {
      code: String
      name: String
      value: String
    }
  }
}

export interface Dict {
  /** 设置 */
  option: {
    /** 站点标题 */
    siteTitle: String
    /** 站点副标题 */
    siteSubhead: String
    /** 站点关键字 */
    siteKeyword: String
    /** 站点描述 */
    siteDescription: String
    /** 备案信息 */
    copyright: String
    /** 站点统计代码 */
    statisticsCode: String
    /** 是否开启文章评论 */
    articleCommentStatus: String
  }
}