import request from '@/utils/request'

export function postQuestion(data) {
  return request({
    url: '/questions',
    method: 'post',
    data
  })
}
