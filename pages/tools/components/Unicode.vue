<template>
    <div class="base-body" v-loading="loading" element-loading-text="拼命加载中...">
        <el-button type="primary" size="medium" @click="handleEncode">Unicode 转换 中文</el-button>
        <el-button type="info" size="medium" @click="handleDecode">中文 转换 Unicode</el-button>
        <div class="content">
            <span>内容:</span>
            <el-input type="textarea" :rows="autosize.maxRows" v-model="content" :autosize="autosize" />
        </div>
        <div class="result">
            <span>结果:</span>
            <el-input type="textarea" :rows="autosize.maxRows" v-model="result" :autosize="autosize" />
        </div>
    </div>
</template>

<script>
  import { Message } from 'element-ui'
  import { sendWebSocketData } from '@/utils/websocket'
  export default {
    name: 'Unicode',
    data() {
      return {
        autosize:{minRows: 10, maxRows: 20},
        loading: false,
        content: '',
        result: ''
      }
    },
    methods: {
      sendWsData() {
        let data = {
          type: 'tools',
          data: 'Unicode/中文转换'
        }
        sendWebSocketData(data)
      },
      handleEncode() {
        this.sendWsData()
        this.loading = true
        if (this.content.trim()) {
          try {
            this.result = eval("'" + this.content + "'");
          } catch (e) {
            Message.error('转换失败，请检查内容是否合法!')
          }
        }
        this.loading = false
      },
      handleDecode() {
        this.sendWsData()
        this.loading = true
        if (this.content.trim()) {
          try {
            this.result = escape(this.content).replace(/\%u/g,'\\u');
          } catch (e) {
            Message.error('转换失败，请检查内容是否合法!')
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
