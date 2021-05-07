<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
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
<style lang="scss" scoped>
  .app-main {
    min-height: calc(100vh - 50px);
    width: 100%;
    overflow: hidden;
    padding-top: 50px;
  }
  .hasTagsView {
    .app-main {
      min-height: 100vh;
    }
    .fixed-header+.app-main {
      padding-top: 84px;
    }
  }
</style>