(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{Iv68:function(e,t,r){"use strict";r("kACy")},ZpZ5:function(e,t,r){},dGZS:function(e,t,r){"use strict";r("ZpZ5")},kACy:function(e,t,r){},kCo3:function(e,t,r){"use strict";r.r(t);r("FNk8");var i={name:"Toolbar",data:()=>({showClipboardAlert:!1}),methods:{copyLink(){const e=window.location.href;navigator.clipboard.writeText(e).then(()=>{this.showClipboardAlert=!0}).catch(e=>{console.error(`Error copying link to the clipboard: ${e}.`)})},printList(){window.print()},discloseAll(){this.$emit("disclose-all")},concealAll(){this.$emit("conceal-all")},hideClipboardAlert(){this.showClipboardAlert=!1}}},s=(r("yS0k"),r("KHd+")),l=Object(s.a)(i,(function(){var e=this._self._c;return e("div",[e("ul",{staticClass:"fr-btns-group fr-btns-group--inline btns-group--justify-end"},[e("li",[e("button",{ref:"printButton",staticClass:"fr-btn fr-btn--tertiary-no-outline fr-icon-printer-fill",attrs:{type:"button",title:"Imprimer la liste"},on:{click:this.printList}},[this._v("\n        Imprimer la liste\n      ")])]),e("li",[e("button",{staticClass:"fr-btn fr-btn--tertiary-no-outline fr-icon-link",attrs:{type:"button",title:"Copier la liste dans le presse-papier"},on:{click:this.copyLink,blur:this.hideClipboardAlert}},[this._v("\n        Copier la liste dans le presse-papier\n      ")])])]),e("div",{attrs:{role:"alert","aria-live":"polite"}},[this.showClipboardAlert?e("div",{staticClass:"fr-alert fr-alert--success fr-alert--sm fr-mb-2w"},[e("p",[this._v("Le lien vers la liste a bien été copié dans le presse-papier.")])]):this._e()])])}),[],!1,null,"271d32e1",null).exports,a={name:"Search",data:()=>({searchQuery:""}),mounted(){const{search:e}=this.$route.query;e&&(this.searchQuery=e,this.search())},methods:{search(){this.$emit("search",this.searchQuery)}},watch:{"$route.query"(e,t){this.searchQuery=e.search,e.search&&this.search()}}},n=Object(s.a)(a,(function(){var e=this,t=e._self._c;return t("form",{staticClass:"fr-mb-4v fr-mb-md-12v",on:{submit:function(t){return t.preventDefault(),e.search.apply(null,arguments)}}},[t("div",{staticClass:"fr-search-bar",attrs:{id:"header-search",role:"search"}},[t("label",{staticClass:"fr-label",attrs:{for:"search"}},[e._v("Rechercher parmi les critères")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.searchQuery,expression:"searchQuery",modifiers:{trim:!0}}],staticClass:"fr-input",attrs:{placeholder:"Rechercher",type:"search",id:"search",name:"search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),t("button",{staticClass:"fr-btn",attrs:{type:"submit",title:"Rechercher"}},[e._v("\n      Rechercher\n    ")])])])}),[],!1,null,null,null).exports,o={name:"Filters",props:{mode:{validator:e=>["vertical","condensed"].includes(e),default:"vertical"}},data:()=>({profiles:["Pilotage","Conception","Graphisme","Intégration","Développement","Rédactionnel"],profileFilters:[],references:["RGAA","Système de design de l'État","Règles Opquast","Éco-conception","RGI","Loi informatique et Liberté"],referenceFilters:[]}),mounted(){const{profil:e,reference:t}=this.$route.query;this.profileFilters=e?JSON.parse(e):[],this.filterProfiles(),this.referenceFilters=t?JSON.parse(t):[],this.filterReferences()},computed:{isVertical:{get(){return"vertical"===this.mode}},allProfiles:{get(){return!this.profileFilters.length},set(){this.profileFilters=[],this.filterProfiles()}},allReferences:{get(){return!this.referenceFilters.length},set(){this.referenceFilters=[],this.filterReferences()}}},methods:{isProfileFiltered(e){return this.profileFilters.includes(e)},onProfileButtonClick(e){const t=e.target.value,r=this.profileFilters.indexOf(t);-1===r?this.profileFilters.push(t):this.profileFilters.splice(r,1),this.filterProfiles()},filterProfiles(){this.$emit("filter-profile",this.profileFilters)},isReferenceFiltered(e){return this.referenceFilters.includes(e)},onReferenceButtonClick(e){const t=e.target.value,r=this.referenceFilters.indexOf(t);-1===r?this.referenceFilters.push(t):this.referenceFilters.splice(r,1),this.filterReferences()},filterReferences(){this.$emit("filter-reference",this.referenceFilters)}},watch:{"$route.query"(e,t){this.profileFilters=e.profil?JSON.parse(e.profil):[],this.referenceFilters=e.reference?JSON.parse(e.reference):[]}}},c=(r("Iv68"),Object(s.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"fr-form-group fr-mb-12v"},[t("fieldset",{staticClass:"fr-fieldset fr-fieldset--inline"},[e._m(0),t("div",{staticClass:"fr-fieldset__content"},[t("ul",{staticClass:"fr-tags-group",class:{"tags-group--vertical-group":e.isVertical}},[t("li",[t("button",{staticClass:"fr-tag",attrs:{value:"Tous","aria-pressed":e.allProfiles},on:{click:function(t){e.allProfiles=!0}}},[e._v("Tous")])]),e._l(e.profiles,(function(r,i){return t("li",{key:r},[t("button",{staticClass:"fr-tag",attrs:{id:"filters-profile-"+i,value:r,"aria-pressed":e.isProfileFiltered(r)},on:{click:e.onProfileButtonClick}},[e._v(e._s(r))])])}))],2)])])]),t("div",{staticClass:"fr-form-group"},[t("fieldset",{staticClass:"fr-fieldset fr-fieldset--inline"},[e._m(1),t("div",{staticClass:"fr-fieldset__content"},[t("ul",{staticClass:"fr-tags-group",class:{"tags-group--vertical-group":e.isVertical}},[t("li",[t("button",{staticClass:"fr-tag",attrs:{value:"Tous","aria-pressed":e.allReferences},on:{click:function(t){e.allReferences=!0}}},[e._v("Toutes")])]),e._l(e.references,(function(r,i){return t("li",{key:r},[t("button",{staticClass:"fr-tag",attrs:{id:"filters-reference-"+i,value:r,"aria-pressed":e.isReferenceFiltered(r)},on:{click:e.onReferenceButtonClick}},[e._v(e._s(r))])])}))],2)])])])])}),[function(){var e=this._self._c;return e("legend",{staticClass:"fr-fieldset__legend",attrs:{title:"Filter les critères par profil"}},[e("h2",{staticClass:"fr-h6"},[this._v("Filtrer par profil")])])},function(){var e=this._self._c;return e("legend",{staticClass:"fr-fieldset__legend",attrs:{title:"Filter les critères par référence"}},[e("h2",{staticClass:"fr-h6"},[this._v("Filtrer par référence")])])}],!1,null,"6a78ad2c",null).exports),f={name:"ResultsMessage",props:{resultsCount:{type:Number,required:!0},search:{type:String,default:null},profiles:{type:Array,default:()=>[]},references:{type:Array,default:()=>[]}},computed:{pluralizedCriterion(){switch(this.resultsCount){case 0:return"Aucun critère";case 1:return"1 critère";default:return this.resultsCount+" critères"}},isNotFiltered(){return!this.search&&!this.profiles.length&&!this.references.length}}},u=Object(s.a)(f,(function(){var e=this,t=e._self._c;return t("p",[e._v("\n  "+e._s(e.pluralizedCriterion)+"\n  "),e.isNotFiltered?[e._v("\n    sans aucun filtre ni recherche appliqués pour le moment")]:e._e(),e.search?[e._v("\n    correspondant à la recherche « "),t("strong",[e._v(e._s(this.search))]),e._v(" »")]:e._e(),e.profiles.length?[e._v("\n    pour\n    "),e._l(e.profiles,(function(r,i){return[0!==i?[e._v(" ou ")]:e._e(),t("strong",{key:r},[e._v(e._s(r))])]}))]:e._e(),e.references.length?[e._v("\n    dans\n    "),e._l(e.references,(function(r,i){return[0!==i?[e._v(" ou ")]:e._e(),t("strong",{key:r},[e._v(e._s(r))])]}))]:e._e(),e._v(".\n")],2)}),[],!1,null,null,null).exports,d={name:"Criterion",props:{criterion:{type:Object,required:!0}}},p={components:{Toolbar:l,Search:n,Filters:c,ResultsMessage:u,Criterion:Object(s.a)(d,(function(){var e=this,t=e._self._c;return t("li",{staticClass:"dg-pidila__accordion"},[t("section",{staticClass:"fr-accordion"},[t("h2",{staticClass:"fr-accordion__title",attrs:{id:""+e.criterion.node.id}},[t("button",{staticClass:"fr-accordion__btn",attrs:{"aria-expanded":"false","aria-controls":"accordion-"+e.criterion.node.id}},[t("span",{staticClass:"dg-pidila__criterion-id-container"},[t("span",{staticClass:"dg-pidila__criterion-id"},[e._v("\n            Pi-"+e._s(e.criterion.node.id)+"\n          ")]),t("span",[e._v("\n            "+e._s(e.criterion.node.title)+"\n          ")])])])]),t("div",{staticClass:"fr-collapse",attrs:{id:"accordion-"+e.criterion.node.id}},[t("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"dg-criterion",domProps:{innerHTML:e._s(e.criterion.node.content)}}),t("hr",{staticClass:"fr-mt-4w"}),t("ul",{staticClass:"fr-tags-group"},[t("li",[t("ul",{attrs:{"aria-label":"Profils"}},e._l(e.criterion.node.profiles,(function(r){return t("li",{key:r,staticClass:"fr-tag dg-pidila__criterion-tag dg-pidila__criterion-tag--profile"},[e._v("\n              "+e._s(r)+"\n            ")])})),0)]),t("li",[t("ul",{attrs:{"aria-label":"Références"}},e._l(e.criterion.node.references,(function(r){return t("li",{key:r,staticClass:"fr-tag dg-pidila__criterion-tag dg-pidila__criterion-tag--reference"},[e._v("\n              "+e._s(r)+"\n            ")])})),0)])])])])])}),[],!1,null,null,null).exports},computed:{searchQuery(){return this.$route.query.search},profileFilters(){return this.$route.query.profil?JSON.parse(this.$route.query.profil):[]},referenceFilters(){return this.$route.query.reference?JSON.parse(this.$route.query.reference):[]},filteredCriteria(){let e=this.$page.allPidilaCriterion.edges;return this.searchQuery&&(e=e.filter(e=>this.cleanString(e.node.title).includes(this.cleanString(this.searchQuery))||this.cleanString(e.node.content).includes(this.cleanString(this.searchQuery)))),this.profileFilters.length&&(e=e.filter(e=>e.node.profiles.some(e=>this.profileFilters.includes(e)))),this.referenceFilters.length&&(e=e.filter(e=>e.node.references.some(e=>this.referenceFilters.includes(e)))),e},isFiltered(){return this.searchQuery||this.profileFilters.length||this.referenceFilters.length},pageTitle(){const e=[this.searchQuery,this.profileFilters.length,this.referenceFilters.length].filter(Boolean).length;return this.isFiltered?`${this.filteredCriteria.length} critère${this.filteredCriteria.length>1?"s":""} pour ${e} filtre${e>1?"s":""} appliqué${e>1?"s":""}`:"Checklist PiDila"}},methods:{updateSearch(e){this.updateQueryParams("search",e||void 0)},updateProfileFilters(e){this.updateQueryParams("profil",e.length?e:void 0)},updateReferenceFilters(e){this.updateQueryParams("reference",e.length?e:void 0)},updateQueryParams(e,t){if(this.$route.query[e]===JSON.stringify(t))return;const r={...this.$route.query,[e]:Array.isArray(t)?JSON.stringify(t):t};return this.$router.replace({path:this.$route.path,query:Object.keys(r).length?r:null}).catch(()=>{})},resetFilters(){this.$router.push({path:this.$route.path})},cleanString:e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),toggleAll(e){console.log((e?"Révéler":"Cacher")+" tous les critères")}},metaInfo(){return{title:this.pageTitle,meta:[{name:"description",content:"Une liste unique des obligations et bonnes pratiques pour les sites web publics : Système de design de l’État, RGAA, Éco-conception, Loi informatique et liberté, RGI et Règles Opquast."},{property:"og:title",content:"Checklist PiDila - DesignGouv"},{property:"og:description",content:"Une liste unique des obligations et bonnes pratiques pour les sites web publics : Système de design de l’État, RGAA, Éco-conception, Loi informatique et liberté, RGI et Règles Opquast."},{property:"og:image",content:"https://design.numerique.gouv.fr/assets/meta-images/designgouv.png"}]}}},h=(r("dGZS"),null),g=Object(s.a)(p,(function(){var e=this,t=e._self._c;return t("Layout",[t("dialog",{staticClass:"fr-modal fr-unhidden-sm fr-hidden-md",attrs:{"aria-labelledby":"fr-modal-title-modal-1",role:"dialog",id:"fr-modal-1"}},[t("div",{staticClass:"fr-container fr-container--fluid fr-container-md"},[t("div",{staticClass:"fr-grid-row fr-grid-row--center"},[t("div",{staticClass:"fr-col-12 fr-col-md-8 fr-col-lg-6"},[t("div",{staticClass:"fr-modal__body"},[t("div",{staticClass:"fr-modal__header"},[t("button",{staticClass:"fr-link--close fr-link",attrs:{title:"Fermer la fenêtre modale","aria-controls":"fr-modal-1"}},[e._v("\n                Fermer\n              ")])]),t("div",{staticClass:"fr-modal__content"},[t("h1",{staticClass:"fr-modal__title",attrs:{id:"fr-modal-title-modal-1"}},[e._v("\n                Filtrer les critères\n              ")]),t("Filters",{attrs:{mode:"condensed"},on:{"filter-profile":e.updateProfileFilters,"filter-reference":e.updateReferenceFilters}})],1)])])])])]),t("section",{staticClass:"dg-cover dg-cover--linear fr-mb-6w"},[t("div",{staticClass:"dg-cover__container fr-mb-1w"},[t("nav",{staticClass:"fr-breadcrumb",attrs:{role:"navigation","aria-label":"vous êtes ici :"}},[t("ol",{staticClass:"fr-breadcrumb__list"},[t("li",[t("g-link",{staticClass:"fr-breadcrumb__link",attrs:{to:"/"}},[e._v("Accueil")])],1),t("li",[t("g-link",{staticClass:"fr-breadcrumb__link",attrs:{to:"/outils/"}},[e._v("Outils")])],1),t("li",[t("a",{staticClass:"fr-breadcrumb__link",attrs:{"aria-current":"page"}},[e._v("Checklist PiDila")])])])]),t("h1",{staticClass:"dg-cover__title"},[t("svg",{class:"dg-picto fr-mr-2w",attrs:{width:"80",height:"80",viewBox:"0 0 80 80",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",focusable:"false",tabindex:"-1"}},[t("path",{attrs:{d:"M40 30.5a3.5 3.5 0 013.5 3.5l-.001 2.499L46 36.5a3.5 3.5 0 010 7l-2.501-.001L43.5 46a3.5 3.5 0 01-7 0l-.001-2.501L34 43.5a3.5 3.5 0 010-7l2.499-.001L36.5 34a3.5 3.5 0 013.5-3.5z",fill:"var(--text-title-grey)","fill-rule":"evenodd"}})]),e._v("\n        La checklist PiDila\n      ")]),t("p",{staticClass:"fr-text--lead"},[e._v("\n        Une liste unique des obligations et bonnes pratiques pour les sites\n        web publics : Système de design de l’État,\n        "),t("abbr",{attrs:{title:"Référentiel Général d’Amélioration de l’Accessibilité"}},[e._v("RGAA")]),e._v(", Éco-conception, Loi informatique et liberté,\n        "),t("abbr",{attrs:{title:"Référentiel Général d’Interopérabilité"}},[e._v("RGI")]),e._v(" et\n        Règles Opquast.\n      ")])])]),t("div",{staticClass:"fr-grid-row fr-grid-row--gutters"},[t("div",{staticClass:"fr-col-12 fr-col-md-3"},[t("Search",{on:{search:e.updateSearch}}),t("section",[t("div",{staticClass:"fr-unhidden-sm fr-hidden-md"},[t("button",{staticClass:"fr-btn fr-btn--secondary fr-btn--icon-right fr-icon-filter-line btn-filters",attrs:{"data-fr-opened":"false","aria-controls":"fr-modal-1"}},[e._v("\n            Filtres\n          ")])]),t("div",{staticClass:"fr-hidden fr-unhidden-md"},[t("Filters",{on:{"filter-profile":e.updateProfileFilters,"filter-reference":e.updateReferenceFilters}})],1)])],1),t("div",{staticClass:"fr-col-12 fr-col-md-1"}),t("div",{staticClass:"fr-col-12 fr-col-md-8"},[t("div",{staticClass:"result-bar fr-mb-4v fr-mb-md-12v",attrs:{role:"alert","aria-live":"polite","aria-atomic":"true"}},[t("ResultsMessage",{attrs:{"results-count":e.filteredCriteria.length,search:e.searchQuery,profiles:e.profileFilters,references:e.referenceFilters}}),t("Toolbar",{staticClass:"result-bar-tools",on:{"conceal-all":function(t){return e.toggleAll(!1)},"disclose-all":function(t){return e.toggleAll(!0)}}})],1),t("section",[e.filteredCriteria.length?t("ul",{staticClass:"accordions"},e._l(e.filteredCriteria,(function(e){return t("Criterion",{key:e.node.id,attrs:{criterion:e}})})),1):t("div",{staticClass:"fr-p-2w"},[e._v("\n          Aucun critère ne correspond aux filtres appliqués.\n        ")])])])])])}),[],!1,null,"a373ace6",null);"function"==typeof h&&h(g);t.default=g.exports},yS0k:function(e,t,r){"use strict";r("z272")},z272:function(e,t,r){}}]);