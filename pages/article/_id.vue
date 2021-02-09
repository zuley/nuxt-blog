<!--
 * @Author: zuley
 * @Date: 2021-02-08 11:14:36
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 16:59:48
-->
<template>
  <div class="p-article">
    <Top />
    <Header />
    <div class="g-wrap">
      <div class="m-single">
        <div class="cat">
          <nuxt-link
            v-for="cat in article[articleFieldKey.cat]" :key="cat._id"
            :to="`/classify/slug/${cat[classifyFieldKey.slug]}`"
          >{{ cat[classifyFieldKey.name] }}</nuxt-link>
        </div>
        <h1 class="title">{{ article[articleFieldKey.title] }}</h1>
        <div class="meta">
          <span>发布于: {{ article._createTime | dateFormat('YYYY-MM-DD') }}</span>
          <!-- <span>阅读数: {{ article[articleFieldKey.views] }}</span> -->
        </div>
        <div class="m-format" v-html="article[articleFieldKey.content]"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '@/components/Top.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ArticleData } from '~/types/config'
import { message } from 'ant-design-vue'

export default Vue.extend({
  components: {
    Top,
    Header,
    Footer
  },
  async asyncData ({ $api, params }) {
    if (process.client) message.loading('正在加载内容')
    const article = await $api.article.getDataById(params.id)
    if (process.client) message.destroy()
    return {
      article
    }
  },
  data () {
    return {
      article: {} as ArticleData,
      articleFieldKey: this.$appConfig.schema.article.fieldKEY,
      classifyFieldKey: this.$appConfig.schema.classify.fieldKEY,
    }
  }
})
</script>