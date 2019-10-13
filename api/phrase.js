import request from '@/utils/request'

export function postPhrase(data) {
  return request({
    url: '/phrases',
    method: 'post',
    data
  })
}

export function getPhrases(page) {
  return request({
    url: '/phrases/'+ page,
    method: 'get'
  })
}


