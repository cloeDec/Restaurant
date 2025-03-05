<template>
  <div>
    <h1>Créer mon compte</h1>
    <form @submit.prevent="register()">
      <div value="user"></div>
      <div>
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div>
        <label for="confirmPassword">Confirmer mot de passe</label>
        <input
          v-model="confirmPassword"
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          required
        />
      </div>
      <button>Enregistrer</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const role = ref("");

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  try {
    const response = await axios.post("http://localhost:3000/user/register", {
      email: email.value,
      password: password.value,
      role: role.value,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
h1 {
  color: #fff; /* Couleur du titre plus sombre */
  text-align: center; /* Centrer le titre */
}

form {
  width: 400px; /* Largeur fixe du formulaire */
  height: 400px; /* Hauteur fixe du formulaire */
  padding: 20px; /* Espacement interne */
  border: 1px solid #666; /* Bordure du formulaire plus sombre */
  border-radius: 5px; /* Coins arrondis */
  background-color: #e0e0e0; /* Couleur de fond plus sombre */
  justify-content: center;
  align-items: center; /* Centrer horizontalement les éléments */
}

div {
  margin-bottom: 15px; /* Espacement entre les champs */
}

label {
  display: block; /* Afficher le label en bloc */
  margin-bottom: 5px; /* Espacement sous le label */
}

input {
  width: 100%; /* Largeur complète des champs */
  padding: 10px; /* Espacement interne des champs */
  border: 1px solid #ccc; /* Bordure des champs */
  border-radius: 4px; /* Coins arrondis des champs */
}

button {
  width: 100%; /* Largeur complète du bouton */
  padding: 10px; /* Espacement interne du bouton */
  background-color: #333; /* Couleur de fond du bouton plus sombre */
  color: white; /* Couleur du texte du bouton */
  border: none; /* Pas de bordure */
  border-radius: 4px; /* Coins arrondis du bouton */
  cursor: pointer; /* Curseur en main au survol */
}

button:hover {
  background-color: #27632a; /* Couleur au survol plus sombre */
}
</style>
