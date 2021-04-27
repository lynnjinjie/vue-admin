<template>
  <section class="app-main">
    <router-view :key="key"></router-view>
  </section>
</template>
<script>
export default {
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style scoped>
  .app-main {
    min-height: calc(100vh - 50px);
    width: 100%;
    overflow: hidden;
    padding-top: 50px;
  }
</style>