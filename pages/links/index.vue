<template>
    <div class="container-body links">
        <ul class="links-item">
            <a v-for="(link, index) in links" :key="index" :href="link.link_url" target="_blank"><li class="link" :style="{backgroundColor: color[index]}">{{ link.link_name }}</li></a>
            <li class="link" v-if="links.length % 3 === 2"></li>
        </ul>
    </div>
</template>

<script>
  import { getLinks } from '@/api/link'
  import color from '@/utils/color'
  export default {
    name: 'links',
    async asyncData() {
        return getLinks().then(res => {
          return {
            links: res.data.links,
            color: color
          }
        })
    },
    head () {
      return {
        title: 'Bigfool - 友情链接',
      }
    },
    data() {
      return {
        links: []
      }
    }
  }
</script>

<style lang="scss" scoped>
    .links {
        padding: 1.767rem;
        background-color: #fff;
        text-align: center;
    }
    .links-item {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        font-size: 1.333rem;
        color: #fff;
        li {
            text-align: center;
            height: 50px;
            line-height: 50px;
            margin-bottom: 20px;
            &:hover {
                font-size: 1.5rem;
            }
        }
        @media (max-width: 415px){
            .link {
                min-width: 100%;
            }
        }
        @media (max-width: 945px) and (min-width: 415px){
            .link {
                min-width: 45%;
            }
        }
        @media (min-width: 945px){
            .link {
                min-width: 290px;
            }
            li:nth-child(3n-1) {
                margin: 0px 15px 20px 15px;
            }
        }

    }
</style>
