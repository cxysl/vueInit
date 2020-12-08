<template>
  <div id="app">
    <router-view name="login"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '/assets/scss/reset';
</style>
