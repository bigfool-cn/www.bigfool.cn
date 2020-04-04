import XmlComponent from './index.vue'

const xml = {
  install: function (Vue) {
    Vue.component('xml', XmlComponent)
  }
}
export default xml
