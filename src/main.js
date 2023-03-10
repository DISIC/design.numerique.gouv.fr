// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import ExerciseLayout from '~/layouts/Exercise.vue'

import '~/assets/scss/styles.scss'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin
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
  faUniversalAccess,
  faQuestion,
  faGavel,
  faListUl,
  faRoute,
  faVial,
  faCommentDots,
  faFile,
  faSearch,
  faListOl,
  faWrench,
  faCheck,
  faTasks,
  faUserGraduate,
  faSyncAlt,
  faInfoCircle,
  faBullhorn,
  faEuroSign,
  faUserPlus,
  faComments,
  faCode,
  faPencilRuler,
  faEllipsisH,
  faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'
import {
  faFilePdf,
  faFileWord,
  faFileAlt,
  faFileImage,
  faEdit,
  faCalendarAlt,
  faCalendarCheck,
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
  faInstagram,
  faYoutube,
  faLinkedin,
  faUniversalAccess,
  faQuestion,
  faGavel,
  faListUl,
  faRoute,
  faVial,
  faCommentDots,
  faFile,
  faSearch,
  faListOl,
  faWrench,
  faCheck,
  faTasks,
  faUserGraduate,
  faSyncAlt,
  faCalendarAlt,
  faCalendarCheck,
  faInfoCircle,
  faBullhorn,
  faEuroSign,
  faUserPlus,
  faComments,
  faCode,
  faPencilRuler,
  faEllipsisH,
  faProjectDiagram
  )
  export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.component('Exercise', ExerciseLayout)
    head.link.push({
      rel: 'stylesheet',
      href: '/assets/css/utility.min.css'
    },{
      rel: 'stylesheet',
      href: '/assets/css/dsfr.min.css'
    })
    Vue.component('font-awesome', FontAwesomeIcon)
    head.htmlAttrs = { lang: 'fr', 'data-fr-scheme': 'system' }

    // Don't scroll to top when dynamically changing
    // query params on PiDila checklist
    router.options.scrollBehavior = (to, from, savedPosition) => {
      const PIDILA_PATH = '/outils/checklist-pidila/'

      if (to.path === PIDILA_PATH && from.path === PIDILA_PATH) {
        return {}
      }
    }
  }
