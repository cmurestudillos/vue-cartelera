<template>
  <div id="app">
    <NavbarComponent></NavbarComponent>

    <router-view class="ontainer main-container"></router-view>

    <!-- Limpiar los float -->
    <div class="clearfix"></div>
    <FooterComponent></FooterComponent>    
  </div>
</template>

<script>
import NavbarComponent from './components/shared/navbar/NavbarComponent.vue';
import FooterComponent from './components/shared/footer/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>

<style>
  @import './assets/css/App.css';
</style>
