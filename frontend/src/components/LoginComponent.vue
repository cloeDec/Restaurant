<template>
  <div>
    <h1>Me connecter</h1>
    <form @submit.prevent="login()">
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
      <button>Me connecter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/user/login",
      {
        email: email.value,
        password: password.value,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    console.log("ok");
    localStorage.setItem("token", response.data.token);

    // Redirection vers la vue appropriée selon le rôle
    if (response.data.role === "admin") {
      router.push({ name: "ListAppointment" }); // Redirection pour admin
    } else {
      router.push({ name: "AddAppointment" }); // Redirection pour les autres utilisateurs
    }
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
  margin: auto; /* Centrer le formulaire */
  padding: 20px; /* Espacement interne */
  border: 1px solid #666; /* Bordure du formulaire plus sombre */
  border-radius: 5px; /* Coins arrondis */
  background-color: #e0e0e0; /* Couleur de fond plus sombre */
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
