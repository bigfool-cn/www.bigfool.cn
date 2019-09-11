<template>
    <div class="rsa-body" v-loading="loading" element-loading-text="拼命生成中...">
        <div class="bit-radio">
            <el-radio v-model="keyBit" label="1024">1024位</el-radio>
            <el-radio v-model="keyBit" label="2048">2048位</el-radio>
            <el-radio v-model="keyBit" label="11024">1024位(PKCS8)</el-radio>
            <el-radio v-model="keyBit" label="12048">2048位(PKCS8)</el-radio>
            <el-button type="primary" size="small" @click="handleCreate">生成</el-button>
        </div>
        <div class="private-key">
            <span>私钥:</span>
            <el-input type="textarea" :rows="7" v-model="rsa.privateKey" :autosize="{minRows: 7, maxRows: 18}" resize="none" />
        </div>
        <div class="public-key">
            <span>公钥:</span>
            <el-input type="textarea" :rows="7" v-model="rsa.publicKey" :autosize="{minRows: 7, maxRows: 10}" resize="none" />
        </div>
    </div>
</template>

<script>
  import { getRsa } from '@/api/tools'
  export default {
    name: 'Rsa',
    data() {
      return {
        loading: false,
        rsa: {
          privateKey: '',
          publicKey: ''
        },
        keyBit: '1024'
      }
    },
    methods: {
      handleCreate() {
        this.loading = true
        getRsa(this.keyBit).then(res => {
          this.rsa = {
            privateKey: res.data.privateKey,
            publicKey: res.data.publicKey
          }
        }).finally(res => {
          this.loading = false
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.rsa-body {
    margin: 1.333rem;
}
.bit-radio {
    @media (max-width: 980px) {
        display: flex;
        flex-direction: column;
        label {
            margin: 0.5rem 0;
        }
    }
}
.private-key {
    margin: 1.333rem 0;
    span {
        font-size: 1.2rem
    }
}
.public-key {
    span {
        font-size: 1.2rem
    }
}
</style>
