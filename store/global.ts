/*
 * @Author: zuley
 * @Date: 2021-02-05 18:01:04
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-05 21:52:53
 */

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Api from '~/api/index'
import { MenuData } from '~/types/config'

@Module({
  name: 'global',
  stateFactory: true,
  namespaced: true,
})
export default class Global extends VuexModule {
  headMenu: MenuData[] = []

  @Mutation
  setMenu(menu: { key: string, data: MenuData[] }) {
    (this as any)[menu.key] = menu.data
  }

  @Action
  getMenu (key: string, code: string) {
    Api.global.getMenu(code).then(res => {
      this.context.commit('setMenu', { key, data: res })
    })
  }

  @Action
  getOption (code: string) {
    Api.global.getOption(code).then(res => {
      this.context.commit('setOption', res)
    })
  }
}