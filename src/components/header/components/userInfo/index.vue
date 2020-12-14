<template>
  <div class="header-user-info">
    <div class="user-info-wrap clearfix">
      <div class="user-logo">
        <el-image
          style="width: 100px; height: 100px"
          :src="user.shopPic"
          fit="contain"
        ></el-image>
      </div>
      <div class="user-base-info">
        <div class="info-bar">
          <el-button type="text" @click="$emit('open-user-info')">
            {{ user.shopName }}
          </el-button>
        </div>
        <div class="info-bar">
          <span class="deadline">到期时间：{{ user.deadline }}</span>
          <el-button class="fr-btn" type="primary" size="mini">续费</el-button>
        </div>
        <div class="info-bar">
          <span class="deadline">货款余额：{{ user.totalPoints }}</span>
          <el-button class="fr-btn" type="primary" size="mini">充值</el-button>
        </div>
      </div>
    </div>
    <el-button
      type="text"
      class="exit-btn"
      @click="logout"
      :loading="logouting"
    >
      退出登录
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      logouting: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      this.logouting = true
      axios
        .get('/client/customer/logout.get')
        .then(() => {
          this.logouting = false
          this.$router.push('/login')
          this.$message.success('退出登录成功！')
        })
        .catch(err => {
          this.logouting = false
          throw err
        })
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
