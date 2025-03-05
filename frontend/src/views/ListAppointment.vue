<template>
  <Navbar />
  <div class="calendar">
    <h2>Calendrier des réservation</h2>
    <vue-cal
      locale="fr"
      :events="appointments"
      :disable-views="['years', 'year']"
      @event-click="showEventDetails"
      :time="true"
    />

    <!-- Modal pour afficher les détails -->
    <div v-if="selectedEvent" tabindex="-1" role="dialog">
      <div>
        <div>
          <div>
            <h5>Détails du rendez-vous</h5>
            <button type="button" @click="selectedEvent = null"></button>
          </div>
          <div>
            <p><strong>Titre:</strong> {{ selectedEvent.title }}</p>
            <p><strong>Date:</strong> {{ formatDate(selectedEvent.start) }}</p>
          </div>
          <div>
            <button type="button" @click="selectedEvent = null">Fermer</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedEvent" class="modal-backdrop fade show"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import axios from "axios";
import Navbar from "../components/Navbar.vue";

const appointments = ref([]);
const selectedEvent = ref(null);
const token = localStorage.getItem("token");

const fetchAppointments = async () => {
  try {
    const response = await axios.get("http://localhost:3000/appointment/user", {
      withCredentials: true,
    });
    appointments.value = response.data.map((appt) => ({
      description: appt.description,
      start: new Date(appt.startDate),
      _eid: appt._id,
      end: new Date(appt.endDate),
    }));
  } catch (error) {
    console.error("Erreur lors du chargement des rendez-vous", error);
  }
};

const showEventDetails = (event) => {
  selectedEvent.value = event;
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

onMounted(fetchAppointments);
</script>

<style scoped>
.calendar {
  margin: 50px;
}
h2 {
  color: #ffcc00; /* Couleur du titre */
  text-align: center; /* Centrer le titre */
}

.modal-backdrop {
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Fond semi-transparent pour le modal */
}

button {
  background-color: #008cba; /* Couleur de fond des boutons */
  color: white; /* Couleur du texte des boutons */
  border: none; /* Pas de bordure */
  padding: 10px 20px; /* Espacement interne */
  text-align: center; /* Centrer le texte */
  text-decoration: none; /* Pas de soulignement */
  display: inline-block; /* Affichage en ligne */
  margin: 4px 2px; /* Marges autour des boutons */
  cursor: pointer; /* Curseur en main au survol */
}

button:hover {
  background-color: #005f73; /* Couleur au survol */
}
</style>
