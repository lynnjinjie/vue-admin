<template>
<div :class="classObj" class="app-wrapper"> 
  <Sidebar class="sidebar-container" />
  <div class="main-container hasTagsView">
    <div class="fixed-header">
      <navbar></navbar>
      <tags-view></tags-view>
    </div>
    <app-main></app-main>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Sidebar, Navbar, AppMain, TagsView } from './components'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    AppMain,
    TagsView
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      }
    }
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
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
  .hideSidebar .fixed-header {
    width: calc(100% - 54px);
  }
</style>