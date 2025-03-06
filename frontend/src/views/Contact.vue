<template>
  <div class="main-container">
    <Navbar />
    <div class="background-image"></div>
    <div class="contact-container">
      <div class="contact-content">
        <h1>Nous Contacter</h1>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-section">
              <h2>Adresse</h2>
              <p>123 Avenue de la Gastronomie</p>
              <p>75001 Paris, France</p>
            </div>

            <div class="info-section">
              <h2>Horaires</h2>
              <p>Lundi - Samedi : 12h00 - 14h30</p>
              <p>19h00 - 22h30</p>
              <p>Dimanche : Fermé</p>
            </div>

            <div class="info-section">
              <h2>Contact</h2>
              <p>Téléphone : 01 23 45 67 89</p>
              <p>Email : contact@restaurant.fr</p>
            </div>

            <div class="social-links">
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Twitter</a>
            </div>
          </div>

          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874587201!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
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

.contact-container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.contact-content {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  padding: 30px;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
  font-size: 2.5em;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.contact-info {
  padding: 20px;
}

.info-section {
  margin-bottom: 30px;
}

h2 {
  color: #2c3e50;
  border-bottom: 2px solid #ffcc00;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

p {
  color: #666;
  margin: 5px 0;
  font-size: 1.1em;
  line-height: 1.6;
}

.social-links {
  margin-top: 30px;
  display: flex;
  gap: 15px;
}

.social-link {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.social-link:hover {
  background-color: #ffcc00;
}

.map-container {
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .map-container {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .contact-content {
    padding: 20px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 30px;
  }

  .info-section {
    margin-bottom: 20px;
  }

  .social-links {
    flex-wrap: wrap;
  }

  .social-link {
    padding: 8px 16px;
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 20px 10px;
  }

  h1 {
    font-size: 1.8em;
  }

  .contact-content {
    padding: 15px;
  }

  .map-container {
    height: 250px;
  }
}
</style>
