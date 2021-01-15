import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import service from '~/api'
import { Service } from '~/types/service'

declare module '@nuxt/types' {
  interface Context {
    $api: Service
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: Service
  }
}

Vue.prototype.$api = service

const Api: Plugin = (context) => {
  context.$api = service
}

export default Api