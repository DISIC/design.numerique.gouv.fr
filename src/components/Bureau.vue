<template>
  <div class="design-office">

    <div class="design-office__header">
      <p class="design-office__title"><BureauSVG class="design-office__title-icon" focusable="false" aria-hidden="true"/>Le bureau du Design</p>
      <p class="design-office__date" v-html="(new Date()).toLocaleDateString('fr-FR', {weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}).replace(' à ', ' ')"></p>
    </div>


    <div class="design-office__content">

      <div class="design-office__top">

        <div class="design-office__container">
          <div class="design-office__element design-office__readme">
            <h2 class="design-office__element-container">
              <Readme class="design-office__element-icon" focusable="false" aria-hidden="true"/>
              <button class="design-office__element-action" aria-expanded="false" aria-controls="readme">Lisez-moi.txt</button>
            </h2>

            <dialog aria-labelledby="rf-modal-readme" id="readme" class="rf-modal">
              <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--center">
                  <div class="rf-col-sm-10 rf-col-md-8 rf-col-lg-6">
                    <div class="rf-modal__body">
                      <div class="rf-modal__header">
                        <h1 id="rf-modal-readme" class="rf-modal__title">Lisez-moi.txt</h1>
                        <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" aria-controls="readme">Fermer</button>
                      </div>
                      <div class="rf-modal__content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, dolor pulvinar feugiat aliquam, risus mi venenatis magna, id ornare quam quam vitae sapien. Donec sed lorem condimentum, semper mauris eu, dictum velit. Etiam ac magna euismod, malesuada sapien a, aliquam risus. Proin viverra malesuada cursus. Nulla viverra congue leo, vel semper diam pretium sit amet. Curabitur laoreet, urna eu semper volutpat, ligula metus auctor mauris, non convallis eros nunc eget ipsum. Nulla facilisi. Suspendisse potenti. Maecenas luctus lectus ac sapien facilisis scelerisque. In mi massa, ultrices nec interdum a, porttitor ac augue. Donec quis placerat elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                        <p>
                          Nam mauris urna, tincidunt a libero ac, pharetra congue tellus. Vestibulum mauris ligula, vehicula non libero quis, eleifend aliquet eros. Pellentesque facilisis eros sit amet ligula egestas accumsan. Vivamus a mollis magna. Aliquam dapibus urna ac sodales dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elit est, rhoncus in sodales in, mollis vitae orci. Phasellus vel justo varius, egestas nibh sed, malesuada massa. Nunc elit sem, venenatis a lorem in, rutrum tempor leo. Duis hendrerit ipsum a leo porta volutpat. Curabitur at malesuada nibh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>

          </div>
        </div>

        <div class="design-office__container">
          <div class="design-office__event" id="event-message">
            <Calendar class="design-office__event-icon" focusable="false" aria-hidden="true"/>
            <Close class="design-office__event-close" focusable="false" aria-hidden="true" v-on:click="hideEvent"/>
            <h2 class="design-office__event-title">
              <button class="design-office__event-action" aria-expanded="false" aria-controls="event">Inscrivez-vous à notre évènement <i>L'État centré usager ? Oui c'est possible.</i> les 6, 7 et 8 avril.</button>
            </h2>

            <dialog aria-labelledby="rf-modal-event" id="event" class="rf-modal">
              <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--center">
                  <div class="rf-col-sm-10 rf-col-md-8 rf-col-lg-6">
                    <div class="rf-modal__body">
                      <div class="rf-modal__header">
                        <h1 id="rf-modal-event" class="rf-modal__title">Évènement les 6, 7 et 8 avril</h1>
                        <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" aria-controls="event">Fermer</button>
                      </div>
                      <div class="rf-modal__content">
                        <p>
                          À l’occasion de la clôture de la saison 1 du Commando UX, rejoignez-nous pour échanger autour de la recherche usager, l'inclusion et l'accessibilité, et l'art de gouverner.
                        </p>
                      </div>
                      <div class="rf-modal__footer">
                        <div class="design-office__inner-element">
                          <div class="design-office__inner-element-container">
                            <g-link to="/articles/2021-03-21-evenement-design/"class="design-office__inner-element-action">
                              Programme et inscriptions
                            </g-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>

      </div>


      <div class="design-office__middle">

        <ol class="design-office__container">
          <li class="design-office__element">
            <h2 class="design-office__element-container">
              <FolderA class="design-office__element-icon" focusable="false" aria-hidden="true"/>
              <button class="design-office__element-action" aria-expanded="false" aria-controls="folderA">En amont</button>
            </h2>

            <dialog aria-labelledby="rf-modal-folderA" id="folderA" class="rf-modal">
              <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--center">
                  <div class="rf-col-sm-10 rf-col-md-8 rf-col-lg-6">
                    <div class="rf-modal__body">
                      <div class="rf-modal__header">
                        <h1 id="rf-modal-folderA" class="rf-modal__title">En amont</h1>
                        <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" aria-controls="folderA">Fermer</button>
                      </div>
                      <div class="rf-modal__content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, dolor pulvinar feugiat aliquam, risus mi venenatis magna, id ornare quam quam vitae sapien. Donec sed lorem condimentum, semper mauris eu, dictum velit. Etiam ac magna euismod, malesuada sapien a, aliquam risus. Proin viverra malesuada cursus. Nulla viverra congue leo, vel semper diam pretium sit amet. Curabitur laoreet, urna eu semper volutpat, ligula metus auctor mauris, non convallis eros nunc eget ipsum. Nulla facilisi. Suspendisse potenti. Maecenas luctus lectus ac sapien facilisis scelerisque. In mi massa, ultrices nec interdum a, porttitor ac augue. Donec quis placerat elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </li>
          <li class="design-office__element">
            <h2 class="design-office__element-container">
              <FolderB class="design-office__element-icon" focusable="false" aria-hidden="true"/>
              <button class="design-office__element-action" aria-expanded="false" aria-controls="folderB">En continue</button>
            </h2>

            <dialog aria-labelledby="rf-modal-folderB" id="folderB" class="rf-modal">
              <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--center">
                  <div class="rf-col-sm-10 rf-col-md-8 rf-col-lg-6">
                    <div class="rf-modal__body">
                      <div class="rf-modal__header">
                        <h1 id="rf-modal-folderB" class="rf-modal__title">En continue</h1>
                        <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" aria-controls="folderB">Fermer</button>
                      </div>
                      <div class="rf-modal__content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, dolor pulvinar feugiat aliquam, risus mi venenatis magna, id ornare quam quam vitae sapien. Donec sed lorem condimentum, semper mauris eu, dictum velit. Etiam ac magna euismod, malesuada sapien a, aliquam risus. Proin viverra malesuada cursus. Nulla viverra congue leo, vel semper diam pretium sit amet. Curabitur laoreet, urna eu semper volutpat, ligula metus auctor mauris, non convallis eros nunc eget ipsum. Nulla facilisi. Suspendisse potenti. Maecenas luctus lectus ac sapien facilisis scelerisque. In mi massa, ultrices nec interdum a, porttitor ac augue. Donec quis placerat elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </li>
          <li class="design-office__element">
            <h2 class="design-office__element-container">
              <FolderC class="design-office__element-icon" focusable="false" aria-hidden="true"/>
              <button class="design-office__element-action" aria-expanded="false" aria-controls="folderC">En parallèle</button>
            </h2>

            <dialog aria-labelledby="rf-modal-folderC" id="folderC" class="rf-modal">
              <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--center">
                  <div class="rf-col-sm-10 rf-col-md-8 rf-col-lg-6">
                    <div class="rf-modal__body">
                      <div class="rf-modal__header">
                        <h1 id="rf-modal-folderC" class="rf-modal__title">En parallèle</h1>
                        <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" aria-controls="folderC">Fermer</button>
                      </div>
                      <div class="rf-modal__content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, dolor pulvinar feugiat aliquam, risus mi venenatis magna, id ornare quam quam vitae sapien. Donec sed lorem condimentum, semper mauris eu, dictum velit. Etiam ac magna euismod, malesuada sapien a, aliquam risus. Proin viverra malesuada cursus. Nulla viverra congue leo, vel semper diam pretium sit amet. Curabitur laoreet, urna eu semper volutpat, ligula metus auctor mauris, non convallis eros nunc eget ipsum. Nulla facilisi. Suspendisse potenti. Maecenas luctus lectus ac sapien facilisis scelerisque. In mi massa, ultrices nec interdum a, porttitor ac augue. Donec quis placerat elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </li>
        </ol>
      </div>


      <div class="design-office__bottom">

        <div class="design-office__container">
          <div class="design-office__element">
            <h2 class="design-office__element-container">
              <Trash class="design-office__element-icon" focusable="false" aria-hidden="true"/>
              <button class="design-office__element-action" aria-expanded="false" aria-controls="trash">Corbeille</button>
            </h2>

            <dialog aria-labelledby="rf-modal-trash" id="trash" class="rf-modal">
              <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--center">
                  <div class="rf-col-sm-10 rf-col-md-8 rf-col-lg-6">
                    <div class="rf-modal__body">
                      <div class="rf-modal__header">
                        <h1 id="rf-modal-trash" class="rf-modal__title">Corbeille</h1>
                        <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" aria-controls="trash">Fermer</button>
                      </div>
                      <div class="rf-modal__content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit, dolor pulvinar feugiat aliquam, risus mi venenatis magna, id ornare quam quam vitae sapien. Donec sed lorem condimentum, semper mauris eu, dictum velit. Etiam ac magna euismod, malesuada sapien a, aliquam risus. Proin viverra malesuada cursus. Nulla viverra congue leo, vel semper diam pretium sit amet. Curabitur laoreet, urna eu semper volutpat, ligula metus auctor mauris, non convallis eros nunc eget ipsum. Nulla facilisi. Suspendisse potenti. Maecenas luctus lectus ac sapien facilisis scelerisque. In mi massa, ultrices nec interdum a, porttitor ac augue. Donec quis placerat elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        <div class="design-office__container">
          <div class="design-office__element">
            <h2 class="design-office__element-container">
              <Contact class="design-office__element-icon" focusable="false" aria-hidden="true"/>
              <button class="design-office__element-action" aria-expanded="false" aria-controls="contact">Contact</button>
            </h2>

            <dialog aria-labelledby="rf-modal-contact" id="contact" class="rf-modal">
              <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--center">
                  <div class="rf-col-sm-10 rf-col-md-8 rf-col-lg-6">
                    <div class="rf-modal__body">
                      <div class="rf-modal__header">
                        <h1 id="rf-modal-contact" class="rf-modal__title">Contact</h1>
                        <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" aria-controls="contact">Fermer</button>
                      </div>
                      <div class="rf-modal__content">
                        <p>Vous pouvez nous contacter en utilisant l’adresse électronique <strong>contact@design.numerique.gouv.fr</strong>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
          <div class="design-office__element">
            <h2 class="design-office__element-container">
              <Support class="design-office__element-icon" focusable="false" aria-hidden="true"/>
              <button class="design-office__element-action" aria-expanded="false" aria-controls="accompagnement">Accompagnement</button>
            </h2>

            <dialog aria-labelledby="rf-modal-accompagnement" id="accompagnement" class="rf-modal">
              <div class="rf-container">
                <div class="rf-grid-row rf-grid-row--center">
                  <div class="rf-col-sm-10 rf-col-md-8 rf-col-lg-6">
                    <div class="rf-modal__body">
                      <div class="rf-modal__header">
                        <h1 id="rf-modal-accompagnement" class="rf-modal__title">Accompagnement</h1>
                        <button class="rf-link--close rf-link" title="Fermer la fenêtre modale" aria-controls="accompagnement">Fermer</button>
                      </div>
                      <div class="rf-modal__content">
                        <ul>
                          <li v-for="{ node } in $static.allAction.edges" :key="node.id" class="design-office__inner-element">
                            <h2 v-if="node.link.includes('http')" class="design-office__inner-element-container">
                              <component :is="node.id" class="design-office__inner-element-icon"></component>
                              <a :href="node.link" :title="node.title + ' - Nouvelle fenêtre'" target="_blank" class="design-office__inner-element-action">{{ node.title }}</a>
                            </h2>
                            <h2 v-else class="design-office__inner-element-container">
                              <component :is="node.id" class="design-office__inner-element-icon"></component>
                              <g-link :to="node.link" class="design-office__inner-element-action">{{ node.title }}</g-link>
                            </h2>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>


