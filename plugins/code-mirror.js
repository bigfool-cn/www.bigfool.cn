import Vue from 'vue'
import VueCodemirror from 'vue-codemirror'

// language
import 'codemirror/mode/vue/vue.js'

// active-line.js
import 'codemirror/addon/selection/active-line.js'

import 'codemirror/mode/xml/xml.js'

// autoCloseTags
import'codemirror/addon/edit/closetag.js'

Vue.use(VueCodemirror)
