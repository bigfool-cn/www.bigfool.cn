<template>
    <button class="to-top-btn" title="回到顶部" @click="goTop">
        <bigfool-icon name="caret-up" size="18" color="#007fff"/>
    </button>
</template>

<script>
  export default {
    name: 'ToTop',
    methods: {
      goTop() {
        document.documentElement.scrollTop = 0
      }
    }
  }
</script>

<style lang="scss">

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
        outline:none;
        cursor: pointer;
        display: none;
        transition: all 0.2s;
    }

    .to-top-btn.show {
        display: block;
    }
</style>
