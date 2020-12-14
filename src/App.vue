<template>
  <div id="app">
    <page-header></page-header>
    <router-view name="login"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from './components/header'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
@import '/assets/scss/reset';
</style>
