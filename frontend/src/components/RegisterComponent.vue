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
  color: #fff;
  text-align: center;
}

form {
  width: 400px;
  height: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #666;
  border-radius: 5px;
  background-color: #e0e0e0;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #ffcc00;
}
</style>
