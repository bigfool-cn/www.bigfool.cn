<template>
    <div class="container-body">
        <div ref="entry" class="l-aside">
            <div :class="asideClass" :style="{backgroundImage:'url('+bigfool+')'}" v-on:mouseover="showBigfool" v-on:mouseout="hideBigfool">
            </div>
            <p :class="bigfoolClass">
                每一段青春都有一个柯景腾、一个沈佳宜每一段青春都有一个柯景腾、一个沈佳宜
            </p>
        </div>
        <div class="r-aside">
            <div class="item info">
                <ul class="info-item">
                    <li><img class="avatar" src="~/assets/img/avatar.png"></li>
                    <li>bigfool</li>
                    <li>PHP搬砖师</li>
                    <li><a href="https://github.com/bigfool-cn/" target="_blank" title="gitgub"><bigfool-icon name="github" size="18" /></a></li>
                </ul>
            </div>
            <div class="item phrase">
                <el-input type="textarea" v-model="phrase" rows="6" maxlength="52"   show-word-limit resize="none" placeholder="遇上好句子..." />
                <el-button v-loading="loading" type="primary" size="small" class="phrase-btn" @click="handlePhrase">保存</el-button>
            </div>
            <div class="footer">
                <p>@2019 Design By Bigfool</p>
                <p>粤ICP备17147325号-1</p>
            </div>
        </div>
    </div>
</template>

