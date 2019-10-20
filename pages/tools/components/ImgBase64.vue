<template>
    <div class="imgbase64-body" v-loading="loading" element-loading-text="拼命加载中...">
        <el-upload ref="upload"
                   drag
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :file-list="fileList"
                   :auto-upload="false"
                   :on-change="getFile"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip" style="color: #f56c6c">只能上传jpg/jpeg/png/gif/svg/bmp文件，且不超过10M</div>
        </el-upload>
        <div class="base64">
            <span style="font-size: 1.1rem">Base64:</span>
            <el-input type="textarea" :rows="8" v-model="base64" :autosize="{minRows: 8, maxRows: 15}" resize="none" />
        </div>
    </div>
</template>

<script>
  import { Message } from 'element-ui'
  import { sendWebSocketData } from '@/utils/websocket'

  export default {
    name: 'ImgBase64',
    data() {
      return {
        loading:false,
        fileList:[],
        base64:''
      }
    },
    methods: {
      sendWsData() {
        let data = {
          type: 'tools',
          data: '图片转Base64'
        }
        sendWebSocketData(data)
      },
      getFile(file, fileList) {
        this.sendWsData()
        this.fileList = [{
          name: file.name,
          url: ''
        }]
        const suffix=file.name.substring(file.name.lastIndexOf('.')+1)
        const suffixs = ['jpg','jpeg','png','gif','svg','bmp']
        if (suffixs.indexOf(suffix) === -1) {
          this.$refs['upload'].clearFiles();
          Message.error('上传图片类型不是'+suffixs.join(','))
          return false
        }
        if (file.size > 1024*1024*10) {
          this.$refs['upload'].clearFiles();
          Message.error('文件大小超过10M')
          return false
        }
        this.getBase64(file.raw).then(res => {
          this.base64 = res
        }).catch(res => {
          this.$refs['upload'].clearFiles();
          Message.error('转换失败，请稍后重试!')
        });
        return true
      },
      getBase64(file) {
        return new Promise(function(resolve, reject) {
          const reader = new FileReader()
          let imgResult = ""
          reader.readAsDataURL(file)
          reader.onload = function() {
            imgResult = reader.result
          }
          reader.onerror = function(error) {
            reject(error)
          }
          reader.onloadend = function() {
            resolve(imgResult)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.imgbase64-body {
    margin: 1.333rem;
}
.base64 {
    margin: 1.333rem 0;
}
</style>
<style>
    .el-upload,
    .el-upload-dragger {
        width: 100%;
    }
</style>
