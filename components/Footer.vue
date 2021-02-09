<!--
 * @Author: zuley
 * @Date: 2021-02-08 10:42:15
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 11:01:25
-->
<template>
  <div class="m-footer">
    <ul class="menu">
      <li v-for="(item, index) in footerMenu" :key="index">
        <nuxt-link
          :to="item.url"
          :target="item.new_tab_open ? '_blank' : ''"
        >{{ item.name }}</nuxt-link>
      </li>
    </ul>
    <div class="copyright" v-html="copyright"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {

  get footerMenu () {
    return this.$store.state.global.footerMenu
  }

  get copyright () {
    return this.$store.state.global.copyright
  }
}
</script>

<style lang="scss">
.m-footer {
  line-height: 40px;
  height: 40px;
  background: rgb(31, 41, 55);
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  .menu {
    display: flex;
    margin-left: 30px;
    font-size: 12px;
    float: left;
    a {
      display: block;
      color: rgba($color: #fff, $alpha: .3);
      padding-right: 30px;
      &:hover {
        color: rgba($color: #fff, $alpha: .6);
      }
    }
  }
  .copyright {
    float: right;
    font-size: 12px;
    color: rgba($color: #fff, $alpha: .3);
    margin-right: 30px;
  }
}
</style>