import request from '@/utils/request'

export function postVisitor(data) {
  return request({
    url: '/visitors',
    method: 'post',
    data
  })
}
