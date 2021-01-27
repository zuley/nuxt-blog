/*
 * @Author: zuley
 * @Date: 2021-01-15 09:43:50
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-27 13:42:05
 */
import { Service } from '~/types/service'
import global from './global'
import page from './page'
import classify from './classify'

const service: Service = {
  global,
  page,
  classify
}

export default service;
