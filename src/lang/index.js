import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// import { getLang } from '@/api/lang'
import Cookies from 'js-cookie'

// import enLocale from './en'
import zhLocale from './zh'

const messages = {
  // en: {
  //   ...enLocale,
  // },
  zh: {
    ...zhLocale,
  },
}

// console.log(Cookies.get('lang'))
export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage
  return 'en'
}
const i18n = new VueI18n({
  locale: '',
  messages,
})

export default i18n
