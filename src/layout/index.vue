<template>
<div class="app-wrapper"> 
  <Sidebar class="sidebar-container" />
  <div class="main-container">
    <div class="fixed-header">
      <Navbar></Navbar>
    </div>
    <AppMain></AppMain>
  </div>
</div>
</template>
<script>
import { Sidebar, Navbar, AppMain } from './components'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .app-wrapper {
    width: 100%;
    height: 100%;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - #{$sidebarWidth});
  }
</style>