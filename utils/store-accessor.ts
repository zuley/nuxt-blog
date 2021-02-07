/*
 * @Author: zuley
 * @Date: 2021-02-05 19:21:10
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-07 10:39:29
 */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import global from '~/store/global'

let globalStore: global

// 初始化 store ，让组件中可以通过导入的方式使用
function initialiseStores(store: Store<any>): void {
  globalStore = getModule(global, store)
}

export { initialiseStores, globalStore }