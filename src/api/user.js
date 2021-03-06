import request from '@/utils/request.js'

export function login(data) {
  return request({
    url: '/vue-admin/user/login',
    method: 'post',
    data,
  })
}

export function logout(data) {
  return request({
    url: '/vue-admin/user/logout',
    method: 'post',
    data,
  })
}
export function getInfo(token) {
  return request({
    url: '/vue-admin/user/info',
    method: 'get',
    params: { token },
  })
}
