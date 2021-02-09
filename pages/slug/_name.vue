<!--
 * @Author: zuley
 * @Date: 2021-02-08 15:41:07
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 16:15:21
-->
<template>
  <div class="p-index">
    <Top />
    <Header :classify="classify" />
    <div class="g-wrap m-itemBox">
      <div class="page">
        <nuxt-link v-if="page > 1" :to="{ query: { page: page - 1 } }"><a-icon type="caret-left" /></nuxt-link>
        <nuxt-link v-if="showMore && lists.length > 0" :to="{ query: { page: page + 1 } }"><a-icon type="caret-right" /></nuxt-link>
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
  async asyncData ({ $api, query, params }) {
    const page: number = +query.page || 1
    const size: number = +query.size || 10
    if (process.client) message.loading('正在加载内容')
    const classify = await $api.classify.getDataBySlug(params.name)
    const lists = await $api.article.getList(params.name, 'slug', page, size)
    if (process.client) message.destroy()
    return {
      page,
      size,
      lists,
      classify: classify[0]
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
      this.$api.article.getList(this.$route.params.name, 'slug', this.page, this.size).then(res => {
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