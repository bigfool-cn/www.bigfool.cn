<template>
    <div>{{ articleId }}</div>
</template>

<script>
  export default {
    name: 'ArticleDetail',
    data() {
      return {
        articleId: 0
      }
    },
    created() {
      this.articleId = this.$route.params.id
    }
  }
</script>

<style scoped>

</style>
