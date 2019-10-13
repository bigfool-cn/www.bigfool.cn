import request from '@/utils/request'

export function getLinks() {
  return request({
    url: '/links',
    method: 'get'
  })
}


