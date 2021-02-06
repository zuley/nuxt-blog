/*
 * @Author: zuley
 * @Date: 2021-02-05 19:21:10
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-06 11:55:07
 */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import appConfig from '~/config/appConfig'
import global from '~/store/global'

let globalStore: global

// 初始化函数
function initialiseStores(store: Store<any>): void {
  globalStore = getModule(global, store)
  // 获取菜单
  globalStore.getMenu({ key: 'headMenu', code: appConfig.dict.menu.head })
  globalStore.getMenu({ key: 'footerMenu', code: appConfig.dict.menu.footer_blogroll })
  // 设置标题
  globalStore.getAllOption()
}

export { initialiseStores, globalStore }