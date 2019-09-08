<template>
    <div class="tools">
        <div class="tools-menu">
            <ul class="tools-menu-ul">
                <li v-for="item in toolsMenu" :key="item.key" :class="currentKey === item.key ? 'active' : ''" @click="handleMenu(item.key)">{{ item.name }}</li>
            </ul>
        </div>
        <rsa v-if="currentKey === 'rsa'" />
        <client-only>
            <base64 v-if="currentKey === 'base64'" />
        </client-only>
        <img-base64 v-if="currentKey === 'imgtobase64'"/>
    </div>
</template>

<script>
  import Rsa from './components/Rsa'
  import Base64 from './components/Base64';
  import ImgBase64 from './components/ImgBase64';
  export default {
    name: 'tools',
    components: {ImgBase64, Base64, Rsa },
    data() {
      return {
        currentKey: 'rsa',
        toolsMenu: [
          { name: 'RSA私钥/公钥生成', key: 'rsa'},
          { name: 'Base64编码/解码', key: 'base64'},
          { name: '图片转Base64', key: 'imgtobase64'}
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
    padding: 0  1.333rem 0.8rem 1.333rem;
}
.tools-menu-ul {
    list-style: none;
    li {
        font-size: 1.2rem;
        display: inline;
        margin-right: 1rem;
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
