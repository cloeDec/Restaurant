<script setup>
import Navbar from "../components/Navbar.vue";
import LoginComponent from "../components/LoginComponent.vue";
import RegisterComponent from "../components/RegisterComponent.vue";
</script>

<template>
  <div class="main-container">
    <Navbar />
    <div class="background-image"></div>
    <div class="component">
      <div class="auth-container">
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  margin-top: 60px;
  min-height: 100vh;
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

.component {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  padding: 20px;
}

.auth-container {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}

/* Pour les écrans moyens */
@media (max-width: 968px) {
  .auth-container {
    gap: 30px;
    padding: 0 15px;
  }
}

/* Pour les petits écrans */
@media (max-width: 640px) {
  .component {
    padding: 10px;
  }

  .auth-container {
    flex-direction: column;
    align-items: center;
  }

  :deep(LoginComponent),
  :deep(RegisterComponent) {
    width: 100%;
    max-width: 400px;
  }
}
</style>
