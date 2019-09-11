<template>
    <div class="tools">
        <div class="tools-menu">
            <ul class="tools-menu-ul">
                <li v-for="item in toolsMenu" :key="item.key" :class="currentKey === item.key ? 'active' : ''" @click="handleMenu(item.key)">{{ item.name }}</li>
            </ul>
        </div>
        <div style="min-height: 480px; border: 1px dotted rgba(244,245,245,0.87)">
            <rsa v-if="currentKey === 'rsa'" />
            <client-only>
                <base64 v-if="currentKey === 'base64'" />
            </client-only>
            <img-base64 v-if="currentKey === 'imgtobase64'" />
            <md5 v-if="currentKey === 'md5'" />
            <hex v-if="currentKey === 'hex'" />
        </div>
    </div>
</template>

<script>
  import Rsa from './components/Rsa'
  import Base64 from './components/Base64';
  import ImgBase64 from './components/ImgBase64';
  import Md5 from './components/Md5';
  import Hex from './components/Hex';
  export default {
    name: 'tools',
    components: { Hex, Md5, ImgBase64, Base64, Rsa },
    data() {
      return {
        currentKey: 'rsa',
        toolsMenu: [
          { name: 'RSA私钥/公钥生成', key: 'rsa'},
          { name: 'Base64编码/解码', key: 'base64'},
          { name: '图片转Base64', key: 'imgtobase64'},
          { name: 'MD5哈希', key: 'md5'},
          { name: '进制转换', key: 'hex'}
        ]
      }
    },
    methods: {
      handleMenu(key) {
        this.currentKey = key
      }
    }
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
    padding: 0  1.333rem 0 1.333rem;
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
