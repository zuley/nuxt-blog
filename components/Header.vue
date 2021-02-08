<!--
 * @Author: zuley
 * @Date: 2021-02-07 14:23:01
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-07 16:10:44
-->
<template>
  <div class="m-header">
    <div class="g-wrap">
      <h1 class="title">{{ title }}</h1>
      <div class="desc">{{ subhead }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {

  get title (): string {
    return this.$store.state.global.title
  }

  get subhead () {
    return this.$store.state.global.subhead
  }
}
</script>

<style lang="scss">
.m-header {
  padding-top: 60px;
  margin-bottom: 30px;
  .title {
    font-size: 30px;
    line-height: 1.6;
    margin: 0;
    color: #fff;
    font-weight: normal;
  }
  .desc {
    font-size: 16px;
    color: rgba($color: #fff, $alpha: 0.8);
  }
}
</style>