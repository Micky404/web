<template>
  <app-header />
      <router-view />
  <app-footer />
  
</template>

<script>
import AppHeader from "./components/layouts/AppHeader.vue"
import AppFooter from "./components/layouts/AppFooter.vue"

import "../public/assets/css/bootstrap.min.css"
import "../public/assets/font-awesome/css/font-awesome.min.css"
 
import "../public/assets/js/jquery-3.1.1.js"
import "../public/assets/js/bootstrap.min.js"
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,

  },
  data() {
    return {};
  }
};
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
body {
  margin-top: 0px !important;
}
section {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
