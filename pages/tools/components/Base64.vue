<template>
    <div class="base-body" v-loading="loading" element-loading-text="拼命加载中...">
        <el-button type="primary" size="medium" @click="handleEncode">编码</el-button>
        <el-button type="info" size="medium" @click="handleDecode">解码</el-button>
        <div class="content">
            <span>内容:</span>
            <el-input type="textarea" :rows="10" v-model="content" :autosize="{minRows: 8, maxRows: 15}" />
        </div>
        <div class="result">
            <span>结果:</span>
            <el-input type="textarea" :rows="10" v-model="result" :autosize="{minRows: 8, maxRows: 15}" />
        </div>
    </div>
</template>

<script>
  import { Message } from 'element-ui'
  import { sendWebSocketData } from '@/utils/websocket'
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
      sendWsData() {
        let data = {
          type: 'tools',
          data: 'Base64解/编码'
        }
        sendWebSocketData(data)
      },
      handleEncode() {
        this.sendWsData()
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
        this.sendWsData()
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

    .base-body /deep/ .el-button {
        margin-left: 0px;
        display: block;
        margin-bottom: 5px;
        width: 100%;
    }

    .content,
    .result {
        margin-bottom: 1.333rem;
        span {
            font-size: 1.2rem;
        }
    }
</style>