<script>
  import { Message } from 'element-ui'
  import { postPhrase } from '@/api/phrase'

  export default {
    name: 'index',
    data() {
      return {
        loading: false,
        bigfool: require('~/assets/img/bigfool.jpg'),
        asideClass: 'aside',
        bigfoolClass: 'bigfool',
        phrase: '',
      }
    },
    mounted() {
    },

    methods: {
      showBigfool() {
        this.asideClass = 'aside aside-bigfool-in'
        this.bigfoolClass = 'bigfool bigfool-in'
      },
      hideBigfool() {
        this.asideClass = 'aside aside-bigfool-out'
        this.bigfoolClass = 'bigfool bigfool-out'
      },
      handlePhrase() {
        this.loading = true
        if (!this.phrase.length) {
          Message.error('请输入好句子！')
        } else {
          postPhrase({ phrase: this.phrase }).then(res => {
            this.phrase = ''
            Message.success(res.msg)
          })
        }
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>

    .container-body {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .l-aside {
        width: 75%;
        height: auto;
    }

    .r-aside {
        margin-left: 1.767rem;
        width: 25%;
        height: auto;
    }

    .aside {
        text-align: center;
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 100%;
        height: 45rem;
        &:hover {
            cursor: pointer;
            filter: blur(2px);
        }
    }
    .bigfool {
        pointer-events: none;
        padding: 0 8rem;
        text-align: center;
        position: relative;
        top: -25rem;
        color: #fff;
        font-size: 2rem;
        z-index: -1;
    }
    .item {
        background-color: #fff;
        padding: 1.333rem;
        margin-bottom: 1.767rem;
        min-height: 200px;
    }
    .info {
        background-color: #f5e5cb;
    }
    .info-item {
        text-align: center;
        li {
            padding: 5px 0;
            font-size: 1.333rem;
        }

    }
    .avatar {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        margin: 0 auto;
    }
    .phrase-btn {
        width: 100%;
        margin-top: 5px;
        font-size: 1.2rem;
    }
    .footer {
        text-align: center;
        padding: 0 1.333rem;
    }

    @media (max-width: 980px) {
        .l-aside {
            width: 100%;
        }
        .r-aside {
            display: none;
        }
        .bigfool {
            padding: 0 20px;
        }
    }

    .aside-bigfool-in {
        animation: 2s filter-in 0s;
        -webkit-animation: 2s filter-in 0s;
        -moz-animation: 2s filter-in 0s;
    }

    @keyframes filter-in {
        0% {
            filter: blur(0px);
        }
        25% {
            filter: blur(0.5px);
        }
        50% {
            filter: blur(1px);
        }
        75% {
            filter: blur(1.5px);
        }
        100% {
            filter: blur(3px);
        }
    }

    @-webkit-keyframes filter-in {
        0% {
            filter: blur(0px);
        }
        25% {
            filter: blur(0.5px);
        }
        50% {
            filter: blur(1px);
        }
        75% {
            filter: blur(1.5px);
        }
        100% {
            filter: blur(3px);
        }
    }

    @-moz-keyframes filter-in {
        0% {
            filter: blur(0px);
        }
        25% {
            filter: blur(0.5px);
        }
        50% {
            filter: blur(1px);
        }
        75% {
            filter: blur(1.5px);
        }
        100% {
            filter: blur(3px);
        }
    }

    .aside-bigfool-out {
        animation: 2s filter-out 0s;
        -webkit-animation: 2s filter-out 0s;
        -moz-animation: 2s filter-out 0s;
    }

    @keyframes filter-out {
        0% {
            filter: blur(3px);
        }
        25% {
            filter: blur(2.5px);
        }
        50% {
            filter: blur(1.5px);
        }
        75% {
            filter: blur(0.5px);
        }
        100% {
            filter: blur(0px);
        }
    }

    @-webkit-keyframes filter-out {
        0% {
            filter: blur(3px);
        }
        25% {
            filter: blur(2.5px);
        }
        50% {
            filter: blur(1.5px);
        }
        75% {
            filter: blur(0.5px);
        }
        100% {
            filter: blur(0px);
        }
    }

    @-moz-keyframes filter-out {
        0% {
            filter: blur(3px);
        }
        25% {
            filter: blur(2.5px);
        }
        50% {
            filter: blur(1.5px);
        }
        75% {
            filter: blur(0.5px);
        }
        100% {
            filter: blur(0px);
        }
    }

    .bigfool-in {

        animation: 2s opacity-in 0s;
        -webkit-animation: 2s opacity-in 0s;
        -moz-animation: 2s opacity-in 0s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
    }

    @keyframes opacity-in {
        0% {
            opacity: 0;
            z-index: 999;
        }
        50% {
            opacity: 0.25;
            z-index: 999;
        }
        50% {
            opacity: 0.5;
            z-index: 999;
        }
        50% {
            opacity: 0.75;
            z-index: 999;
        }
        100% {
            opacity: 1;
            z-index: 999;
        }
    }

    @-webkit-keyframes opacity-in {
        0% {
            opacity: 0;
            z-index: 999;
        }
        50% {
            opacity: 0.25;
            z-index: 999;
        }
        50% {
            opacity: 0.5;
            z-index: 999;
        }
        50% {
            opacity: 0.75;
            z-index: 999;
        }
        100% {
            opacity: 1;
            z-index: 999;
        }
    }

    @-moz-keyframes opacity-in {
        0% {
            opacity: 0;
            z-index: 999;
        }
        50% {
            opacity: 0.25;
            z-index: 999;
        }
        50% {
            opacity: 0.5;
            z-index: 999;
        }
        50% {
            opacity: 0.75;
            z-index: 999;
        }
        100% {
            opacity: 1;
            z-index: 999;
        }
    }

    .bigfool-out {
        animation: 2s opacity-out 0s;
        -webkit-animation: 2s opacity-out 0s;
        -moz-animation: 2s opacity-out 0s;
    }

    @keyframes opacity-out {
        0% {
            opacity: 1;
            z-index: 999;
        }
        50% {
            opacity: 0.75;
            z-index: 999;
        }
        50% {
            opacity: 0.5;
            z-index: 999;
        }
        50% {
            opacity: 0.25;
            z-index: 999;
        }
        100% {
            opacity: 0;
            z-index: -1;
        }
    }

    @-webkit-keyframes opacity-out {
        0% {
            opacity: 1;
            z-index: 999;
        }
        50% {
            opacity: 0.75;
            z-index: 999;
        }
        50% {
            opacity: 0.5;
            z-index: 999;
        }
        50% {
            opacity: 0.25;
            z-index: 999;
        }
        100% {
            opacity: 0;
            z-index: -1;
        }
    }

    @-moz-keyframes opacity-out {
        0% {
            opacity: 1;
            z-index: 999;
        }
        50% {
            opacity: 0.75;
            z-index: 999;
        }
        50% {
            opacity: 0.5;
            z-index: 999;
        }
        50% {
            opacity: 0.25;
            z-index: 999;
        }
        100% {
            opacity: 0;
            z-index: -1;
        }
    }
</style>
