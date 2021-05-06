<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar"></hamburger>
    <breadcrumb></breadcrumb>
    <div class="right-menu">
      <lang-select></lang-select>
      <el-dropdown trigger="click">
        <span>
          <el-avatar :src="avatar"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item >Home</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display: block;" @click="logout">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import LangSelect from '@/components/LangSelect'
import { mapGetters } from 'vuex'
export default {
  components: { Hamburger, Breadcrumb, LangSelect },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    .hamburger-container {
      height: 100%;
      line-height: 46px;
      float: left;
      cursor: pointer;

      &:hover {
        background-color: #f9f9f9;
      }
    }
    .right-menu {
      height: 50px;
      line-height: 50px;
      float: right;
      cursor: pointer;
    }
  }
</style>