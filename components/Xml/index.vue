<template>
  <div class="xml-body" v-loading="loading" element-loading-text="拼命加载中...">
    <div class="btn-block">
      <el-button type="primary" size="medium" @click="handleXml">格式化</el-button>
      <el-button type="info" size="medium" @click="handleXml(true)">压缩</el-button>
    </div>
    <el-slider v-model="slider" :min="450" :max="900" :show-tooltip="false"></el-slider>
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
        slider: 450,
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
    watch: {
      slider (value) {
        const ele = window.document.getElementsByClassName('CodeMirror')[0]
        ele.style.height  = value + "px"
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

  .btn-block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .xml-body /deep/ .el-button {
    display: block;
    margin-bottom: 5px;
    width: 49%;
  }

  .xml-body /deep/ .CodeMirror {
    font-size: 1.1rem;
    margin-top: 10px;
    height: 450px;
    border: 1px solid #e4e7ed;
  }
</style>
