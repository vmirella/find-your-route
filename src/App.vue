<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>

<script>
require('./scss/index.scss');
/* import HelloWorld from './components/HelloWorld.vue' */

export default {
  name: 'App',
  components: {
    /* HelloWorld */
  }
}
</script>
