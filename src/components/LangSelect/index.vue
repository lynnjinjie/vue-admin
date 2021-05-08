<template>
  <el-dropdown trigger="click" class="international" @command="getLang">
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language === 'zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { getLang } from '@/api/lang'
export default {
  computed: {
    language() {
      return this.$store.getters.language
    },
    loadedLanguages() {
      return this.$store.state.app.loadedLanguages
    }
  },
  methods: {
    getLang(lang) {
      if(this.loadedLanguages.includes(lang)) {
        this.handleSetLanguage(lang)
      } else {
        getLang(lang).then(res => {
          this.$i18n.setLocaleMessage(lang, res.message)
          this.handleSetLanguage(lang)
        })
      }
    },
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
    }
  }
}
</script>
<style scoped>

</style>