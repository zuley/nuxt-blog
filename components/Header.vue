<!--
 * @Author: zuley
 * @Date: 2021-02-07 14:23:01
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 16:24:08
-->
<template>
  <div class="m-header">
    <div class="g-wrap" v-if="classify">
      <h1 class="title">分类：{{ classify[$appConfig.schema.classify.fieldKEY.name] }}</h1>
      <div class="desc">{{ classify[$appConfig.schema.classify.fieldKEY.description] }}</div>
    </div>
    <div v-else class="g-wrap">
      <h1 class="title">{{ title }}</h1>
      <div class="desc">{{ subhead }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ClassifyData } from '~/types/config'

@Component
export default class Header extends Vue {

  @Prop({ type: Object, required: false }) readonly classify!: ClassifyData | null

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