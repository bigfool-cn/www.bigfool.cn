<template>
  <div class="xml-body" v-loading="loading" element-loading-text="拼命加载中...">
    <el-button type="primary" size="medium" @click="handleXml">格式化</el-button>
    <el-button type="info" size="medium" @click="handleXml(true)">压缩</el-button>
    <client-only>
      <codemirror v-model="code" :options="options" />
    </client-only>
  </div>
</template>

<script>
  import {Message} from 'element-ui'
  import {sendWebSocketData} from '@/utils/websocket'

  export default {
    name: 'Xml',
    data() {
      return {
        loading: false,
        code: '',
        options: {
          lineNumbers: true,
          matchBrackets: true,
          mode: "application/xml",
          indentUnit: 4,
          indentWithTabs: true,
          autoCloseTags: true,
          moveOnDrag: false
        },
      }
    },
    methods: {
      sendWsData() {
        let data = {
          type: 'tools',
          data: 'xml格式化'
        }
        sendWebSocketData(data)
      },
      handleXml(min) {
        this.sendWsData()
        this.loading = true
        try {
          const formattor = require("formattor");
          let options = {methods: 'xml'}
          if (min) {
            options = {methods: 'xmlmin'}
          }
          this.code = formattor(this.code,options)
        } catch (e) {
          Message.error('处理失败，请检查内容格式!')
        }
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>

  .xml-body {
    margin: 1.333rem;
  }

  .xml-body /deep/ .el-button {
    margin-left: 0px;
    display: block;
    margin-bottom: 5px;
    width: 100%;
  }

  .xml-body /deep/ .CodeMirror {
    font-size: 1.1rem;
    margin-top: 10px;
    height: 400px;
    border: 1px solid #f1f1f1;
  }
</style>
