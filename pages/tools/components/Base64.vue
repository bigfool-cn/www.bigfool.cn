<template>
  <div class="base-body" v-loading="loading" element-loading-text="拼命加载中...">
    <div class="btn-block">
      <el-button type="primary" size="medium" @click="handleEncode">编码</el-button>
      <el-button type="info" size="medium" @click="handleDecode">解码</el-button>
    </div>
    <div class="content">
      <span>内容:</span>
      <el-input type="textarea" :rows="autosize.maxRows" v-model="content" :autosize="autosize"/>
    </div>
    <div class="result">
      <span>结果:</span>
      <el-input type="textarea" :rows="autosize.maxRows" v-model="result" :autosize="autosize"/>
    </div>
  </div>
</template>

<script>
  import {Message} from 'element-ui'
  import {sendWebSocketData} from '@/utils/websocket'

  export default {
    name: 'Base64',
    data() {
      return {
        autosize: {minRows: 10, maxRows: 20},
        loading: false,
        content: '',
        result: ''
      }
    },
    methods: {
      sendWsData() {
        let data = {
          type: 'tools',
          data: 'Base64解码/编码'
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
            Message.error('编码码失败，请检查内容是否合法!')
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
            Message.error('解码失败，请检查内容是否合法')
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

  .btn-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }


  .base-body /deep/ .el-button {
    display: block;
    margin-bottom: 5px;
    width: 49%;
  }

  .content,
  .result {
    margin-bottom: 1.333rem;

    span {
      font-size: 1.2rem;
    }
  }
</style>
