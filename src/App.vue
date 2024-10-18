<template>
  <Header />
  <div id="app">
    <img alt="Vue logo" src="./assets/UFMS.png">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';


export default {
  name: 'App',
  components: {
    Header, 
    Footer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

img {
  display: flow-root;
  padding-top: 30px;
  margin: auto;
}

.button-group {
  margin-top: 50px; 
  display: flex;
  justify-content: center;
}
</style>
