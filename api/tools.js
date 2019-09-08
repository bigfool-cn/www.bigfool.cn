import request from '@/utils/request'

export function getRsa(key) {
  return request({
    url: '/tools/rsa/'+ key,
    method: 'get',
  })
}
