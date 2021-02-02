/*
 * @Author: zuley
 * @Date: 2021-01-12 11:03:42
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-01 14:18:05
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N

export interface AppConfig {
  /** API基础访问路径 */
  // 使用 RESTful API 时的基础访问路径。在CMS后台 -> 项目设置 -> API访问 -> 访问路径中获取
  apiBasePath: string;
  /** 内容模型设置 */
  schema: AppSchema;
  /** 字典配置 */
  dict: Dict;
}

/** 菜单模型 */
interface MenuData {
  name: string
  url: string
  new_tap_open: boolean
  nofollow: boolean
  type_code: string
  parent: MenuData | any
}

/** 设置模型 */
interface OptionData {
  code: string
  name: string
  value: string
}
/** 页面模型 */
interface PageData {
  title: string
  content: string
  pic: string
  url: string
  style: string
  parent: string
}

/** 分类模型 */
interface ClassifyData {
  name: string
  slug: string
  pic: string
  parent: ClassifyData
}

interface Schema<T> {
  db_name: string
  fieldKEY: T
}

export interface AppSchema {
  /** 设置 */
  option: Schema<OptionData>
  /** 菜单 */
  menu: Schema<Merge<MenuData, {
    new_tap_open: string
    nofollow: string
    parent: string
  }>>
  /** 页面 */
  page: Schema<PageData>
  /** 分类 */
  classify: Schema<Merge<ClassifyData, {
    parent: string
  }>>
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