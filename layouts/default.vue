<template>
  <div>
    <bigfool-header />
    <main ref="container" class="content-container">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import BigfoolHeader from '@/components/header'

  export default {
    components: {
      BigfoolHeader
    }
  }
</script>

<style lang="scss" scoped>
.content-container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    top: 5rem;
    &::after {
        display: table;
        content: "";
        clear: both;
    }
  }
</style>
