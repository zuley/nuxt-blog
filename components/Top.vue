<!--
 * @Author: zuley
 * @Date: 2021-02-05 16:04:29
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-07 11:04:11
-->
<template>
  <div class="m-top">
    {{ title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    title () {
      return this.$store.state.global.title
    }
  }
})
</script>