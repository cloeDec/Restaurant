<script setup>
import Navbar from "../components/Navbar.vue";
import LoginComponent from "../components/LoginComponent.vue";
import RegisterComponent from "../components/RegisterComponent.vue";
</script>

<template>
  <div style="margin-top: 60px">
    <Navbar />
    <div class="background-image"></div>
    <div class="component">
      <LoginComponent />
      <RegisterComponent />
    </div>
  </div>
</template>

<style scoped>
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg");
  background-size: cover;
  background-position: center;
  filter: blur(6px);
  z-index: 0;
}

.component {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
