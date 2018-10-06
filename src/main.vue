<template>
  <!-- App -->
  <div class="app">
    <div id="header" v-bind:class="{active: qr.reading}">
      <div class="scan" v-on:click="startReading()">
        <img src="./assets/images/qr.svg">
      </div>
      <div class="title">everest</div>
    </div>
  </div>
</template>
<script>
// Import Routes...

export default {
  data() {
    return {
      qr: {
        reading: false
      }
    }
  },
  methods: {
    deviceReady () {
      StatusBar.styleLightContent()
      StatusBar.backgroundColorByHexString("#003FB9")
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
      alert('startReading')
      QRScanner.show()
    }
  },
  mounted () {
    var self = this
    document.addEventListener("deviceready", function(){self.deviceReady()}, false)
  }
}
</script>
<style>
  #header {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    height: 56px;
    width: 100vw;
    border-bottom: 1px solid #E0E0E0;
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
  }
</style>
