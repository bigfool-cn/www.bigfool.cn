<template>
    <header class="v-header">
        <div class="header-container">
            <nuxt-link to="/">
                <img src="~/assets/img/logo.svg" alt="Bigfool" class="logo-img">
            </nuxt-link>
            <nav class="main-nav">
                <ul class="nav-list">
                    <li class="main-nav-list">
                        <bigfool-dropdown />
                    </li>
                </ul>
            </nav>
            <div class="online" title="在线人数">
                <bigfool-icon name="users" size="16" color="#007fff" />
                <span>&nbsp;{{ onlineCount }}&nbsp;人</span>
            </div>
        </div>
    </header>
</template>

<script>
  import BigfoolDropdown from '@/components/Dropdown'
  import { postVisitor } from '@/api/app'
  import { createSocket } from '@/utils/websocket'
  export default {
    name: 'Header',
    components: {
      BigfoolDropdown
    },
    data () {
      return {
        onlineCount: 0,
        maxClientWidth: 980
      }
    },
    mounted () {
      const self = this
      document.body.onresize = () => {
        if (document.body.clientWidth > self.maxClientWidth) {
          self.$store.dispatch('settings/pcorPhone', false)
        } else {
          self.$store.dispatch('settings/pcorPhone', true)
        }
      }
      // 记录访问者
      postVisitor({ path: this.$route.path}).then(res => {}).catch();
      // 创建websocket链接
      createSocket()
      // 监听websocket推送过来的消息
      window.addEventListener('onmessage',function (res) {
        let data = JSON.parse(res.detail.data.data)
        switch (data.type) {
          case 'online':
            self.onlineCount = data.total
            break
        }
      })
    }
  }
</script>

<style lang="scss">
$font-color: #007fff;
.nav-list {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
}

.nav-item {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
    color: #71777c;
    padding: 0 1.2rem;
    font-size: 1.33rem;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        color: $font-color;
    }
}

.main-nav-list {
    display: flex;
    cursor: pointer;
    font-weight: 500;
}

.nav-item.link-item {
    padding: 0 20px;
    height: 5rem
}

.online {
    cursor: pointer;
}

@media (max-width: 980px) {
    .nav-item {
        height: 4rem;
        line-height: 4rem;
        font-size: 1.33rem;
    }
    .main-nav-list {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff
    }
}
.v-header {
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    height: 5rem;
    background: #fff;
    color: #909090;
    border-bottom: 1px solid #f1f1f1;
   .header-container {
       max-width :960px;
       height: 100%;
       margin: auto;
       display: flex;
       align-items: center;
       position: relative;
   }
    .main-nav {
        height: 100%;
        flex: 1 0 auto;
    }
}
@media (max-width:960px) {
    .v-header {
        .header-container {
            width: 96%;
        }
    }
}
</style>
