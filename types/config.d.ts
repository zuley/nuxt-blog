/*
 * @Author: zuley
 * @Date: 2021-01-12 11:03:42
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-15 11:07:56
 */

export interface AppConfig {
  /** API基础访问路径 */
  // 使用 RESTful API 时的基础访问路径。在CMS后台 -> 项目设置 -> API访问 -> 访问路径中获取
  apiBasePath: string;
  /** 内容模型设置 */
  schema: AppSchema;
  /** 字典配置 */
  dict: Dict;
}

export interface AppSchema {
  /** 设置 */
  option: {
    /** 数据库名 */
    db_name: string;
    /** 字段KEY名 */
    fieldKEY: {
      code: string
      name: string
      value: string
    }
  }
  /** 设置 */
  menu: {
    /** 数据库名 */
    db_name: string;
    /** 字段KEY名 */
    fieldKEY: {
      name: string
      url: string
      new_tap_open: string
      nofollow: string
      type_code: string
    }
  }
}

export interface Dict {
  /** 设置 */
  option: {
    /** 站点标题 */
    siteTitle: string
    /** 站点副标题 */
    siteSubhead: string
    /** 站点关键字 */
    siteKeyword: string
    /** 站点描述 */
    siteDescription: string
    /** 备案信息 */
    copyright: string
    /** 站点统计代码 */
    statisticsCode: string
    /** 是否开启文章评论 */
    articleCommentStatus: string
  },
  /** 菜单 */
  menu: {
    /** 头部菜单 */
    head: string
    /** 底部友情链接 */
    footer_blogroll: string
  }
}