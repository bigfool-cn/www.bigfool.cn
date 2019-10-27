<template>
    <div v-clickoutside="hide" class="drop-down">
        <div class="phone-show-menu" @click="handleMenuClick">
            <span>{{ title }}</span>
            <bigfool-icon name="sort-down" />
        </div>
        <ul class="phone-hide" :class="{'show': show}">
            <nuxt-link  v-for="(item, index) in items" :key="index" :to="{ name: item.name }">
                <li class="nav-item link-item" @click="handleItemClick(item.title)">
                    {{ item.title }}
                </li>
            </nuxt-link>
        </ul>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Clickoutside from '@/utils/dom/clickoutside'

  export default {
    name: 'Dropdown',
    directives: { Clickoutside },
    async asyncData({route}) {

    },
    data () {
      return {
        show: false,
        title: '首页',
        items: [
          { name: 'index', title: '首页' },
          { name: 'articles', title: '文章' },
          { name: 'tools', title: '工具' },
          { name: 'links', title: '友链' },
          { name: 'questions', title: '反馈' }
        ]
      }
    },
    computed: {
      ...mapState({
        isPhone: state => state.isPhone
      })
    },
    mounted () {
      this.items.forEach(item => {
        if (item.name === this.$route.name) {
          this.title = item.title
          return false
        }
      })
    },
    methods: {
      handleMenuClick () {
        this.show = !this.show
      },
      handleItemClick (title) {
        this.show = false
        this.title = title
      },
      hide () {
        this.show = false
      }
    }
  }
</script>

<style lang="scss">
.drop-down {
    .phone-show-menu {
       display:none;
    }
    span {
        margin-right: 0.5rem;
    }
    .phone-hide {
        display: flex;
        .nuxt-link-exact-active {
            li{
                color:#007fff
            }
            color:#007fff
        }
    }
}
@media (max-width: 980px) {
    .drop-down {
        .phone-show-menu {
            height: 5rem;
            display: flex;
            align-items: center;
            font-size: 1.33rem;
            color: #007fff;
            justify-content: center;
            padding: 0 2rem;
        }
        .phone-hide {
            display: none;
            background-color: #fff;
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
            border: 1px solid hsla(217,5%,71%,.45);
            border-radius: 4px;
            font-size: 1.2rem;
        }
        .phone-hide.show {
            display: block;
        }
    }
}
</style>
