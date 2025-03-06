<script setup>
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);
</script>

<template>
  <main class="home">
    <Navbar />
    <div class="background-image"></div>
    <p class="stylish-text">Le Gourmet Moderne</p>
  </main>
</template>

<style scoped>
.home {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Roboto", sans-serif;
}

.background-image {
  position: fixed;
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

.stylish-text {
  font-size: 4rem;
  font-weight: 700;
  margin-top: 20px;
  position: relative;
  z-index: 1;
}
</style>
