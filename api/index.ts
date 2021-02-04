/*
 * @Author: zuley
 * @Date: 2021-01-15 09:43:50
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-04 13:44:22
 */
import { Service } from '~/types/service'
import global from './global'
import page from './page'
import classify from './classify'
import article from './article'

const service: Service = {
  global,
  page,
  classify,
  article
}

export default service;
