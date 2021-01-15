/*
 * @Author: zuley
 * @Date: 2021-01-15 09:44:24
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-15 13:55:21
 */

interface MenuData {
  name: string
  url: string
  new_tap_open: boolean
  nofollow: boolean
  type_code: string
}

export interface Menu {
  /** 获取头部菜单 */
  getHead(): Promise<MenuData[]>
  /** 获取底部友情链接 */
  getFooterBlogroll(): Promise<MenuData[]>
}



export interface Service {
  menu: Menu
  [prop: string]: any
}