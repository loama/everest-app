<template>
    <!-- App -->
    <div class="app">
      hola
    </div>
</template>
<script>
// Import Routes...
import routes from './routes.js'

let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

export default {
  data() {
    return {
      msg: ''
    }
  }
}
</script>
