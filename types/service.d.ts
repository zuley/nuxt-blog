/*
 * @Author: zuley
 * @Date: 2021-01-15 09:44:24
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-27 13:44:23
 */

import {
  MenuData,
  OptionData,
  PageData,
  ClassifyData
} from './config'

interface Global {
  /** 菜单 */
  getMenu(code: string): Promise<MenuData[]>
  /** 获取设置 */
  getOption(code: string): Promise<OptionData>
}

interface Page {
  /** 获取顶级页面列表 */
  getTopList(page?: number, size?: number): Promise<PageData[]>
  /** 获取子级页面列表 */
  getChildList(parent: string, page?: number, size?: number): Promise<PageData[]>
}

interface Classify {
  /** 获取顶级分类列表 */
  getTopList(page?: number, size?: number): Promise<ClassifyData[]>
  /** 获取子级分类列表 */
  getChildList(parent: string, page?: number, size?: number): Promise<ClassifyData[]>
}

export interface Service {
  global: Global
  page: Page
  classify: Classify
  [prop: string]: any
}