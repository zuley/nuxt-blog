<!--
 * @Author: zuley
 * @Date: 2021-01-12 10:05:29
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 15:37:19
-->
<template>
  <div class="p-index">
    <Top />
    <Header />
    <div class="g-wrap m-itemBox">
      <div class="page">
        <nuxt-link v-if="page > 1" :to="{ path: '/', query: { page: page - 1 } }"><a-icon type="caret-left" /></nuxt-link>
        <nuxt-link v-if="showMore && lists.length > 0" :to="{ path: '/', query: { page: page + 1 } }"><a-icon type="caret-right" /></nuxt-link>
      </div>
      <PostItem
        v-for="(item, index) in lists"
        :key="index"
        :item="item"
      />
      <div v-if="showMore && lists.length > 0" class="loadMore" @click="loadMore">加载更多</div>
      <div v-else class="noMore">没有更多了</div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '@/components/Top.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PostItem from '@/components/PostItem.vue'
import { ArticleData } from '~/types/config'
import { message } from 'ant-design-vue'

export default Vue.extend({
  components: {
    Top,
    Header,
    Footer,
    PostItem
  },
  watchQuery: true,
  async asyncData ({ $api, query }) {
    const page: number = +query.page || 1
    const size: number = +query.size || 10
    if (process.client) message.loading('正在加载内容')
    const lists = await $api.article.getList('', '', page, size)
    if (process.client) message.destroy()
    return {
      page,
      size,
      lists
    }
  },
  data () {
    return {
      page: 1,
      size: 1,
      lists: [] as ArticleData[],
      showMore: true
    }
  },
  methods: {
    loadMore () {
      this.page++
      message.loading('正在加载内容')
      this.$api.article.getList('', '', this.page, this.size).then(res => {
        this.lists.push(...res)
        if (res.length === 0) {
          this.showMore = false
        }
      }).finally(() => {
        message.destroy()
      })
    }
  }
})
</script>