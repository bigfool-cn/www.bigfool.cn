import Vue from 'vue'
// import Header from '@/components/header'
import Icon from '@/components/Icon'
import Totop from '@/components/ToTop'
import Share from '@/components/Share'


// Vue.component(Header.name, Header)
Vue.component('BigfoolIcon', Icon)
Vue.component('BigfoolTotop', Totop)
Vue.component('BigfoolShare', Share)

Vue.filter('formatTime',  (value) => {
  value = value.replace(/-/g,'/')
  const timeDistance = (new Date().getTime() - new Date(value).getTime()) / 1000
  if ((timeDistance / 60) < 1) {
    return `1分钟前`
  } else if ((timeDistance / 60) < 60) {
    return `${Math.floor((timeDistance / 60))}分钟前`
  } else if ((timeDistance / 60 / 60) < 24) {
    return `${Math.floor((timeDistance / 60 / 60))}小时前`
  } else if ((timeDistance / 60 / 60 / 24) < 30) {
    return `${Math.floor((timeDistance / 60 / 60 / 24))}天前`
  } else if ((timeDistance / 60 / 60 / 24 / 30) < 12) {
    return `${Math.floor((timeDistance / 60 / 60 / 24 / 30))}月前`
  } else {
    return `${Math.floor((timeDistance / 60 / 60 / 24 / 30 / 12))}年前`
  }
})

