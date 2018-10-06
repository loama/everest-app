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

    <div id="modal-overlay">
    </div>

    <div id="restaurant-modal">
    </div>
  </div>
</template>
<script>
// Import Routes...
let audioSuccess = new Audio('/static/NFCSuccess.ogg')

export default {
  data() {
    return {
      qr: {
        reading: false,
        result: ''
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
    qrResult (err, text) {
      if(err){
        // an error occurred, or the scan was canceled (error code `6`)
        alert(err)
      } else {
        // The scan completed, display the contents of the QR code:
        // audioSuccess.play()
        this.qr.result = text
        // QRScanner.hide()
        this.qr.reading = false
      }
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
    z-index: 10001;
    top: 0;
    left: 0;
    height: 28px;
    width: 100vw;
    background: #114AB9;
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
    z-index: 10000;
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
    height: calc(100vh - 56px);
    padding: 40px 8px;
    width: 100vw;
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
  }
</style>
