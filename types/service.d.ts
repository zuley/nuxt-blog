/*
 * @Author: zuley
 * @Date: 2021-01-15 09:44:24
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-25 19:36:25
 */

import {
  MenuData,
  OptionData,
  PageData
} from './config'

interface Global {
  /** 菜单 */
  getMenu(code: string): Promise<MenuData[]>
  /** 获取设置 */
  getOption(code: string): Promise<OptionData>
}

interface Page {
  getTopList(page?: number, size?: number): Promise<PageData[]>
}

export interface Service {
  global: Global
  page: Page
  [prop: string]: any
}