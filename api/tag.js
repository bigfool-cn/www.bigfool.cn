import request from '@/utils/request'

export function getArticlesTags() {
  return request({
    url: '/articles/tags',
    method: 'get',
  })
}
