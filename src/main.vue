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
      <!-- <button v-on:click="openRestaurant()">hola</button> -->
      <img src="./assets/images/preview.png">
      <div class="text">Go ahead and look for QR codes, you can see restaurant menus, order food and pay!</div>
    </div>

    <div id="modal-overlay" v-on:click="closeResultModal()" v-bind:class="{active: qr.result !== ''}">
    </div>

    <div id="restaurant-modal" v-bind:class="{active: qr.result !== ''}">
      <div class="header" v-bind:style="{background: qr.resultApi.color}">
        <img class="logo" :src="qr.resultApi.logo">
        <div class="close" v-on:click="closeResultModal()">
            <img src="./assets/images/close-white.svg">
        </div>
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
          <div class="section basket" v-on:click="openBasket()">
            <div class="numberOfProducts">{{qr.basketNumberOfProducts}}</div>
            <img src="./assets/images/shopping_basket.svg">
          </div>
        </div>
      </div>
      <div class="product-sections" v-bind:style="{width: qr.productSectionsWidth, transform: qr.sectionsOffset}">
        <div v-for="productSection in qr.resultApi.sections" class="product-section">
          <div class="product"
               v-for="product in qr.resultApi.products"
               v-if="productSection === product.section">
               <img :src="product.img">
               <div class="title">{{product.name}}</div>
               <div class="description">{{product.description}}</div>
               <div class="price">${{product.price}}</div>
               <div class="add" v-on:click="add(product.name)">
                 <img src="./assets/images/add.svg">
               </div>
          </div>
        </div>
      </div>
    </div>

    <div id="basket-overlay" v-bind:class="{active: qr.basketOpen}" v-on:click="qr.basketOpen = false"></div>

    <div id="basket-modal" v-bind:class="{active: qr.basketOpen}">
      <div class="products">
        <div class="title">Products</div>

        <div class="product" v-for="product in qr.basket">
          <img :src="product.img">
          <div class="title">{{product.name}}</div>
          <div class="description">{{product.description}}</div>
          <div class="amount">({{product.amount}} x {{product.price}})</div>
          <div class="price">{{product.amount * parseFloat(product.price)}}</div>
        </div>
      </div>

      <div class="cards">
        <div class="card" v-bind:class="{active: qr.cardActive === 1}" v-on:click="qr.cardActive = 1">
          <img src="./assets/images/visa.png">
          <div class="last-4">8575</div>
        </div>

        <div class="card" v-bind:class="{active: qr.cardActive === 2}" v-on:click="qr.cardActive = 2">
          <img src="./assets/images/mastercard.png">
          <div class="last-4">9788</div>
        </div>

        <div class="card" v-bind:class="{active: qr.cardActive === 3}" v-on:click="qr.cardActive = 3">
          <img src="./assets/images/american_express.png">
          <div class="last-4">8786</div>
        </div>
      </div>

      <div class="pay-button" v-on:click="createFingerPrint()">
        Pay ${{qr.basketTotal.toFixed(2)}}
      </div>

      <div class="payment-confirmation" v-bind:class="{active: qr.paymentSuccess}">
        Thanks for your payment!

        <div class="close-button" v-on:click="closeConfirmation()">
          <div class="text">close</div>
          <div class="timer" v-bind:class="{zero: qr.paymentSuccess}"></div>
          <div class="timer-background"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import axios from 'axios'

