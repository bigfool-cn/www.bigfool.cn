<template>
    <div class="container-body">
        <div ref="entry" class="r-aside">
            <div class="aside aside-article">
                <div v-for="item in num" :key="item">{{item}}hahahha</div>
            </div>
            <div class="aside aside-question" >
                <div v-for="item in num" :key="item">{{item}}hahahha</div>
            </div>
        </div>
        <div class="l-aside">
            <div class="item">
                <ul class="info-item">
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                </ul>
            </div>
            <div class="item">
                <div class="link-title">友情链接</div>
                <ul class="link-item">
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                    <li>hahahhahahahhahahahha</li>
                </ul>
            </div>
            <div class="footer">
                <p>@2019 Design By Bigfool</p>
                <p>粤ICP备17147325号-1</p>
            </div>
        </div>
    </div>
</template>

<script>
  let first = 10
  export default {
    name: 'index',

    scrollToTop: true,
    data() {
      return {
        scrollStatus: true,
        num: 50,
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
          const containerHeight = ~~style.height.split('px')[0] + 140
          // 设置【返回顶部】显示隐藏
          document.querySelector('.to-top-btn').classList[$el.scrollTop > 120 ? 'add' : 'remove']('show')
          // 滚动到一定高度，重新加载数据
          if ($el.scrollTop + clienHeight > containerHeight - 10 && this.scrollStatus) {
            first += 10
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
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .r-aside {
        width: 75%;
        height: auto;
    }

    .l-aside {
        margin-left: 1.767rem;
        width: 25%;
        height: auto;
    }
    .aside {
        padding: 1.333rem;
        background-color: #fff;
    }
    .aside-article {
        margin-bottom: 1.767rem;
    }

    .aside-question {

    }

    .item {
        background-color: #fff;
        padding: 1.333rem;
        margin-bottom: 1.767rem;
        min-height: 200px;
    }

    .link-title {
        font-size: 1.333rem;
        padding-bottom: 5px;
        border-bottom: 1px solid #f4f5f5;
    }
    .link-item {
        margin-top: 1.333rem;
        li{
            float: left;
            width: 48%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:nth-child(2n) {
                margin-left: 4%;
            }
        }
    }

    .footer {
        text-align: center;
        padding: 0 1.333rem;
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
