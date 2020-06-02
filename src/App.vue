<template>
  <div id="app">
    <app-header />    

    <main class="main">
      <router-view />
    </main>

    <app-footer />    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: "App",
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
};
</script>

<style lang="scss">
  @import '@/assets/styles/styles';

  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f7f7f7;
  }
</style>
