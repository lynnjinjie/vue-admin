<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar"></hamburger>
    <breadcrumb></breadcrumb>
  </div>
</template>
<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import { mapGetters } from 'vuex'
export default {
  components: { Hamburger, Breadcrumb },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
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
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  }
  .hamburger-container {
    height: 100%;
    line-height: 46px;
    float: left;
    cursor: pointer;

    &:hover {
      background-color: #f9f9f9;
    }
  }
</style>