<!--
 * @Author: zuley
 * @Date: 2021-01-12 10:05:29
 * @LastEditors: zuley
 * @LastEditTime: 2021-01-25 19:33:33
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
    // this.$api.global.getMenu(this.$appConfig.dict.menu.head)
    // this.$api.global.getMenu(this.$appConfig.dict.menu.footer_blogroll)
    // this.$api.global.getOption(this.$appConfig.dict.option.siteTitle)
    // this.$api.global.getOption(this.$appConfig.dict.option.siteKeyword)
    this.$api.page.getTopList()
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
