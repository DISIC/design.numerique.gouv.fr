// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/dsfr.min.css'
import '~/assets/scss/main.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  faPaperPlane,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faNewspaper,
  faMobileAlt,
  faBalanceScale,
  faClipboardList,
  faAward,
  faGraduationCap,
  faVials,
  faBars,
  faUserAstronaut,
  faStopwatch,
  faStar,
  faFlag,
  faBuilding,
  faMapMarkerAlt,
  faUniversity,
  faUserFriends,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFilePdf,
  faFileWord,
  faFileAlt,
  faFileImage,
  faEdit
} from '@fortawesome/free-regular-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(
  faGithub,
  faTwitter,
  faPaperPlane,
  faFilePdf,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faFileWord,
  faFileAlt,
  faFileImage,
  faEdit,
  faNewspaper,
  faMobileAlt,
  faBalanceScale,
  faClipboardList,
  faAward,
  faGraduationCap,
  faVials,
  faBars,
  faUserAstronaut,
  faStopwatch,
  faStar,
  faFlag,
  faBuilding,
  faMapMarkerAlt,
  faUniversity,
  faUserFriends,
  faDesktop,
  )
  export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global componentÒ    
    Vue.component('Layout', DefaultLayout)
    Vue.component('font-awesome', FontAwesomeIcon)  
    head.script.push({ src: '/assets/js/dsfr.min.js', body: false })
    head.htmlAttrs = { lang: 'fr' }
}
