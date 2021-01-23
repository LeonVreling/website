<template>
  <div id="app">
    <Sidebar/>
    <div id="main">
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #C8EFF9;
  color: #022449;
}

#main {
  margin-left: 10vw;
}
</style>
