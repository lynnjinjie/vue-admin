// 路由权限控制
import router from './router'
// import store from './store'
import { getToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next({ path: `/login?redirect=${to.path}` })
  }
})
