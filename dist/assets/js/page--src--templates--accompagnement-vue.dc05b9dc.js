(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{YTMy:function(t,a,e){"use strict";e.r(a);var s={metaInfo(){return{title:this.$page.accompagnement.name,meta:[{name:"description",content:this.$page.accompagnement.mission},{property:"og:title",content:this.$page.accompagnement.name+" - DesignGouv"},{property:"og:description",content:this.$page.accompagnement.mission},{property:"og:image",content:"https://design.numerique.gouv.fr/assets/meta-images/CUX.png"}]}},methods:{findPhoto(t){return this.$page.people.edges.filter(a=>a.node.id==this.$slugify(t))[0].node}}},i=(e("vgRM"),e("KHd+")),n=null,r=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("Layout",{attrs:{showServices:""}},[a("div",{staticClass:"dg-cover dg-cover--linear fr-mb-6w"},[a("div",{staticClass:"dg-cover__container fr-mb-1w"},[a("nav",{staticClass:"fr-breadcrumb",attrs:{role:"navigation","aria-label":"vous êtes ici :"}},[a("ol",{staticClass:"fr-breadcrumb__list"},[a("li",[a("g-link",{staticClass:"fr-breadcrumb__link",attrs:{to:"/"}},[t._v("Accueil")])],1),a("li",[a("g-link",{staticClass:"fr-breadcrumb__link",attrs:{to:"/accompagnement/"}},[t._v("Accompagnement")])],1),a("li",[a("a",{staticClass:"fr-breadcrumb__link",attrs:{"aria-current":"page"}},[t._v(t._s(t.$page.accompagnement.name))])])])]),a("h1",{staticClass:"dg-cover__title"},[t._v(t._s(t.$page.accompagnement.name))]),a("p",{staticClass:"fr-text--lead"},[t._v(t._s(t.$page.accompagnement.description))])])]),a("div",{staticClass:"dg-content dg-content--xs fr-px-2w"},[a("div",{staticClass:"detail fr-mb-1w"},[a("span",{staticClass:"dg-picto dg-picto--sm fr-mr-1w"},[a("font-awesome",{attrs:{icon:["fas","route"],height:"16px","aria-hidden":"true"}})],1),a("p",{staticClass:"detail__name fr-mr-1w"},[t._v("Statut :")]),"termine"==t.$slugify(t.$page.accompagnement.status[0])?a("p",{staticClass:"fr-badge fr-badge--success fr-badge--no-icon"},[t._v("Terminé")]):a("p",{staticClass:"fr-badge fr-badge--info fr-badge--no-icon"},[t._v("En cours")])]),a("div",{staticClass:"detail fr-mb-1w"},[a("span",{staticClass:"dg-picto dg-picto--sm fr-mr-1w"},[a("font-awesome",{attrs:{icon:["fas","user-friends"],height:"16px","aria-hidden":"true"}})],1),a("p",{staticClass:"detail__name fr-mr-1w"},[t._v("Volumétrie :")]),a("p",{staticClass:"detail__data"},[t._v(t._s(t.$page.accompagnement.volumetry)+" usagers par an")])]),t.$page.accompagnement.impact?a("div",{staticClass:"detail fr-mb-1w"},[a("span",{staticClass:"dg-picto dg-picto--sm fr-mr-1w"},[a("font-awesome",{attrs:{icon:["fas","tasks"],height:"16px","aria-hidden":"true"}})],1),a("p",{staticClass:"detail__name fr-mr-1w"},[t._v("Impacts :")]),a("p",{staticClass:"detail__data"},[t._v(t._s(t.$page.accompagnement.impact))])]):t._e(),a("div",{staticClass:"detail fr-mb-1w"},[a("span",{staticClass:"dg-picto dg-picto--sm fr-mr-1w"},[a("font-awesome",{attrs:{icon:["far","calendar-alt"],height:"16px","aria-hidden":"true"}})],1),a("p",{staticClass:"detail__name fr-mr-1w"},[t._v("Année :")]),a("p",{staticClass:"detail__data"},[t._v(t._s(new Date(t.$page.accompagnement.date).getFullYear()))])]),t.$page.accompagnement.experts.length?a("div",{staticClass:"detail detail--team fr-mb-1w"},[a("span",{staticClass:"dg-picto dg-picto--sm fr-mr-1w"},[a("font-awesome",{attrs:{icon:["fas","user-astronaut"],height:"16px","aria-hidden":"true"}})],1),t.$page.accompagnement.experts.length<2?a("p",{staticClass:"detail__name fr-mr-1w fr-mb-2w"},[t._v("Expert déployé :")]):a("p",{staticClass:"detail__name fr-mr-1w fr-mb-2w"},[t._v("Experts déployés :")]),a("ul",{staticClass:"detail__data detail__data--team fr-ml-2w fr-ml-md-6w fr-mb-1v"},t._l(t.$page.accompagnement.experts,(function(e){return a("li",{key:e,staticClass:"team-member fr-mb-1v"},[a("g-image",{staticClass:"team-member__photo fr-mr-1w",attrs:{src:t.findPhoto(e).photo,alt:""}}),a("p",{staticClass:"team-member__description"},[t._v(t._s(e))])],1)})),0)]):t._e(),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"dg-content dg-content--xs fr-mt-6w",domProps:{innerHTML:t._s(t.$page.accompagnement.content.content)}})])])}),[],!1,null,"c755b362",null);"function"==typeof n&&n(r);a.default=r.exports},vgRM:function(t,a,e){"use strict";e("xmOb")},xmOb:function(t,a,e){}}]);