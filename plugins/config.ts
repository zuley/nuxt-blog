/*
 * @Author: zuley
 * @Date: 2021-01-14 19:55:55
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-14 20:00:32
 */
import Vue from 'vue'
import appConfig from '~/config/appConfig'

import { AppConfig } from '~/types/config'

declare module 'vue/types/vue' {
  interface Vue {
    $appConfig: AppConfig
  }
}

Vue.prototype.$appConfig = appConfig