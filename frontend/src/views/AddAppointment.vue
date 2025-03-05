<script setup>
import { ref, watch } from "vue";
import axios from "axios";
import Navbar from "../components/Navbar.vue";

const user = ref("");
const startDate = ref("");
const endDate = ref("");
const nbCouvert = ref("");

watch(startDate, (newStartDate) => {
  if (newStartDate) {
    const start = new Date(newStartDate);
    start.setHours(start.getHours() + 3);
    endDate.value = start.toISOString().slice(0, 16); // Format pour datetime-local
  }
});

const add = async () => {
  const token = localStorage.getItem("token");

  // Vérification des valeurs avant l'envoi
  console.log("Valeur de startDate:", startDate.value);
  console.log("Valeur de endDate:", endDate.value);

  if (!startDate.value) {
    console.error("startDate est requis.");
    return; // Sortir de la fonction si startDate est vide
  }

  try {
    const response = await axios.post(
      "http://localhost:3000/appointment/create",
      {
        user: user.value,
        startDate: startDate.value,
        endDate: endDate.value,
        nbCouvert: nbCouvert.value,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error);
    console.log(error.response.data);
  }
};
</script>

<template>
  <Navbar />
  <div class="appointment-container">
    <div>
      <h1>Faire une Réservervation</h1>
      <form @submit.prevent="add()">
        <div>
          <label for="nbCouvert">Nombre de personnes</label>
          <input v-model="nbCouvert" type="number" id="nbCouvert" required />
        </div>
        <div>
          <label for="startDate">Date</label>
          <input
            v-model="startDate"
            type="datetime-local"
            id="startDate"
            required
          />
        </div>
        <div for="endDate" style="display: none">
          <input v-model="endDate" type="datetime-local" id="endDate" />
        </div>
        <button>Envoyer la demande</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.appointment-container {
  max-width: 600px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
