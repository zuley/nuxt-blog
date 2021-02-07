<!--
 * @Author: zuley
 * @Date: 2021-01-12 10:05:29
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-06 12:07:27
-->
<template>
  <div class="container">
    <Top />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '@/components/Top.vue'

export default Vue.extend({
  components: {
    Top
  },
  mounted () {
    // this.$api.global.getMenu(this.$appConfig.dict.menu.footer_blogroll)
    // this.$api.global.getOption(this.$appConfig.dict.option.siteTitle)
    // this.$api.global.getOption(this.$appConfig.dict.option.siteKeyword)
    // this.$api.page.getChildList('28ee4e3e600e9fef00f71ec90dd08d0d')
    // this.$api.classify.getTopList()
    // this.$api.page.getTopList()
  }
})
</script>