<template>
    <div class="hex-body" v-loading="loading" element-loading-text="拼命加载中...">
        <el-radio-group v-model="hexType">
            <el-radio :label="2">二进制</el-radio>
            <el-radio :label="8">八进制</el-radio>
            <el-radio :label="10">十进制</el-radio>
            <el-radio :label="16">16进制</el-radio>
            <el-radio :label="32">32进制</el-radio>
            <el-radio :label="62">62进制</el-radio>
            <el-radio :label="64">64进制</el-radio>
        </el-radio-group>
        <div class="hex-inpbtn">
            <el-input type="text" v-model="hex" style="margin-right: 15px">
                <template slot="prepend">整数</template>
            </el-input>
            <el-button type="primary" @click="handleCreate">转换</el-button>
        </div>
        <div class="result-text">转换结果:</div>
        <ul>
            <li>
                <el-input type="text" v-model="hexResult.hex_2" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">二进制</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="hexResult.hex_8" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">八进制</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="hexResult.hex_10" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">十进制</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="hexResult.hex_16" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">16进制</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="hexResult.hex_32" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">32进制</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="hexResult.hex_62" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">62进制</template>
                </el-input>
            </li>
            <li>
                <el-input type="text" v-model="hexResult.hex_64" readonly="readonly" style="margin-right: 15px">
                    <template slot="prepend">64进制</template>
                </el-input>
            </li>
        </ul>
        <div class="memo">
            <p>安全整数范围为：-2^53~2^53</p>
            <p>62进制基准数：0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ</p>
            <p>64进制基准数：0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ+/</p>
        </div>
    </div>
</template>

<script>
  import ToolsHex from '@/utils/tools-hex'
  import { Message } from 'element-ui'
  import { sendWebSocketData } from '@/utils/websocket'

  export default {
    name: 'Hex',
    data() {
      return {
        loading: false,
        hexType: 10,
        hex: '',
        hexResult:{
          hex_2: '',
          hex_8: '',
          hex_10: '',
          hex_16: '',
          hex_322: '',
          hex_62: '',
          hex_64: '',
        }
      }
    },
    methods: {
      sendWsData() {
        let data = {
          type: 'tools',
          data: '进制转换'
        }
        sendWebSocketData(data)
      },
      handleCreate() {
        this.sendWsData()
        try {
          if (typeof val !== 'number') {
            return Message.error('请输入有效整数')
          }
          this.hexResult = ToolsHex(this.hex,this.hexType)
        } catch (e) {
          Message.error('转换失败，请检查输入内容是否正确!')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .hex-body {
        margin: 1.333rem;
    }
    .hex-inpbtn {
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
    .memo {
        padding-top: 1rem;
        font-size: 1rem;
        color: #909399;
    }
</style>
