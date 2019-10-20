<template>
    <div class="container-body">
        <div ref="entry" class="r-aside">
            <div class="aside">
                <ul>
                    <nuxt-link :to="{ name: 'articles-id', params: {id: article.article_id}}"
                               v-for="article in articles" :key="article.article_id">
                        <li class="aside-item">
                            <div class="aside-title">
                                {{ article.article_title }}
                            </div>
                            <div class="aside-footer">
                                <span :title="article.create_time">
                                    <bigfool-icon name="calendar" color="#b2bac2" />{{ article.create_time | formatTime}}
                                </span>
                                <span>
                                    <bigfool-icon name="user-circle" color="#b2bac2" />{{ article.article_author }}
                                </span>
                                <span>
                                    <bigfool-icon name="eye" color="#b2bac2" />{{ article.article_read }}
                                </span>
                                <bigfool-icon name="bookmark" color="#b2bac2" />
                                <span v-for="item in article.tags" :key="item.tag_id" class="aside-tag"
                                      @click.stop.prevent="handleTag(item)">
                                    {{ item.tag_name }}
                                </span>
                            </div>
                        </li>
                    </nuxt-link>
                </ul>
            </div>
        </div>
        <div class="l-aside">
            <div class="item">
                <div class="item-title">
                    <bigfool-icon name="bookmark" size="1.5" font-unit="rem" color="#007fff" />
                    标签云
                </div>
                <ul class="tags-item">
                    <li v-for="item in articlesTags" :key="item.tag_id">
                        <el-tag :type="tag.tag_id === item.tag_id ?  'danger' : 'info'" @click="handleTag(item)">{{
                            item.tag_name }}
                        </el-tag>
                    </li>
                </ul>
            </div>
            <div class="item">
                <div class="item-title">
                    <bigfool-icon name="fire" size="1.5" font-unit="rem" color="#d81e06" />
                    热门文章
                </div>
                <ul class="li-item">
                    <li v-for="hot in hotArticles" :key="hot.article_id">
                        <nuxt-link :to="{ name: 'articles-id', params: { id: hot.article_id }}"
                                   :title="hot.article_title">
                            {{hot.article_title}}
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <bigfool-totop />
    </div>
</template>

<script>
  import {getHotArticles, getArticles} from '@/api/article'
  import {getArticlesTags} from '@/api/tag'
  export default {
    name: 'articles',
    async asyncData() {
      let [articlesItem, hotArticles, articlesTags] = await Promise.all([
        getArticles({page: 1}).then(res => {
          return {
            articles: res.data.articles,
            pages: res.data.pages
          }
        }),
        getHotArticles().then(res => {
          return res.data.hotArticles
        }),
        getArticlesTags().then(res => {
          return res.data.tags
        })
      ])
      return {
        hotArticles: hotArticles,
        articlesTags: articlesTags,
        articles: articlesItem.articles,
        pages: articlesItem.pages,
        tag: {
          tag_id: null,
          tag_name: null
        }
      }
    },
    data() {
      return {
        scrollStatus: true
      }
    },
    head () {
      return {
        title: 'Bigfool - 文章',
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleTag(tag) {
        if (this.tag.tag_id === tag.tag_id) {
          return false
        }
        this.tag = tag
        getArticles({page: 1, tag_id: tag.tag_id}).then(res => {
          this.articles = res.data.articles.map(item => {
            item.tags = [this.tag]
            return item
          })
          this.pages = res.data.pages
        })
      },
      handleScroll() {
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(this.loadMoreData, 300)
      },
      loadMoreData() {
        return new Promise((resolve) => {
          const $el = document.documentElement
          const $entry = this.$refs.entry
          const clienHeight = $el.clientHeight
          const style = window.getComputedStyle ? window.getComputedStyle($entry, null) : null || $entry.currentStyle
          const containerHeight = ~~style.height.split('px')[0]
          // 设置【返回顶部】显示隐藏
          document.querySelector('.to-top-btn').classList[$el.scrollTop > 120 ? 'add' : 'remove']('show')
          // 滚动到一定高度，重新加载数据
          if ($el.scrollTop + clienHeight > containerHeight - 10 && this.scrollStatus) {
            if (this.pages.current_page < this.pages.last_page) {
              getArticles({page: this.pages.current_page + 1, tag_id: this.tagId}).then(res => {
                if (this.tag.tagId) {
                  this.articles = res.data.articles.forEach(item => {
                    item.tags[0] = this.tag
                    return item
                  })
                } else {
                  this.articles = this.articles.concat(res.data.articles)
                }
                this.pages = res.data.pages
              })
            }
            resolve()
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/content-item.scss";

    .aside-item {
        border-bottom: 1px solid #f4f5f5;
        padding: 1.5rem 2rem;

        &:nth-child(1) {
            border-top: 1px solid #f4f5f5;
        }

        &:hover {
            background-color: #fafdfa;
        }
    }

    .aside-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2e3135;
        padding-bottom: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover {
            text-decoration: underline;
        }
    }

    .aside-footer {
        padding-top: 0.5rem;
        color: #b2bac2;

        span {
            margin-right: 0.6rem;

            i {
                margin-right: 0.25rem;
            }
        }
    }

    .tags-item {
        margin-top: 0.5rem;

        li {
            float: left;
            margin-right: 0.6rem;
            margin-top: 0.6rem;
            height: 32px;

            &:hover {
                color: #007fff;
            }
        }
    }

    .el-tag:hover {
        background-color: #fef0f0;
        border-color: #fde2e2;
        color: #f56c6c;
        cursor: pointer;
    }

    .ion-bookmark,
    .ion-flame {
        position: relative;
        bottom: -1px;
    }
</style>
