<!--
 * @Author: zuley
 * @Date: 2021-01-12 10:05:29
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-07 17:08:31
-->
<template>
  <div class="p-index">
    <Top />
    <Header />
    <div class="g-wrap m-itemBox">
      <PostItem
        v-for="(item, index) in lists"
        :key="index"
        :item="item"
      />
      <div class="loadMore" @click="loadMore">加载更多</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Top from '@/components/Top.vue'
import Header from '@/components/Header.vue'
import PostItem from '@/components/PostItem.vue'
import { ArticleData } from '~/types/config'

export default Vue.extend({
  components: {
    Top,
    Header,
    PostItem
  },
  async asyncData ({ $api, query }) {
    const page: number = +query.page || 1
    const size: number = +query.size || 1
    const lists = await $api.article.getList('', '', page, size)
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
      lists: [] as ArticleData[]
    }
  },
  methods: {
    loadMore () {
      this.page++
      this.$api.article.getList('', '', this.page, this.size).then(res => {
        this.lists.push(...res)
      })
    }
  }
})
</script>