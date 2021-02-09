/*
 * @Author: zuley
 * @Date: 2021-01-12 11:02:05
 * @LastEditors: zuley
 * @LastEditTime: 2021-02-08 16:23:03
 */

import { AppConfig } from "~/types/config";

export default {
  // 基础访问路径
  apiBasePath: 'http://cms.zuley.xyz/blog/v1.0/',
  // 内容模型设置
  schema: {
    // 设置模型
    option: {
      db_name: 'blog_option',
      fieldKEY: {
        code: 'code',
        name: 'name',
        value: 'name',
      }
    },
    /** 菜单模型 */
    menu: {
      db_name: 'blog_menu',
      fieldKEY: {
        name: 'name',
        url: 'url',
        new_tap_open: 'new_tap_open',
        nofollow: 'nofollow',
        type_code: 'type_code',
        parent: 'parent'
      }
    },
    /** 页面模型 */
    page: {
      db_name: 'blog_page',
      fieldKEY: {
        title: 'title',
        content: 'content',
        pic: 'pic',
        url: 'url',
        style: 'style',
        parent: 'parent'
      }
    },
    /** 文章分类 */
    classify: {
      db_name: 'blog_article_classify',
      fieldKEY: {
        name: 'name',
        description: 'description',
        slug: 'slug',
        pic: 'pic',
        parent: 'parent'
      }
    },
    /** 文章 */
    article: {
      db_name: 'blog_article',
      fieldKEY: {
        title: 'title',
        summary: 'summary',
        content: 'content',
        views: 'views',
        cat: 'cat',
        pic: 'pic',
        meta: 'meta',
        tags: 'tags',
        newTabStatus: 'new-tab-status'
      }
    }
  },
  dict: {
    option: {
      // 站点标题
      siteTitle: 'SITE_TITLE',
      // 站点副标题
      siteSubhead: 'SITE_SUBHEAD',
      // 站点关键字
      siteKeyword: 'SITE_KEYWORD',
      // 站点描述
      siteDescription: 'SITE_DESCRIPTION',
      // 备案信息
      copyright: 'COPYRIGHT',
      // 站点统计代码
      statisticsCode: 'STATISTICS_CODE',
      // 是否开启文章评论
      articleCommentStatus: 'ARTICLE_COMMENT_STATUS',
    },
    menu: {
      head: 'HEAD_MENU',
      footer_blogroll: 'FOOTER_BLOGROLL'
    }
  }
} as AppConfig
 