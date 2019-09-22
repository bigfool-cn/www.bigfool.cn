import request from '@/utils/request'

export function postPhrase(data) {
  return request({
    url: '/phrases',
    method: 'post',
    data
  })
}
