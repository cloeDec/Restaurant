<template>
  <div class="main-container">
    <Navbar />
    <div class="background-image"></div>
    <div class="menu-container">
      <div class="menu-content">
        <h1>Notre Carte</h1>

        <section class="menu-section">
          <h2>Entrées</h2>
          <div class="menu-items">
            <div class="menu-item">
              <div class="item-header">
                <h3>Salade César</h3>
                <span class="price">12€</span>
              </div>
              <p>
                Laitue romaine, croûtons, parmesan, poulet grillé, sauce césar
                maison
              </p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <h3>Soupe à l'Oignon</h3>
                <span class="price">9€</span>
              </div>
              <p>
                Oignons caramélisés, bouillon maison, croûtons gratinés au
                fromage
              </p>
            </div>
          </div>
        </section>

        <section class="menu-section">
          <h2>Plats Principaux</h2>
          <div class="menu-items">
            <div class="menu-item">
              <div class="item-header">
                <h3>Filet de Bœuf</h3>
                <span class="price">28€</span>
              </div>
              <p>
                Filet de bœuf grillé, sauce au poivre, pommes dauphinoises,
                légumes de saison
              </p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <h3>Saumon en Croûte</h3>
                <span class="price">24€</span>
              </div>
              <p>
                Filet de saumon en croûte d'herbes, risotto aux champignons,
                sauce citron
              </p>
            </div>
          </div>
        </section>

        <section class="menu-section">
          <h2>Desserts</h2>
          <div class="menu-items">
            <div class="menu-item">
              <div class="item-header">
                <h3>Crème Brûlée</h3>
                <span class="price">8€</span>
              </div>
              <p>Crème brûlée à la vanille de Madagascar</p>
            </div>
            <div class="menu-item">
              <div class="item-header">
                <h3>Tarte Tatin</h3>
                <span class="price">9€</span>
              </div>
              <p>Tarte aux pommes caramélisées, glace vanille</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

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
  z-index: 0;
}

.menu-container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.menu-content {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  padding: 30px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 2.5em;
}

.menu-section {
  margin-bottom: 40px;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #ffcc00;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.menu-items {
  display: grid;
  gap: 20px;
}

.menu-item {
  padding: 15px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.menu-item:hover {
  transform: translateY(-2px);
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

h3 {
  color: #333;
  margin: 0;
  font-size: 1.2em;
}

.price {
  color: #ffcc00;
  font-weight: bold;
  font-size: 1.2em;
}

p {
  color: #666;
  margin: 0;
  font-size: 0.9em;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-content {
    padding: 20px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 30px;
  }

  .menu-section {
    margin-bottom: 30px;
  }

  .menu-items {
    gap: 15px;
  }

  .menu-item {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .menu-container {
    padding: 20px 10px;
  }

  h1 {
    font-size: 1.8em;
  }

  .menu-content {
    padding: 15px;
  }

  .item-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }

  .price {
    font-size: 1em;
  }
}
</style>