let audioClick = new Audio('/static/camera_click.ogg')
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
        sectionsOffset: '0',
        basket: [],
        basketNumberOfProducts: 0,
        basketTotal: 0,
        basketOpen: false,
        cardActive: 1,
        paymentSuccess: false
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
      this.changeProductSection(result.sections[0])
      this.qr.sectionsWidth = (result.sections.length * 112).toString() + 'px'
      this.qr.productSectionsWidth = (result.sections.length * 100).toString() + 'vw'
      this.qr.basket = []
      this.qr.basketNumberOfProducts = 0
      this.qr.basketTotal = 0
      this.qr.basketOpen = false
    },
    qrResult (err, text) {
      if(err){
        // an error occurred, or the scan was canceled (error code `6`)
        alert(err)
      } else {
        // The scan completed, display the contents of the QR code:
        audioClick.play()
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
    },
    openRestaurant () {
      var text = 'https://loteria.tech/t/a6TMr'
      this.qr.result = text
      var code = text.split('/')[4]
      axios
        .get('https://us-central1-loteria-api-3164c.cloudfunctions.net/menu/' + code)
        .then(response => (this.processResult(response.data)))
      // QRScanner.hide()
      this.qr.reading = false
    },
    add (productName) {
      var alreadyInBasket = false
      var price = ''
      for (var i = 0; i < this.qr.basket.length; i++) {
        if (this.qr.basket[i].name === productName) {
          this.qr.basket[i].amount = this.qr.basket[i].amount + 1
          alreadyInBasket = true
          price = this.qr.basket[i].price
        }
      }
      if (!alreadyInBasket) {
        for (var i = 0; i < this.qr.resultApi.products.length; i++) {
          if (productName === this.qr.resultApi.products[i].name) {
            price = this.qr.resultApi.products[i].price
            var product = this.qr.resultApi.products[i]
            product.amount = 1
            this.qr.basket.push(product)
          }
        }
      }
      this.qr.basketTotal = this.qr.basketTotal + parseFloat(price)
      this.qr.basketNumberOfProducts = this.qr.basketNumberOfProducts + 1
    },
    openBasket () {
      this.qr.basketOpen = true
    },
    authenticateFingerprint () {
      var decryptConfig = {
        clientId: "myAppName",
        username: "currentUser",
        token: "c2RmZGZzZGZkc2Zld2ZnNHc="
      };

      FingerprintAuth.decrypt(decryptConfig, successCallback, errorCallback);

      function successCallback(result) {
          console.log("successCallback(): " + JSON.stringify(result));
          if (result.withFingerprint) {
              alert("ok");
              if (result.password) {
                  console.log("Successfully decrypted credential token.");
                  console.log("password: " + result.password);
              }
          } else if (result.withBackup) {
              alert("ok");
          }
      }

      function errorCallback(error) {
          if (error === FingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
              alert("FingerprintAuth Dialog Cancelled!");
          } else {
              alert('ok')
          }
      }
    },
    closeConfirmation () {
      this.qr.reading = false,
      this.qr.result = '',
      this.qr.resultApi = {
        code: '',
        name: '',
        color: '',
        logo: '',
        sections: [],
        products: []
      },
      this.qr.basket = [],
      this.qr.basketNumberOfProducts = 0,
      this.qr.basketTotal = 0,
      this.qr.basketOpen = false,
      this.qr.paymentSuccess = false
    },
    createFingerPrint () {
      var encryptConfig = {
        clientId: "myAppName",
        username: "currentUser",
        password: "currentUserPassword"
      };
      var self = this
      FingerprintAuth.encrypt(encryptConfig, successCallback, errorCallback);

      function successCallback(result) {
        audioSuccess.play()
        self.qr.paymentSuccess = true
        setTimeout(function () {
          self.qr.reading = false,
          self.qr.result = '',
          self.qr.resultApi = {
            code: '',
            name: '',
            color: '',
            logo: '',
            sections: [],
            products: []
          },
          self.qr.basket = [],
          self.qr.basketNumberOfProducts = 0,
          self.qr.basketTotal = 0,
          self.qr.basketOpen = false,
          self.qr.paymentSuccess = false
        }, 3000)
        if (result.withFingerprint) {
            console.log("Successfully encrypted credentials.");
            console.log("Encrypted credentials: " + result.token);
        } else if (result.withBackup) {
            console.log("Authenticated with backup password");
        }
      }

      function errorCallback(error) {
          if (error === FingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
              console.log("FingerprintAuth Dialog Cancelled!");
          } else {
              console.log("FingerprintAuth Error: " + error);
          }
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

  .app {
    font-family: 'MontserratThin'
  }

  #statusbar {
    position: fixed;
    z-index: 1001;
    top: 0;
    left: 0;
    height: 28px;
    width: 100vw;
    background: #3353C8;
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
    color: #3353C8;
    line-height: 56px;
    letter-spacing: -0.5px;
    font-weight: 600;
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
    padding: 64px 16px;
    width: calc(100vw - 16px);
    background: #FFFFFF;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
    font-size: 40px;
    font-weight: 600;
    color: #3353C8;
  }

  #home img {
    position: absolute;
    top: 0;
    left: -50%;
    z-index: -1;
  }

  #home > div.text {
    font-size: 32px;
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
    top: 24px;
    left: 0;
    min-height: 100vh;
    width: 100vw;
    background: #FFFFFF;
    transform: translate3d(0, 100vh, 0);
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

  #restaurant-modal .header .close {
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
    width: 56px;
  }

  #restaurant-modal .header .close img {
    margin: 16px;
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
    height: 56px;
    width: 64px;
  }

  #restaurant-modal .sections .section.basket .numberOfProducts {
    position: absolute;
    top: -12px;
    left: 44px;
    color: #FFFFFF;
    font-weight: 600;
  }

  #restaurant-modal .sections .section.basket img {
    margin: 24px 16px 16px 16px;
  }

  #restaurant-modal .product-sections {
    position: relative;
    min-height: 200px;
    max-height: calc(100vh - 136px);
    transform: translate3d(0, 0, 0);
    transition: all 0.3s;
  }

  #restaurant-modal .product-sections .product-section {
    display: inline-block;
    vertical-align: top;
    width: 100vw;
    max-height: calc(100vh - 136px);
    overflow-y: scroll;
  }

  #restaurant-modal .product-sections .product-section .product {
    position: relative;
  }

  #restaurant-modal .product-sections .product-section .product img {
    height: 80px;
    margin: 8px;
    max-width: 120px;
  }

  #restaurant-modal .product-sections .product-section .product .title {
    position: absolute;
    top: 8px;
    left: 128px;
    font-size: 16px;
    font-weight: 600;
  }

  #restaurant-modal .product-sections .product-section .product .description {
    position: absolute;
    top: 32px;
    left: 128px;
    max-width: calc(100% - 200px);
    overflow: hidden;
    max-height: 60px;
  }

  #restaurant-modal .product-sections .product-section .product .price {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  #restaurant-modal .product-sections .product-section .product .add {
    position: absolute;
    top: 40px;
    right: 20px;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    background: #0A0;
  }

  #restaurant-modal .product-sections .product-section .product .add img {
    height: 24px;
    width: 24px;
  }

  #basket-overlay {
    position: fixed;
    z-index: 1999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: #000000;
    opacity: 0.85;
    display: none;
  }

  #basket-overlay.active {
    display: block;
  }

  #basket-modal {
    position: fixed;
    z-index: 2000;
    bottom: 0;
    left: 0;
    min-height: 272px;
    width: 100vw;
    background: #FFFFFF;
    transition: all 0.3s;
    transform: translate3d(0, 100vh, 0);
  }

  #basket-modal.active {
    transform: translate3d(0, 0, 0);
  }

  #basket-modal .products {
    padding-top: 8px;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 148px;
  }

  #basket-modal .products > .title {
    font-size: 20px;
    font-weight: 600;
    width: 100%;
    border-bottom: 1px solid #F0F0F0;
    height: 32px;
  }

  #basket-modal .products .product {
    position: relative;
    height: 80px;
    margin-bottom: 12px;
  }

  #basket-modal .products .product img {
    height: 80px;
    position: absolute;
    top: 8px;
    left: 8px;
  }

  #basket-modal .products .product .title {
    position: absolute;
    top: 8px;
    left: 128px;
    font-weight: 600;
  }

  #basket-modal .products .product .description {
    position: absolute;
    top: 32px;
    left: 128px;
    max-width: calc(100% - 200px);
    text-align: left;
    max-height: 60px;
    overflow: hidden;
  }

  #basket-modal .products .product .price {
    position: absolute;
    top: 8px;
    right: 16px;
    font-size: 16px;
    font-weight: 600;
  }

  #basket-modal .products .product .amount {
    position: absolute;
    top: 28px;
    right: 8px;
  }

  .cards {
    position: absolute;
    bottom: 88px;
    left: 16px;
    height: 44px;
    width: calc(100% - 32px);
  }

  .card {
    position: relative;
    height: 56px;
    width: 80px;
    display: inline-block;
    text-align: center;
    border: 1px solid #E0E0E0;
    margin-left: 8%;
    border-radius: 4px;
    vertical-align: top;
  }

  .card.active {
    background: #1E88E5;
    color: white;
    font-weight: 600;
  }

  .card img {
    height: 40px;
  }

  .card:nth-child(2) img {
    position: absolute;
    top: 4px;
    left: 16px;
    height: 30px;
  }

  .card .last-4 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .pay-button {
    position: absolute;
    bottom: 16px;
    left: 16px;
    height: 44px;
    width: calc(100% - 32px);
    background: green;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    line-height: 44px;
    border-radius: 4px;
  }

  #basket-modal .payment-confirmation {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(80,250,100, 0.97);
    color: #FFFFFF;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    line-height: 120px;
    display: none;
  }

  #basket-modal .payment-confirmation.active {
    display: block;
  }

  .close-button {
    position: relative;
    height: 56px;
    width: 120px;
    margin-left: calc(50% - 60px);
    background: #FFFFFF;
    color: green;
    border-radius: 4px;
  }

  .close-button .text {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 56px;
    width: 120px;
  }

  .close-button .timer {
    position: absolute;
    z-index: 20000;
    left: 0;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: #090;
    border-radius: 0 0 2px 2px;
    transition: all 3s;
  }

  .close-button .timer.zero {
    width: 1%;
  }

  .close-button .timer-background {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: #E0E0E0;
    border-radius: 0 0 2px 2px;
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