<static-query>

  query {
    allAction (sortBy: "rank", order: ASC) {
      edges {
        node {
          id
          title
          icon
          description
          link
          rank
        }
      }
    }
  }

</static-query>


<script>

  import Design from "~/assets/images/design.svg"
  import BureauSVG from "~/assets/images/bureau/bureau.svg"
  import FolderA from "~/assets/images/bureau/folderA.svg"
  import FolderB from "~/assets/images/bureau/folderB.svg"
  import FolderC from "~/assets/images/bureau/folderC.svg"
  import Readme from "~/assets/images/bureau/readme.svg"
  import Contact from "~/assets/images/bureau/contact.svg"
  import Support from "~/assets/images/bureau/support.svg"
  import Trash from "~/assets/images/bureau/trash.svg"
  import Calendar from "~/assets/images/bureau/calendar.svg"
  import Close from "~/assets/images/bureau/close.svg"

  export default {
    name: 'Bureau',
    components: {
      Design,
      BureauSVG,
      FolderA,
      FolderB,
      FolderC,
      Readme,
      Contact,
      Support,
      Trash,
      Calendar,
      Close,
    },
    created() {
      if (process.isClient) {
        window.addEventListener("resize", this.resizeBureau);
      }
      for(let i = 0; i < this.$static.allAction.edges.length; i++) {
        let componentName = this.$static.allAction.edges[i].node.id;
        this.$options.components[componentName] = () => import("~/assets/images/actions/" + this.$static.allAction.edges[i].node.id + "-retro.svg");
      }
    },
    destroyed() {
      if (process.isClient) {
        window.removeEventListener("resize", this.resizeBureau);
      }
    },
    methods: {
      resizeBureau(e) {
        if (process.isClient) {
          let vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
      },
      hideEvent () {
        document.getElementById('event-message').style.display = "none";
      },
    },
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .design-office {
    border: 0.125rem solid $black;
    background-color: #fff;
    background-image: linear-gradient(45deg, $black 25%, transparent 25%, transparent 75%, $black 75%), linear-gradient(45deg, $black 25%, transparent 25%, transparent 75%, $black 75%);
    background-size: 0.25rem 0.25rem;
    background-position: 0 0, 0.125rem 0.125rem;

    &__header {
      background-color: white;
      border-bottom: 0.125rem solid $black;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media only screen and (max-width: $mobile-max-width) {
        padding-top: 0.125rem;
      }
    }

    &__title {
      margin: 0;
      padding: 0.325rem 0rem 0.325rem 0.75rem;
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      font-size: 1rem;
      font-weight: bold;
      color: $black;
    }

    &__title-icon {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 0.5rem;
      margin-bottom: -0.3125rem;
    }

    &__date {
      margin: 0 0.75rem;
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      color: $black;
      font-size: 0.875rem;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 26rem;
    }

    &__top, &__middle, &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__top {
      align-items: flex-start;

      .design-office__readme {
        min-width: 8rem;
      }
    }

    &__middle {
      margin: 1rem 0;

      ol {
        margin: 0 auto;
        padding: 0;

        li {
          list-style: none;
        }
      }
    }

    &__bottom {
      flex-wrap: wrap;
      align-items: flex-end;
    }

    &__container {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    &__element, &__inner-element {
      list-style: none !important;

      &-container {
        margin: 1rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        @media only screen and (max-width: $mobile-max-width) {
          margin: 1rem 0.5rem;
        }

        &:hover, &:focus, &:active {
          .design-office__element-icon, .design-office__inner-element-icon {
            .back {
              fill: $black;
            }
            .middle {
              fill: $black;
            }
            .stroke {
              fill: white;
            }
          }
        }
      }

      &-action {
        font-size: 0.875rem;
        margin-top: 0.25rem;
        padding: 0.125rem 0.375rem;
        line-height: 1.5;
        color: $black !important;
        background-color: white;
        font-weight: bold;
        border: none !important;
        transition: 0s all !important;
        font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;

        &:after {
          position: absolute;
          content: "";
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        &:hover, &:focus, &:active {
          cursor: pointer;
          color: white !important;
          background-color: $black !important;

          .design-office__element-icon, .design-office__inner-element-icon {
            .back {
              fill: $black;
            }
            .middle {
              fill: $black;
            }
            .stroke {
              fill: white;
            }
          }
        }
      }

      &-icon {
        display: block;
      }
    }

    &__event {
      max-width: 20rem;
      margin: 0.5rem;
      padding: 0.5rem;
      background-color: white;
      border: 2px solid $black;
      box-shadow: 0.25rem 0.25rem 0 white;
      font-size: 0.875rem;
      font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
      display: flex;
      flex-direction: column;
      position: relative;

      @media only screen and (max-width: $mobile-max-width) {
        margin-bottom: -1.375rem;
      }

      &-title {
        margin: 0;
      }

      &-action {
        font-size: 0.875rem;
        margin: 0;
        padding: 0;
        text-align: left;
        font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
        color: $black !important;
        background-color: white;
        font-weight: bold;
        border: none !important;
        transition: 0s all !important;

        &:hover, &:focus, &:active {
          cursor: pointer;
          color: white !important;
          background-color: $black !important;
        }

        &:after {
          position: absolute;
          content: "";
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }

      &-icon {
        margin-bottom: 0.25rem;

        @media only screen and (max-width: $mobile-max-width) {
          margin-bottom: 0;
        }
      }

      &-close {
        z-index: 1000;
        position: absolute;
        right: 0.25rem;
        top: 0.25rem;
        background-color: $light;
        cursor: pointer;

        &:hover {
          .stroke {
            fill: $black !important;
          }
          .back {
            fill: white !important;
          }
        }
      }

      .design-office__inner-element-container {
        margin: 0 1rem 1rem 1rem;
        flex-direction: row;

        .design-office__inner-element-action {
          display: flex;
          flex-direction: row;
          padding: 0.3125rem 0.5rem;
          margin: 0;
          border: 2px solid black !important;
        }
      }

      &:hover, &:focus, &:active {
        background-color: $black !important;
        border: 2px solid white;
        box-shadow: 0.25rem 0.25rem 0 $black;

        .design-office__event-title {
          .design-office__event-action {
            color: white !important;
            background-color: $black !important;
          }
        }

        .design-office__event-icon, .design-office__event-close {
          .back {
            fill: $black;
          }
          .stroke {
            fill: white;
          }
        }
      }
    }

    .rf-modal {
      transition: 0s all;

      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
      }

      &__body {
        background-color: $light-gray;
        border: 0.125rem solid $black;
        box-shadow: 0.5rem 0.5rem 0 $black;
        padding: 0;
        background-color: white;
        overflow: visible;

        @media only screen and (max-width: $mobile-max-width) {
          box-shadow: 0.5rem -0.5rem 0 $black;
        }
      }

      &__header {
        border-bottom: 0.125rem solid $black;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;

        .rf-link--close {
          border-radius: 0;
          margin-right: 0.125rem;

          &:active {
            background-image: none;
          }
        }
      }

      &__title {
        font-size: 1rem !important;
        margin: 0.5rem 0 !important;
        padding-left: 1rem;
        color: $black;
      }

      &__content {
        margin: 0;
        padding: 0.5rem 1rem !important;
        max-height: 54vh;
        overflow: scroll !important;

        @media only screen and (max-width: $mobile-max-width) {
          max-height: 72vh;
        }
      }

      &__footer {
        margin: 0;
        padding: 0;
        justify-content: flex-end;
      }
    }

    &--fs {
      width: calc(100vw - 4px);
      //height: calc(100vh - 4px);
      height: calc(var(--vh, 1vh) * 100 - 4px);
      position: fixed;
      top: 0;
      left: 0;

      .design-office__content {
        height: calc(100% - 34.4px);
      }
    }
  }

</style>
