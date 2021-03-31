<template>
  <div id="app">
    
    <Header />
    <router-view path="$router.key" />
    <Footer />
 
  </div>
</template>

<script>
import './styles/global.css';
import Header from './components/header';
import Footer from './components/footer';



export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>

</style>
