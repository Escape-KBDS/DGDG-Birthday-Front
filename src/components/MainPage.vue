<template>
  <HeaderComponent>dd</HeaderComponent>
  <!-- <div style="height: 1000px;"></div> -->
  <div class="container">
    <p>container</p>
  </div>
  <FooterComponent>dd</FooterComponent>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default {
    name: "MainPage",
    components: {
      HeaderComponent,FooterComponent
    }
}
</script>

<style>
</style>