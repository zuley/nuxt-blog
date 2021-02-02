/*
 * @Author: zuley
 * @Date: 2021-02-02 13:54:32
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-02 13:54:49
 */

import _ from 'lodash'

export function treeFormat (data: any = [], config = {}) {
  const { parentKey, childKey } = Object.assign({
    parentKey: 'parent',
    childKey: 'children'
  }, config)
  const groupData = _.groupBy(data, (el) => {
    if (!el[parentKey]) return 'root'
    return el[parentKey]._id
  })
  const root = [...groupData.root]
  return root.map(el => {
    el[childKey] = groupData[el._id] || []
    return el
  })
}