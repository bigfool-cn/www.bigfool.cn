<template>
    <div v-if="!isPhone" class="share-main">
        <el-popover
            placement="left"
            trigger="hover"
            @hide="handlePopver"
        >
            <ul class="share">
                <li>
                    <a :href="qqShareLink" target="_blank" title="QQ">
                        <img src="~/assets/img/qq.png" >
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" title="微信" @click="weChat">
                        <img src="~/assets/img/wechat.png" >
                    </a>
                </li>
                <li v-if="false">
                    <a href="javascript:void(0);" title="新浪微博">
                        <img src="~/assets/img/weibo.png" >
                    </a>
                </li>
            </ul>
            <button class="share-btn" slot="reference" title="分享">
                <bigfool-icon name="share-alt" size="18" color="#007fff"/>
            </button>
        </el-popover>
        <div id="qrcode" :class="qrClass"></div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'share',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    head:{
      script:
        [
          {
            src: 'https://www.bigfool.cn/qrcode.min.js'
          }
        ]
    },
    data() {
      return {
        qrClass: 'qrcode',
        qqShareLink: 'https://connect.qq.com/widget/shareqq/index.html',
      }
    },
    computed: {
      ...mapState({
        isPhone() {
          return this.$store.state.settings.isPhone
        }
      })
    },
    mounted() {
      let url = document.URL
      let title = this.title ? this.title : document.title
      let qqParams = `?url=${url}&sharesource=qzone&title=${title}&pics=&summary=Bigfool-大笨蛋程序员&desc=`
      this.qqShareLink = this.qqShareLink + qqParams
    },
    methods: {
      qrcode (url) {
        let qrcode = new QRCode('qrcode', {
          width: 150,
          height: 132,   // 高度
          text:  url,   // 二维码内容
          colorDark : "#0077ff",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
        })
      },
      weChat() {
        let qrTitle = document.getElementById('qrcode').title
        let url = document.URL
        if (!qrTitle) {
          this.qrcode(url);
        }
        this.qrClass = 'qrcode'
      },
      handlePopver() {
        this.qrClass = 'qrcode hide'
      }
    }
  }
</script>

<style lang="scss" scoped>
    .share {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
            margin: 10px 0;
            width: 35px;
            height: 35px;
        }
    }
    .share-btn {
        position: fixed;
        right: 2rem;
        bottom: 7rem;
        z-index: 1000;
        padding: 0;
        width: 3.33rem;
        height: 3.33rem;
        line-height: 1;
        color: #909090;
        background-color: #fff;
        border: 1px solid #f1f1f1;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0,0,0,.05);
        outline:none;
        cursor: pointer;
        display: block;
        transition: all 0.2s;
    }
    .qrcode{
        background-color: #fff;
        position: fixed;
        right: 230px;
        bottom: 38px;
        z-index: 2000;
    }
    .qrcode.hide{
       display: none;
    }
</style>
