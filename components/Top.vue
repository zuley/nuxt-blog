<!--
 * @Author: zuley
 * @Date: 2021-02-05 16:04:29
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-07 14:11:19
-->
<template>
  <div class="m-top">
    <ul class="menu">
      <li v-for="(item, index) in headMenu" :key="index">
        <nuxt-link
          :to="item.url"
          :target="item.new_tab_open ? '_blank' : ''"
        >{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Top extends Vue {

  get title (): string {
    return this.$store.state.global.title
  }

  get headMenu () {
    return this.$store.state.global.headMenu
  }
}
</script>

<style lang="scss">
.m-top {
  line-height: 60px;
  height: 60px;
  background: rgb(31, 41, 55);
  .menu {
    margin-left: 50px;
    display: flex;
    font-size: 16px;
    a {
      display: block;
      color: rgba($color: #fff, $alpha: .8);
      padding-right: 30px;
    }
  }
}
</style>