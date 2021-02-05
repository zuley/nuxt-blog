/*
 * @Author: zuley
 * @Date: 2021-02-05 19:05:14
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-05 19:27:10
 */

import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'
// 初始化 store
const initializer = (store: Store<any>) => initialiseStores(store)
// 导出为插件
export const plugins = [initializer]
// 导出为方法
export * from '~/utils/store-accessor'