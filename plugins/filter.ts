/*
 * @Author: zuley
 * @Date: 2021-02-07 16:02:56
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-07 16:04:30
 */
import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('dateFormat', function (value: string, code: string) {
  return dayjs(value).format(code)
})