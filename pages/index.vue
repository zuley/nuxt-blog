<!--
 * @Author: zuley
 * @Date: 2021-01-12 10:05:29
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-05 16:05:48
-->
<template>
  <div class="container">
    <div>
      233
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted () {
    this.$api.article.getList('test', 'slug').then(res => {
      console.log('文章数据', res)
    })
    // this.$api.global.getMenu(this.$appConfig.dict.menu.footer_blogroll)
    // this.$api.global.getOption(this.$appConfig.dict.option.siteTitle)
    // this.$api.global.getOption(this.$appConfig.dict.option.siteKeyword)
    // this.$api.page.getChildList('28ee4e3e600e9fef00f71ec90dd08d0d')
    // this.$api.classify.getTopList()
    // this.$api.page.getTopList()
  }
})
</script>