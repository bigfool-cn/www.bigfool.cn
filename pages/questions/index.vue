<template>
    <div class="container-body questions">
        <div class="qs" style="width: 100%">
            <el-input type="textarea" v-model="question" rows="15" maxlength="500" show-word-limit resize="none" placeholder="说点什么..." />
            <el-button v-loading="loading" type="primary" size="small" @click="handleSubmit">保 存</el-button>
        </div>
        <bigfool-share />
    </div>
</template>

<script>
  import { Message } from 'element-ui'
  import { postQuestion} from '@/api/question'

  export default {
    name: 'Questions',
    head () {
      return {
        title: 'Bigfool - 友情链接',
      }
    },
    data() {
        return {
          loading: false,
          question: ''
        }
    },
    methods: {
      handleSubmit() {
        this.loading = true
        if (!this.question.length) {
          Message.error('请输入反馈内容！')
        } else {
          postQuestion({ question: this.question }).then(res => {
            this.question = ''
            Message.success(res.msg)
          })
        }
        this.loading = false
      }
    }
  }
</script>
<style lang="scss" scoped>
    .qs {
       /deep/ .el-textarea__inner {
            background-color: #fff;
            border: 1px solid #DCDFE6;
            &:hover{
                border: 1px solid #007fff;
            }
            &:focus{
                border: 1px solid #007fff;
            }
        }
        /deep/ .el-textarea .el-input__count {
            background-color: #fff;
        }
    }

    .questions {
        padding: 1.767rem;
        background-color: #fff;
    }
    button {
        margin-top: 20px;
        width: 100%;
        font-size: 1.333rem;
    }
</style>
