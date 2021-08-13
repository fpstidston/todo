import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faCircle as freeFasFaCircle,
  faCheckCircle as freeFasFaCheckCircle,
  faPlusCircle as freeFasFaPlusCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
  freeFasFaCircle,
  freeFasFaCheckCircle,
  freeFasFaPlusCircle
)

config.autoAddCss = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component('FontAwesomeLayers', FontAwesomeLayers)
Vue.component('FontAwesomeLayersText', FontAwesomeLayersText)
