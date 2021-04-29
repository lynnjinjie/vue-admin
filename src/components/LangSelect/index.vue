<template>
  <el-dropdown trigger="click" @command="handleSetLanguage">
    <span class="el-dropdown-link">
      语言
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh">中文</el-dropdown-item>
      <el-dropdown-item command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  methods: {
    handleSetLanguage(lang) {
      this.$store.dispatch('app/setLanguage', lang)
    }
  }
}
</script>
<style scoped>

</style>