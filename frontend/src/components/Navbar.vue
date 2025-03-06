<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="navbar">
    <ul>
      <li><a href="/">Accueil</a></li>
      <li><a href="/reservation">Réservations</a></li>
      <li><a href="/menu">Menu</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin: 0 1rem;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.navbar a:hover {
  color: #ffcc00;
}
</style>
