<template>
    <div class="container-body">
        <div ref="entry" class="r-aside">
            <div class="aside">
                <ul>
                    <nuxt-link to="/">
                        <li class="aside-item" v-for="item in num" :key="item">
                            <nuxt-link to="/" class="aside-title">标签分类标签分类标签分类标签分类标签分类标签分类标签分类标签分类标签分类标签分类标签分类标签分类</nuxt-link>
                            <div class="aside-footer">
                                <span>一天前</span>
                                <span>bigfool</span>
                                <span>1000</span>
                                <span>CSS</span>
                            </div>
                        </li>
                    </nuxt-link>
                </ul>
            </div>
        </div>
        <div class="l-aside">
            <div class="item">
                <div class="item-title">标签分类</div>
                <ul class="tags-item">
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                </ul>
            </div>
            <div class="item">
                <div class="item-title">热门文章</div>
                <ul class="hot-item">
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                    <li>hahahhahahahhahahahhahhahha</li>
                </ul>
            </div>
        </div>
      <bigfool-totop />
    </div>
</template>

<script>
import BigfoolTotop from '@/components/ToTop'
export default {
    name: 'articles',
    components: { BigfoolTotop },
    data() {
      return {
        scrollStatus: true,
        num: 100,
      }
    },
    mounted() {
      //this.getFullPageData()
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      // getFullPageData() {
      //   if (document.body.offsetHeight < window.innerHeight) {
      //     this.loadMoreData().then(res => {
      //       this.getFullPageData()
      //     })
      //   }
      // },
      handleScroll() {
        this.timer && clearTimeout(this.timer)
        this.timer = setTimeout(this.loadMoreData, 300)
      },
      loadMoreData () {
        return new Promise((resolve) => {
          const $el = document.documentElement
          const $entry = this.$refs.entry
          const clienHeight = $el.clientHeight
          const style = window.getComputedStyle ? window.getComputedStyle($entry, null) : null || $entry.currentStyle
          const containerHeight = ~~style.height.split('px')[0]
          // 设置【返回顶部】显示隐藏
          document.querySelector('.to-top-btn').classList[$el.scrollTop > 120 ? 'add' : 'remove']('show')
          console.log(($el.scrollTop + clienHeight) + '--' + (containerHeight - 10))
          // 滚动到一定高度，重新加载数据
          if ($el.scrollTop + clienHeight > containerHeight - 10 && this.scrollStatus) {
            this.num += 50
            resolve()
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

    .container-body {
        margin-top: 1.767rem;
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .r-aside {
        width: 700px;
        height: auto;
    }

    .l-aside {
        margin-left: 1.767rem;
        width: 240px;
        height: auto;
    }
    .aside {
        background-color: #fff;
    }
    .aside-item {
        border-bottom: 1px solid #f4f5f5;
        padding: 1.5rem 2rem;
        &:nth-child(1) {
            border-top: 1px solid #f4f5f5;
        }
        &:hover {
            background-color: #fafdfa;
        }
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .aside-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: #2e3135;
        padding-bottom: 0.5rem;
        &:hover {
            text-decoration: underline;
        }
    }
    .aside-footer{
        padding-top: 0.5rem;
        color: #b2bac2;
    }
    .item {
        background-color: #fff;
        padding: 1.333rem;
        margin-bottom: 1.767rem;
        min-height: 200px;
        li {
            font-size: 1.3rem;
            height: 2.2rem;
            line-height: 2.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .item-title {
        font-size: 1.333rem;
        padding-bottom: 5px;
        border-bottom: 1px solid #f4f5f5;
    }

    .tags-item {
        margin-top: 0.5rem;
        li{
            float: left;
            width: 48%;
            &:nth-child(2n) {
                margin-left: 4%;
            }
        }
    }
    .hot-item {
        margin-top: 0.5rem;
        li{
            width: 100%;
        }
    }

    @media (max-width: 980px) {
        .r-aside {
            width: 100%;
        }
        .l-aside {
            display: none;
        }
    }
</style>
