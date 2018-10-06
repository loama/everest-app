<template>
  <!-- App -->
  <div class="app">
    <div id="statusbar"></div>
    <div id="header" v-bind:class="{active: qr.reading}">
      <div class="scan" v-on:click="startReading()">
        <img class="qr" src="./assets/images/qr.svg">
        <img class="close" src="./assets/images/close.svg">
      </div>
      <div class="title">everest</div>
    </div>

    <div id="lines">
      <div class="first horizontal"></div>
      <div class="second horizontal"></div>
      <div class="first vertical"></div>
      <div class="second vertical"></div>
    </div>

    <div id="home" v-bind:class="{active: qr.reading}">
      hola {{qr.result}}
    </div>

    <div id="modal-overlay" v-on:click="closeResultModal()" v-bind:class="{active: qr.result !== ''}">
    </div>

    <div id="restaurant-modal" v-bind:class="{active: qr.result !== ''}">
      <div class="header" v-bind:style="{background: qr.resultApi.color}">
        <img class="logo" :src="qr.resultApi.logo">
      </div>
      <div class="navigation">
        <div class="sections" v-bind:style="{width: qr.sectionsWidth}">
          <div v-for="section in qr.resultApi.sections"
               v-on:click="changeProductSection(section)"
               v-bind:class="{active: qr.activeSection === section}"
               class="section">
            <span>{{section}}</span>
            <div class="active-indicator"></div>
          </div>
          <div class="section basket"></div>
        </div>
      </div>
      <div class="product-sections" v-bind:style="{width: qr.productSectionsWidth, transform: qr.sectionsOffset}">
        <div v-for="productSection in qr.resultApi.sections" class="product-section">
          <div class="product"
               v-for="product in qr.resultApi.products"
               v-if="product.section = productSection">
               {{productSection}}
               {{product.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

let audioSuccess = new Audio('/static/NFCSuccess.ogg')

export default {
  data() {
    return {
      qr: {
        reading: false,
        result: '',
        resultApi: {
          code: '',
          name: '',
          color: '',
          logo: '',
          sections: [],
          products: []
        },
        activeSection: '',
        sectionsWidth: '0',
        sectionsOffset: '0'
      }
    }
  },
  methods: {
    deviceReady () {
      StatusBar.styleLightContent()
      // StatusBar.backgroundColorByHexString("#003FB9")
      StatusBar.overlaysWebView(true)
      QRScanner.prepare(this.qrPrepared) // show the prompt
    },
    qrPrepared (err, status){
      if (err) {
       // here we can handle errors and clean up any loose ends.
       console.error(err)
      }
      if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        // QRScanner.show() // should feel very fast.
        // QRScanner.scan(this.displayContents)
      } else if (status.denied) {
       // The video preview will remain black, and scanning is disabled. We can
       // try to ask the user to change their mind, but we'll have to send them
       // to their device settings with `QRScanner.openSettings()`.
      } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
      }
    },
    startReading () {
      if (this.qr.reading) {
        this.qr.reading = false
        this.qr.result = ''
      } else {
        this.qr.reading = true
        QRScanner.show()
        QRScanner.scan(this.qrResult)
      }
    },
    processResult (result) {
      this.qr.resultApi = result
      this.qr.activeSection = result.sections[0]
      this.qr.sectionsWidth = (result.sections.length * 112).toString() + 'px'
      this.qr.productSectionsWidth = (result.sections.length * 100).toString() + 'vw'
    },
    qrResult (err, text) {
      if(err){
        // an error occurred, or the scan was canceled (error code `6`)
        alert(err)
      } else {
        // The scan completed, display the contents of the QR code:
        // audioSuccess.play()
        this.qr.result = text
        var code = text.split('/')[4]
        axios
          .get('https://us-central1-loteria-api-3164c.cloudfunctions.net/menu/' + code)
          .then(response => (this.processResult(response.data)))
        // QRScanner.hide()
        this.qr.reading = false
      }
    },
    closeResultModal () {
      this.qr.result = ''
    },
    changeProductSection (section) {
      this.qr.activeSection = section
      this.qr.activeSectionIndex = this.qr.resultApi.sections.indexOf(section)
      this.qr.sectionsOffset = 'translate3d(-' + (this.qr.activeSectionIndex * 100).toString() + 'vw, 0, 0)'
      console.log(this.qr.sectionsOffset)
    }
  },
  mounted () {
    var self = this
    document.addEventListener("deviceready", function(){self.deviceReady()}, false)
  }
}
</script>
<style>

  @font-face {
    font-family: 'MontserratThin';
    src: url('./assets/fonts/Montserrat-Thin.otf');
  }

  #statusbar {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    height: 28px;
    width: 100vw;
    background: #106230;
  }

  #lines {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -1;
  }

  #lines .first.horizontal {
    position: absolute;
    top: 20vh;
    left: 0;
    height: 1px;
    width: 100vw;
    background: #FFFFFF;
    opacity: 0.3;
  }

  #lines .second.horizontal {
    position: absolute;
    top: 40vh;
    left: 0;
    height: 1px;
    width: 100vw;
    background: #FFFFFF;
    opacity: 0.3;
  }

  #lines .first.vertical {
    position: absolute;
    top: 28px;
    left: 33vw;
    height: 60vh;
    width: 1px;
    background: #FFFFFF;
    opacity: 0.3;
  }

  #lines .second.vertical {
    position: absolute;
    top: 28px;
    left: 66vw;
    height: 60vh;
    width: 1px;
    background: #FFFFFF;
    opacity: 0.3;
  }

  #header {
    position: fixed;
    z-index: 1000;
    top: 28px;
    left: 0;
    height: 56px;
    width: 100vw;
    border-bottom: 1px solid #F0F0F0;
    background: #FFFFFF;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
    text-align: center;
  }

  #header.active {
    transform: translate3d(0, 60vh, 0);
  }

  #header .title {
    font-family: 'MontserratThin';
    font-size: 20px;
    color: #4A4A4A;
    line-height: 56px;
    letter-spacing: -0.5px;
  }

  .scan {
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
    width: 56px;
  }

  .scan img {
    position: absolute;
    top: 16px;
    left: 16px;
    height: 24px;
    width: 24px;
    transition: all 0.3s;
  }

  .scan img.close {
    opacity: 0
  }

  #header.active .scan img.qr {
    opacity: 0;
  }

  #header.active .scan img.close {
    opacity: 1;
  }

  #home {
    position: absolute;
    top: 56px;
    left: 0;
    height: calc(100vh - 136px);
    padding: 40px 8px;
    width: calc(100vw - 16px);
    background: #FFFFFF;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
  }

  #home.active {
    transform: translate3d(0, 60vh, 0);
  }

  #modal-overlay {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #000000;
    display: none;
    opacity: 0.8;
  }

  #modal-overlay.active {
    display: block;
  }

  #restaurant-modal {
    position: fixed;
    z-index: 1002;
    top: 40vh;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    background: #FFFFFF;
    transform: translate3d(0, 60vh, 0);
    transition: all 0.3s ease;
  }

  #restaurant-modal.active {
    transform: translate3d(0, 0, 0);
  }

  #restaurant-modal .header {
    height: 56px;
    width: 100vw;
    border-bottom: 1px solid #E0E0E0;
    text-align: center;
  }

  #restaurant-modal .header img.logo {
    height: 40px;
    margin: 8px auto;
  }

  #restaurant-modal .navigation {
    position: relative;
    height: 56px;
    width: 100vw;
    border-bottom: 1px solid #E0E0E0;
    overflow: auto;
  }

  #restaurant-modal .sections {
    position: absolute;
    width: 400px;
  }

  #restaurant-modal .sections .section {
    height: 56px;
    width: 80px;
    line-height: 56px;
    display: inline-block;
    padding: 0 16px;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    transition: all 0.1s;
    vertical-align: top;
  }

  #restaurant-modal .sections .section.active {
    font-size: 24px;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }

  #restaurant-modal .sections .section.basket {
    position: fixed;
    top: 0;
    left: 0;
    background: #b3b3b3;
    height: 56px;
    width: 64px;
    opacity: 0.9;
  }

  #restaurant-modal .product-sections {
    min-height: 200px;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
  }

  #restaurant-modal .product-sections .product-section {
    min-height: 200px;
    width: 100vw;
    border-left: 1px solid blue;
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .animated.delay-1s {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  .animated.delay-2s {
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
  }

  .animated.delay-3s {
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }

  @-webkit-keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
  }

  @-webkit-keyframes bounceOut {
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }

    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
</style>
