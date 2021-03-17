<template>
  <div class="design-office">

    <div class="design-office__header">
      <h1><BureauSVG class="design-office__title-icon" focusable="false" aria-hidden="true"/>Le bureau du Design</h1>
      <p class="design-office__date" v-html="(new Date()).toLocaleDateString('fr-FR', {weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}).replace(' à ', ' ')"></p>
    </div>


    <div class="design-office__content">

      <div class="design-office__top">

        <div class="design-office__container">
          <div class="design-office__element">
            <p><Photo class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Aperçu.bmp</span></p>
          </div>
        </div>

        <div class="design-office__container">
          <div class="design-office__element">
            <p><Folder class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Actualité</span></p>
          </div>
        </div>

      </div>


      <div class="design-office__middle">

        <div class="design-office__container">
          <div class="design-office__element">
            <h2><FolderA class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>En amont</span></h2>
          </div>
          <div class="design-office__element">
            <h2><FolderB class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>En continue</span></h2>
          </div>
          <div class="design-office__element">
            <h2><FolderC class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>En parallèle</span></h2>
          </div>
        </div>
      </div>


      <div class="design-office__bottom">

        <div class="design-office__container">
          <div class="design-office__element">
            <h2><Readme class="design-office__element-icon" focusable="false" aria-hidden="true"/><button aria-expanded="false" aria-controls="readme">Lisez-moi.txt</button></h2>

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
          <div class="design-office__element">
            <p><Contact class="design-office__element-icon" focusable="false" aria-hidden="true"/><span>Contact</span></p>
          </div>
          <div class="design-office__element">
            <p><Support class="design-office__element-icon" focusable="false" aria-hidden="true"/><g-link to="/accompagnement/">Accompagnement</g-link></p>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>


<static-query>

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
  import Photo from "~/assets/images/bureau/photo.svg"

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
      Photo
    },
  }

</script>

<style lang="scss">

  @import "src/assets/scss/_vars.scss";

  .design-office {
    width: 100%;
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

      h1 {
        margin: 0;
        padding: 0.5rem 0.25rem 0.5rem 0.75rem;
        font-size: 1rem;
        font-weight: bold;
        color: $black;
      }
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
      height: 26rem;
    }

    &__top, &__middle, &__bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__container {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    &__element {

      h2, p {
        font-family: "Marianne", "Helvetica Neue", Arial, sans-serif;
        margin: 1rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        @media only screen and (max-width: $mobile-max-width) {
          margin: 1rem;
        }

        span, a, button {
          font-size: 0.875rem;
          margin-top: 0.25rem;
          padding: 0.125rem 0.5rem;
          color: $black !important;
          background-color: white;
          font-weight: bold;
          border: none !important;
          transition: 0s all !important;

          &:after {
            position: absolute;
            content: "";
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }

          &:hover:not(span), &:focus:not(span), &:active:not(span) {
            cursor: pointer;
            color: white !important;
            background-color: $black !important;
          }
        }

        &:hover, &:focus, &:active {
          svg {
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

    &__middle {
      div {
        margin: 0 auto;
      }
    }

    .rf-modal {

      &__body {
        background-color: $light-gray;
        border: 0.125rem solid $black;
        box-shadow: 0.5rem 0.5rem 0 $black;
        padding: 0;
        background-color: white;
        overflow: visible;
      }

      &__header {
        border-bottom: 0.125rem solid $black;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;

        button {
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
        padding: 0.5rem 1rem 2rem 1rem !important;
        height: 54vh;
        overflow: scroll !important;

        @media only screen and (max-width: $mobile-max-width) {
          height: 80vh;
        }
      }
    }
  }

</style>
