/*
 * @Author: zuley
 * @Date: 2021-02-05 19:21:10
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-05 21:50:55
 */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import appConfig from '~/config/appConfig'
import global from '~/store/global'

let globalStore: global

// 初始化函数
function initialiseStores(store: Store<any>): void {
  globalStore = getModule(global, store)
  // 获取站点信息
  // 获取菜单
  globalStore.getMenu('headMenu', appConfig.dict.menu.head)
  globalStore.getMenu('footerMenu', appConfig.dict.menu.footer_blogroll)
}

export { initialiseStores, globalStore }