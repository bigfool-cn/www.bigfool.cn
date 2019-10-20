<template>
    <div class="container-body">
        <div ref="entry" class="r-aside">
            <div class="aside">
                <div class="article-header">
                    <div class="article-title">{{ article.article_title}}</div>
                    <div class="article-footer">
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
                </div>
                <client-only>
                    <mavon-editor v-model="article.article_content" :subfield="false" defaultOpen="preview"
                                  :ishljs="true" :toolbarsFlag="false" :boxShadow="false" />
                </client-only>
                <share />
            </div>
        </div>
        <div class="l-aside">
            <div class="item">
                <div class="item-title">
                    <bigfool-icon name="book" size="1.4" font-unit="rem" color="#007fff" />
                    相关文章
                </div>
                <ul class="li-item">
                    <li v-for="item in relArticles" :key="item.article_id">
                        <nuxt-link :to="{ name: 'articles-id', params: { id: item.article_id }}"
                                   :title="item.article_title">
                            {{item.article_title}}
                        </nuxt-link>
                    </li>
                    <li v-if="relArticles.length === 0">
                        暂无相关文章...
                    </li>
                </ul>
            </div>
        </div>
        <bigfool-totop />
    </div>
</template>

<script>
  import Share from '@/components/Share'
  import {getArticle} from '@/api/article'

  export default {
    name: 'ArticleDetail',
    components: { Share },
    async asyncData({params}) {
      const {article, relArticles} = await getArticle(params.id).then(res => {
        return {
          article: res.data.article,
          relArticles: res.data.relArticles,
        }
      })
      return {article, relArticles}
    },
    data() {
      return {
        articleId: 0,
        content: 'Bigfool PHP ThinkPHP Laravel JavaScript CSS Vue Nuxt.js Linux Nginx Redis Memcache MySQL 程序员 博客'
      }
    },
    head () {
      return {
        title: this.article.article_title,
        meta: [
          { hid: 'article', name: 'description', content: this.article.article_title + this.content }
        ]
      }
    },
    created() {
      this.articleId = this.$route.params.id
    }
  }
</script>


<style lang="scss" scoped>
    @import "~/assets/css/content-item.scss";
    .article-header {
        padding: 1.333rem 1.333rem 0.5rem 1.333rem;
    }
    .article-title{
        font-size: 1.5rem;
        font-weight: 600;
        color: #2e3135;
        text-align: center;
        padding: 0 0.8rem 0.8rem 0.8rem;
    }
    .article-footer {
        text-align: center;
        padding: 0.5rem 0;
        .aside-tag {
            margin-right: 0.25rem;
        }
        span {
            margin-right: 0.8rem;
            i {
                margin-right: 0.4rem;
            }
        }
    }
    /deep/ .v-note-wrapper.markdown-body {
        z-index: 0;
    }
    /deep/ .v-note-show .v-show-content {
        background-color: #fff !important;
    }
</style>
