/*
 * @Author: zuley
 * @Date: 2021-02-05 19:05:14
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-07 10:59:53
 */

import { Store } from 'vuex'
import appConfig from '~/config/appConfig'
import { initialiseStores, globalStore } from '~/utils/store-accessor'
// 初始化 store
const initializer = (store: Store<any>) => initialiseStores(store)
// 导出为插件
export const plugins = [initializer]
// 导出为方法
export * from '~/utils/store-accessor'

export const actions = {
  // 服务端初始化
  async nuxtServerInit(ctx: any) {
    await ctx.dispatch('global/getAllOption')
    await ctx.dispatch('global/getMenu', { key: 'headMenu', code: appConfig.dict.menu.head })
    await ctx.dispatch('global/getMenu', { key: 'footerMenu', code: appConfig.dict.menu.footer_blogroll })
  }
}