<template>
  <div class="json-body" v-loading="loading" element-loading-text="拼命加载中...">
    <el-slider v-model="slider" :min="450" :max="900" :show-tooltip="false"></el-slider>
    <vue-json-editor v-model="json" :mode="mode" :modes="modes" @has-error="handleError"/>
  </div>
</template>

<script>
  import {Message} from 'element-ui'
  import {sendWebSocketData} from '@/utils/websocket'
  import vueJsonEditor from 'vue-json-editor'

  export default {
    name: 'Json',
    components: {
      vueJsonEditor
    },
    data() {
      return {
        loading: false,
        slider: 450,
        mode: 'code',
        modes: ['code'],
        json: ''
      }
    },
    watch: {
      slider (value) {
        const ele = window.document.getElementsByClassName('jsoneditor-vue')[0]
        ele.style.height  = value + "px"
      }
    },
    methods: {
      sendWsData() {
        let data = {
          type: 'tools',
          data: 'json格式化'
        }
        sendWebSocketData(data)
      },
      handleError(error) {
        Message.error(error.toString())
      }
    },
    mounted() {
      const formatBtn = window.document.getElementsByClassName('jsoneditor-format')[0]
      formatBtn.setAttribute('title','格式化')
      const compactBtn = window.document.getElementsByClassName('jsoneditor-compact')[0]
      compactBtn.setAttribute('title','压缩')

      const modesBtn = window.document.getElementsByClassName('jsoneditor-modes')[0]
      modesBtn.style.display = 'none'

      const poweredBy = window.document.getElementsByClassName('jsoneditor-poweredBy')[0]
      poweredBy.style.display = 'none'

    }
  }
</script>

<style lang="scss" scoped>

  .json-body {
    margin: 0 1.333rem 1.333rem 1.333rem;
  }

  .json-body /deep/ .jsoneditor-vue {
    height: 450px;
  }
</style>
