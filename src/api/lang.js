import request from '@/utils/request'
export function getLang(type) {
  return request({
    url: '/vue-admin/lang',
    method: 'get',
    params: { type },
  })
}
