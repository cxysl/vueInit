<template>
  <div class="side-bar">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      router
      :default-openeds="openeds"
    >
      <el-submenu :index="menu.id" v-for="(menu, index) in menus" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ menu.name }}</span>
        </template>
        <el-menu-item
          :index="item.path"
          v-for="item in menu.children"
          :key="item.path"
        >
          <!-- <i :class="item.icon"></i> -->
          <span slot="title" v-if="item.name == '关联订单管理'">
            <el-badge
              :value="
                getOrderStatusTotal.waitDealErrorCount +
                  getOrderStatusTotal.waitDealCount
              "
              class="item"
            >
              {{ item.name }}
            </el-badge>
          </span>
          <span slot="title" v-else>{{ item.name }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      openeds: ['1', '2', '3', '4'],
      menus: [
        {
          name: '商品复制',
          icon: 'el-icon-menu',
          id: '1',
          children: [
            {
              name: '选品',
              path: '/copy/copyShops'
            },
            {
              name: '复制记录',
              path: '/copy/copyRecord'
            }
            // {
            //   name: '模板配置',
            //   path: '/copy/copyTemplate'
            // }
          ]
        },
        {
          name: '订单管理',
          icon: 'el-icon-menu',
          id: '2',
          children: [
            // {
            //   name: '抖店订单管理',
            //   path: '/orderManage/douDianOrderManage'
            // },
            {
              name: '配置关联下单',
              path: '/orderManage/configureRelation'
            },
            {
              name: '关联订单管理',
              path: '/orderManage/relationOrderManage'
            }
          ]
        },
        // {
        //   name: '商品池',
        //   icon: 'el-icon-menu',
        //   id: '3',
        //   children: [
        //     {
        //       name: '选择商品',
        //       path: '/itemManage/myItems'
        //     }
        //   ]
        // },
        {
          name: '资金明细',
          icon: 'el-icon-menu',
          id: '4',
          children: [
            {
              name: '资金管理',
              path: '/orderManage/moneyManage'
            }
          ]
        }
      ],
      active: '/copy/copyShops'
    }
  },
  watch: {
    $route() {
      this.getRouter()
    }
  },
  computed: {
    getOrderStatusTotal() {
      return this.$store.getters.getOrderStatusTotal
    }
  },
  methods: {
    getRouter() {
      // let url = this.$route.path
      // let arr = url.split('/')
      this.active = this.$route.path
    }
  }
}
</script>

<style lang="scss">
@import './styles';
</style>
