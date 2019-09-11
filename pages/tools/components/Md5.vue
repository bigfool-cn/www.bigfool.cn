<template>
    <div class="md5-body" v-loading="loading" element-loading-text="拼命加载中...">
        <el-input type="text" v-model="str" placeholder="需要MD5哈希的内容">
            <template slot="prepend">内容</template>
        </el-input>
        <div class="md5-inpbtn">
            <el-input type="text" v-model="sign" style="margin-right: 15px" placeholder="需要加盐的内容">
                <template slot="prepend">加盐</template>
            </el-input>
            <el-radio v-model="signSite" label="1">加在头部</el-radio>
            <el-radio v-model="signSite" label="2">加在尾部</el-radio>
            <el-button type="primary" @click="handleCreate">生成</el-button>
        </div>
        <div class="result-text">转换结果:</div>
        <ul>
            <li>
                <el-input type="text" v-model="md5.low_16" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">16位小写</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="md5.up_16" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">16位大写</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="md5.low_32" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">32位小写</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="md5.up_32" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">32位大写</template>
                </el-input>
            </li>
        </ul>
    </div>
</template>

<script>
  import MD5 from 'js-md5'
  export default {
    name: 'Md5',
    data() {
      return {
        loading: false,
        str: '',
        sign: 'www.bigfool.cn',
        signSite: '1',
        md5 : {
          low_16: '',
          up_16: '',
          low_32: '',
          up_32: ''
        }
      }
    },
    methods: {
      handleCreate() {
        if (this.str.length) {
          this.loading = true
          let md5Str = MD5(this.str)
          if (this.sign) {
            if (this.signSite === '1') {
              md5Str = MD5(this.sign + this.str)
            } else {
              md5Str = MD5(this.str + this.sign)
            }
          }
          this.md5 = {
            low_16: md5Str.substring(8,24),
            up_16: md5Str.substring(8,24).toLocaleUpperCase(),
            low_32: md5Str,
            up_32: md5Str.toLocaleUpperCase(),
          }
        }
        this.loading = false
      }
    }
  }
</script>

<style lang="scss" scoped>
    .md5-body {
        margin: 1.333rem;
    }
    .md5-inpbtn {
        margin-top: 1rem;
        @media (max-width: 980px) {
            input,
            button {
                margin-top: 1rem;
            }
        }
        @media (min-width: 980px) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
    .result-text {
        margin: 2rem 0 0.5rem 0;
        font-size: 1.2rem;
    }
    ul{
        list-style: none;
        li {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }
    }
</style>
