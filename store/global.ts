/*
 * @Author: zuley
 * @Date: 2021-02-05 18:01:04
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-07 11:00:49
 */

import { Menu } from 'ant-design-vue'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import Api from '~/api/index'
import appConfig from '~/config/appConfig'
import { MenuData, OptionData } from '~/types/config'

@Module({
  name: 'global',
  stateFactory: true,
  namespaced: true,
})
export default class Global extends VuexModule {
  headMenu: MenuData[] = []
  footerMenu: MenuData[] = []
  title: string = ''
  subhead: string = ''
  keyword: string = ''
  description: string = ''
  copyright: string = ''
  statisticsCode: string = ''
  // 设置菜单
  @Mutation
  setMenu(menu: { key: string, data: MenuData[] }) {
    (this as any)[menu.key] = menu.data
  }

  // 设置数据
  @Mutation
  setOption(opt: { key: string, data: OptionData }) {
    const val = opt.data ? opt.data.value : '';
    (this as any)[opt.key] = val
  }

  // 获取菜单
  @Action
  async getMenu (menu: { key: string, code: string }) {
    await Api.global.getMenu(menu.code).then(res => {
      this.context.commit('setMenu', { key: menu.key, data: res })
    })
  }

  // 获取单个设置
  @Action
  getOption (key: string, code: string) {
    Api.global.getOption(code).then(res => {
      this.context.commit('setOption', { key, data: res })
    })
  }

  // 获取全部设置
  @Action
  async getAllOption () {
    await Api.global.getOption().then(res => {
      this.context.commit('setOption', { key: 'title', data: res.find(el => el.code === appConfig.dict.option.siteTitle) })
      this.context.commit('setOption', { key: 'subhead', data: res.find(el => el.code === appConfig.dict.option.siteSubhead) })
      this.context.commit('setOption', { key: 'keyword', data: res.find(el => el.code === appConfig.dict.option.siteKeyword) })
      this.context.commit('setOption', { key: 'description', data: res.find(el => el.code === appConfig.dict.option.siteDescription) })
      this.context.commit('setOption', { key: 'copyright', data: res.find(el => el.code === appConfig.dict.option.copyright) })
      this.context.commit('setOption', { key: 'statisticsCode', data: res.find(el => el.code === appConfig.dict.option.statisticsCode) })
    })
  }
  
}