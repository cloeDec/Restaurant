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
      router.push({ name: "ListAppointment" }); 
    } else {
      router.push({ name: "AddAppointment" }); 
    }
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
