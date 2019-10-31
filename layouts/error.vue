<template>
    <div class="container-body">
        <div class="error">
            <span v-if="error.statusCode == 404">404 - 页面不存在</span>
            <span v-else>500 - 服务器错误</span>
        </div>
    </div>
</template>

<script>
  export default {
    props:['error'],
  }
</script>
<style scoped>
   .error {
       margin: auto;
       font-size: 5.2rem;
   }
</style>
