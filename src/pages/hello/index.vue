<template>
  <div class="welcome">
    欢迎使用baobeituan-cli
    <ul>
      <li>
        改项目使用的是post-css的技术做适配
      </li>
      <li>
        在开发的时候用px做单位，以750宽度的设计稿为原型来开发，post-css会把px单位转化成vw单位，以达到适配效果
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style lang="scss">
@import './styles';
</style>
