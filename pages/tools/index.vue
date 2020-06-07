<template>
  <div class="tools">
    <div class="tools-menu">
      <ul class="tools-menu-ul">
        <li v-for="item in toolsMenu" :key="item.key" :class="currentKey === item.key ? 'active' : ''"
            @click="handleMenu(item.key)">{{ item.name }}
        </li>
      </ul>
    </div>
    <div style="min-height: 480px; border: 1px dotted rgba(244,245,245,0.87)">
      <client-only>
        <json v-if="currentKey === 'json'"/>
        <xml v-if="currentKey === 'xml'"/>
      </client-only>
      <url v-if="currentKey === 'url'"/>
      <base64 v-if="currentKey === 'base64'"/>
      <unicode v-if="currentKey === 'unicode'"/>
      <img-base64 v-if="currentKey === 'imgtobase64'"/>
      <md5 v-if="currentKey === 'md5'"/>
      <hex v-if="currentKey === 'hex'"/>
      <regex v-if="currentKey === 'regex'"/>
      <rsa v-if="currentKey === 'rsa'"/>
    </div>
    <bigfool-share title="Bigfool - 在线工具"/>
    <bigfool-totop />
  </div>
</template>

<script>
  import Rsa from './components/Rsa'
  import Base64 from './components/Base64';
  import ImgBase64 from './components/ImgBase64';
  import Md5 from './components/Md5';
  import Hex from './components/Hex';
  import Url from "./components/Url";
  import Unicode from "./components/Unicode";
  import Regex from "./components/Regex";
  export default {
    name: 'tools',
    components: {Unicode, Url, Hex, Md5, ImgBase64, Base64, Rsa, Regex },
    data() {
      return {
        currentKey: 'json',
        toolsMenu: [
          {name: 'Json格式化', key: 'json'},
          {name: 'XML格式化', key: 'xml'},
          {name: 'Base64编码/解码', key: 'base64'},
          {name: 'URL编码/解码', key: 'url'},
          {name: 'Unicode/中文互转', key: 'unicode'},
          {name: '图片转Base64', key: 'imgtobase64'},
          {name: 'MD5哈希', key: 'md5'},
          {name: '进制转换', key: 'hex'},
          {name: '正则表达式', key: 'regex'},
          {name: 'RSA私钥/公钥生成', key: 'rsa'},
        ]
      }
    },
    head() {
      return {
        title: 'Bigfool - 在线工具',
        meta: [
          {
            hid: 'tools',
            name: 'description',
            content: '在线工具 RSA RSA私钥生成 RSA公钥生成 Json格式化 XML格式化 URL编码 URL解码 Base64编码 Base64解码 Unicode转换中文 中文转换Unicode 图片转Base64 MD5哈希 进制转换'
          }
        ]
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleMenu(key) {
        this.currentKey = key
      },
      handleScroll() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        document.querySelector('.to-top-btn').classList[scrollTop > 120 ? 'add' : 'remove']('show')
      },
      handleTag(tag) {
        this.$router.push({name:'index',params:{tag_id:tag.tag_id,tag_name:tag.tag_name}})
      },
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
  }
</script>

<style lang="scss" scoped>
  .tools {
    margin: 1.767rem 0;
    width: 100%;
    background-color: #fff;
    padding: 1.333rem;
  }

  .tools-menu {
    padding: 0 1.333rem 0 1.333rem;
  }

  .tools-menu-ul {
    list-style: none;

    li {
      font-size: 1.2rem;
      display: inline-block;
      margin-right: 1.333rem;
      margin-bottom: 1.333rem;
      cursor: pointer;

      &:hover {
        color: #007fff;
      }
    }
  }

  .active {
    color: #007fff;
  }
</style>
