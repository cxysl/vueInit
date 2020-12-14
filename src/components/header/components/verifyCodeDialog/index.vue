<template>
  <el-dialog
    :title="title"
    :visible.sync="isShow"
    @open="onOpen"
    @close="onClose"
    append-to-body
    custom-class="verify-code-dialog"
  >
    <verify-code :is-use-current-mobile="true" ref="verfifyCode">
      <el-form-item>
        <el-input
          v-model="password"
          placeholder="请输入新密码"
          v-if="type === 'password'"
        ></el-input>
      </el-form-item>
    </verify-code>
    <span slot="footer">
      <el-button @click="isShow = false">取 消</el-button>
      <el-button type="primary" :loading="loading" @click="confirm">
        确 定
      </el-button>
    </span>
  </el-dialog>
</template>

<script>
import verifyCode from 'components/verifyCode'
export default {
  name: 'verifyCodeDialog',
  components: {
    verifyCode
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'password'
    }
  },
  data() {
    return {
      isShow: false,
      password: '',
      loading: false,
      title: ''
    }
  },
  methods: {
    onOpen() {
      this.password = ''
      this.loading = false
      this.title =
        this.type === 'password' ? '修改密码' : '查看AppKey和AppSecret'
    },
    onClose() {
      this.$emit('update:visible', false)
    },
    confirm() {
      this.$refs.verfifyCode.validate().then(({ mobile, verifyCode }) => {
        if (this.type === 'password') {
          if (!this.password) {
            return this.$message.warning('密码不能为空！')
          }
          this.setNewPassword({ mobile, verifyCode })
        } else {
          this.getAppInfo({ mobile, verifyCode })
        }
      })
    },
    setNewPassword({ mobile, verifyCode }) {
      this.loading = true
      let data = {
        mobile,
        verifyCode,
        password: this.password
      }
      axios
        .post('/client/customer/setPassword.post', data)
        .then(() => {
          this.loading = false
          this.$message.success('密码修改成功！')
          this.isShow = false
        })
        .catch(err => {
          this.loading = false
          throw err
        })
    },
    getAppInfo({ verifyCode }) {
      this.loading = true
      let params = {
        verifyCode
      }
      axios
        .get('/client/customer/getSelfUseInfo.get', { params })
        .then(res => {
          this.loading = false
          let { appKey, appSecret } = res && res.selfUseInfo
          this.$store.commit({
            type: 'setAppInfo',
            appKey,
            appSecret
          })
          this.isShow = false
        })
        .catch(err => {
          this.loading = false
          throw err
        })
    }
  },
  watch: {
    visible(val) {
      this.isShow = val
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
