<template>
  <div class="page-header">
    <el-row class="main-header">
      <el-col :span="12">
        <div class="logo">铺货宝</div>
      </el-col>
      <el-col :span="12">
        <ul class="quick-entrys">
          <li>
            <a
              href="https://amos.alicdn.com/getcid.aw?v=2&uid=%E8%B4%BE%E9%B8%BF%E7%BF%85&site=cntaobao&s=1&groupid=0&charset=utf-8"
              target="_blank"
            >
              <i class="el-icon-service"></i>
              联系客服
            </a>
          </li>
          <!-- <li v-if="isLogin">
            <a href="JavaScript:;" @click="openBindShop">
              新增绑定店铺
            </a>
          </li> -->
          <li v-if="isLogin">
            <el-popover placement="bottom-end" width="400" trigger="hover">
              <user-info @open-user-info="isShowDrawer = true"></user-info>
              <div class="user-name-wrap" slot="reference">
                <i class="el-icon-user"></i>
                <span class="shop-name">{{ user.shopName }}</span>
                <i class="el-icon-arrow-down"></i>
              </div>
            </el-popover>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-drawer
      title="用户信息"
      :append-to-body="true"
      :visible.sync="isShowDrawer"
      custom-class="user-info-drawer"
      direction="rtl"
    >
      <el-form label-suffix="：" label-width="160px">
        <el-form-item label="用户头像">
          <el-avatar :src="user.shopPic"></el-avatar>
        </el-form-item>
        <el-form-item label="绑定的手机号">
          {{ user.mobile }}
        </el-form-item>
        <el-form-item label="帐号密码">
          <span>{{ user.password }}</span>
          <el-button type="text" class="text-btn" @click="modifyPassword">
            修改
          </el-button>
        </el-form-item>
        <el-form-item label="绑定的Appkey">
          <span>{{ user.appKey }}</span>
          <el-tooltip
            content="因涉及到敏感信息，查看AppKey和AppSecret需要通过短信验证"
            placement="top"
          >
            <el-button type="text" class="text-btn" @click="getAppInfo">
              查看
            </el-button>
          </el-tooltip>
        </el-form-item>
        <el-form-item label="绑定的AppSecret">
          {{ user.appSecret }}
        </el-form-item>
      </el-form>
    </el-drawer>
    <verify-code-dialog
      :visible.sync="isShowVerifyCodeDialog"
      :type="dialogType"
    ></verify-code-dialog>
  </div>
</template>

<script>
import userInfo from './components/userInfo'
import verifyCodeDialog from './components/verifyCodeDialog'
import { mapState } from 'vuex'
export default {
  name: 'Header',
  components: {
    userInfo,
    verifyCodeDialog
  },
  data() {
    return {
      isShowDrawer: false,
      isShowVerifyCodeDialog: false,
      dialogType: ''
    }
  },
  computed: {
    ...mapState(['user', 'isLogin'])
  },
  methods: {
    openBindShop() {
      this.$store.commit({
        type: 'setVisibleBindShop',
        visible: true
      })
    },
    getAppInfo() {
      this.dialogType = 'appInfo'
      this.isShowVerifyCodeDialog = true
    },
    modifyPassword() {
      this.dialogType = 'password'
      this.isShowVerifyCodeDialog = true
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
