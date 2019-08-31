import request from '@/utils/request'

export function getHotArticles() {
  return request({
    url: '/articles/hot',
    method: 'get',
  })
}
