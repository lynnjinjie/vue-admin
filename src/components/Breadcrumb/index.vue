<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="level in levelList" :key="level.path">
      <a @click="handleClick(level)">{{ level.meta.title }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      const matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      this.levelList = matched.filter(item => item.meta && item.meta.title)
    },
    handleClick(level) {
      const { redirect, path } = level
      if (redirect) {
        this.$router.psu(redirect)
        return
      }
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.app-breadcrumb {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  padding-left: 8px;
}
</style>