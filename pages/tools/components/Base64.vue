<template>
    <div class="base-body" v-loading="loading" element-loading-text="拼命加载中...">
        <div class="content">
            <span>内容:</span>
            <el-input type="textarea" :rows="7" v-model="content" :autosize="{minRows: 7, maxRows: 10}" resize="none" />
        </div>
        <div class="result">
            <span>结果:</span>
            <el-input type="textarea" :rows="7" v-model="result" :autosize="{minRows: 7, maxRows: 10}" resize="none" />
        </div>
        <el-button type="primary" size="small" @click="handleEncode">编码</el-button>
        <el-button type="primary" size="small" @click="handleDecode">解码</el-button>
    </div>
</template>

<script>
  import { Message } from 'element-ui'
  export default {
    name: 'Base64',
    data() {
      return {
        loading: false,
        content: 'this is a example',
        result: ''
      }
    },
    methods: {
      handleEncode() {
        this.loading = true
        if (this.content.trim()) {
          try {
            this.result = window.btoa(this.content)
          } catch (e) {
            Message.error('解码失败，请稍后重试!')
          }
        }
        this.loading = false
      },
      handleDecode() {
        this.loading = true
        if (this.content.trim()) {
          try {
            this.result = window.atob(this.content)
          } catch (e) {
            Message.error('解码失败，请检查内容是否是base64格式')
          }
        }
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
    .base-body {
        margin: 1.333rem;
    }
    .content,
    .result {
        margin-bottom: 1.333rem;
        span {
            font-size: 1.2rem;
        }
    }
</style>
