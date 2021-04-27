<template>
  <div class="navbar">
   <el-button @click=toggleSideBar>切换</el-button> navbar
  </div>
</template>
<script>
export default {
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
  }
</style>