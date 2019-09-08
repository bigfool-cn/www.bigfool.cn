<template>
    <div class="feed welcome_feed">
      <bigfool-totop />
      <nuxt />
    </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Bigfool - 不正经的程序员',
        meta: [
          { hid: 'index', name: 'home', content: 'Bigfool PHP ThinkPHP Laravel JavaScript CSS Vue Nuxt.js Linux Nginx Redis Memcache MySQL 程序员 博客' }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .container-view {
      margin-top: 1.767rem;
      display: flex;
      align-items: flex-start;
      .welcome_feed {
          overflow: hidden;
          -webkit-box-flex: 1;
          flex-grow: 1;
      }
  }
  .to-top-btn {
    position: fixed;
    right: 2rem;
    bottom: 3rem;
    z-index: 1000;
    padding: 0;
    width: 3.33rem;
    height: 3.33rem;
    line-height: 1;
    color: #909090;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0,0,0,.05);
    cursor: pointer;
    display: none;
    transition: all 0.2s;
  }
  .to-top-btn.show {
    display: block;
  }
</style>
