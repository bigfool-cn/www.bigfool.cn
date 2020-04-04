import JsonComponent from './index.vue'

const json = {
  install: function (Vue) {
    Vue.component('json', JsonComponent)
  }
}
export default json
