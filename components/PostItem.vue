<!--
 * @Author: zuley
 * @Date: 2021-02-07 14:31:35
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 16:59:41
-->
<template>
  <div class="m-postItem">
    <div class="cat">
      <nuxt-link
        v-for="cat in item[articleFieldKey.cat]" :key="cat._id"
        :to="`/classify/slug/${cat[classifyFieldKey.slug]}`"
      >{{ cat[classifyFieldKey.name] }}</nuxt-link>
    </div>
    <h2><nuxt-link
      :to="`/article/${item._id}`"
      :title="item.title"
    >{{ item.title }}</nuxt-link></h2>
    <div class="summary">{{ item[articleFieldKey.summary] }}</div>
    <div class="meta">
      <span>发布于: {{ item._createTime | dateFormat('YYYY-MM-DD') }}</span>
      <!-- <span>阅读数: {{ item[articleFieldKey.views] }}</span> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ArticleData } from '~/types/config'

@Component
export default class PostItem extends Vue {
  @Prop({ type: Object, required: true }) readonly item?: ArticleData

  articleFieldKey = this.$appConfig.schema.article.fieldKEY
  classifyFieldKey = this.$appConfig.schema.classify.fieldKEY

}
</script>

<style lang="scss">
.m-postItem {
  border-radius: 10px;
  background: rgb(31, 41, 55);
  padding: 30px;
  padding-bottom: 0;
  margin-bottom: 30px;
  >.cat {
    margin-bottom: 10px;
    a {
      display: inline-block;
      line-height: 30px;
      padding: 0 15px;
      border-radius: 5px;
      background: rgb(30, 58, 138);
    }
  }
  >h2 a{
    font-size: 30px;
    color: #fff;
    opacity: .8;
  }
  >.summary {
    font-size: 16px;
    margin-bottom: 20px;
  }
  >.meta {
    border-top: 1px solid rgba($color: #fff, $alpha: .05);
    margin: 0 -30px;
    padding: 0 30px;
    line-height: 40px;
    color: rgba($color: #fff, $alpha: .3);
    span {
      margin-right: 10px;
    }
  }
}
</style>