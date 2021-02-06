/*
 * @Author: zuley
 * @Date: 2021-02-05 18:01:04
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-06 11:56:33
 */

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Api from '~/api/index'
import appConfig from '~/config/appConfig'
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

  @Mutation
  setOption(opt: { key: string, data: MenuData[] }) {
    (this as any)[opt.key] = opt.data
  }

  @Action
  async getMenu (menu: { key: string, code: string }) {
    Api.global.getMenu(menu.code).then(res => {
      this.context.commit('setMenu', { key: menu.key, data: res })
    })
  }

  @Action
  getOption (key: string, code: string) {
    Api.global.getOption(code).then(res => {
      this.context.commit('setOption', { key, data: res })
    })
  }

  @Action
  getAllOption () {
    Api.global.getOption().then(res => {
      this.context.commit('setOption', { key: 'title', data: res.find(el => el.code === appConfig.dict.option.siteTitle) })
      this.context.commit('setOption', { key: 'subhead', data: res.find(el => el.code === appConfig.dict.option.siteSubhead) })
      this.context.commit('setOption', { key: 'keyword', data: res.find(el => el.code === appConfig.dict.option.siteKeyword) })
      this.context.commit('setOption', { key: 'description', data: res.find(el => el.code === appConfig.dict.option.siteDescription) })
      this.context.commit('setOption', { key: 'copyright', data: res.find(el => el.code === appConfig.dict.option.copyright) })
      this.context.commit('setOption', { key: 'statisticsCode', data: res.find(el => el.code === appConfig.dict.option.statisticsCode) })
    })
  }
  
}