import request from '@/utils/request'


export function getHotArticles() {
  return request({
    url: '/articles/hot',
    method: 'get',
  })
}

export function getArticles(params) {
  return request({
    url: '/articles',
    method: 'get',
    params
  })
}

export function getArticle(articleId) {
  return request({
    url: '/articles/'+ articleId,
    method: 'get',
  })
}
