<template>
  <Navbar />
  <div class="background-image">
    <div class="calendar">
      <vue-cal
        locale="fr"
        :events="appointments"
        :disable-views="['years', 'year']"
        @event-click="showEventDetails"
        :time="true"
        :time-from="10 * 60"
        :time-to="24 * 60"
      />

      <!-- Modal pour afficher les détails -->
      <div
        v-if="selectedEvent"
        class="modal-overlay"
        tabindex="-1"
        role="dialog"
        @click.self="selectedEvent = null"
      >
        <div class="modal-container">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Détails de la réservation</h5>
              <button
                type="button"
                class="close-button"
                @click="selectedEvent = null"
              >
                ×
              </button>
            </div>
            <div class="modal-body">
              <p><strong>User :</strong> {{ selectedEvent.user }}</p>
              <p>
                <strong>Nombre de personnes :</strong>
                {{ selectedEvent.nbCouvert }}
              </p>
              <p>
                <strong>Date :</strong> {{ formatDate(selectedEvent.start) }}
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="close-modal-button"
                @click="selectedEvent = null"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="selectedEvent" class="modal-backdrop fade show"></div>
    </div>
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
      nbCouvert: appt.nbCouvert,
      user: appt.user,
      start: new Date(appt.startDate),
      _eid: appt._id,
      end: new Date(appt.endDate),
      class: "reserved-slot",
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
  position: relative;
  margin: 100px;
  background-color: #fff;
  z-index: 2;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
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
  z-index: 1;
}

.vue-cal {
  background-color: white;
  position: relative;
  z-index: 2;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-footer button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
}

.modal-footer button:hover {
  background-color: #ffcc00;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-content {
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0 5px;
}

.close-button:hover {
  color: #333;
}

.modal-body {
  margin-bottom: 20px;
}

.modal-body p {
  margin: 10px 0;
  color: #666;
}

.modal-body strong {
  color: #333;
}

.modal-footer {
  border-top: 1px solid #eee;
  padding-top: 15px;
  display: flex;
  justify-content: flex-end;
}

.close-modal-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.close-modal-button:hover {
  background-color: #ffcc00;
}

:deep(.reserved-slot) {
  background-color: #333 !important;
  color: white !important;
  border-radius: 4px;
  opacity: 0.9;
}

:deep(.reserved-slot:hover) {
  opacity: 1;
  background-color: #ffcc00 !important;
}
</style>
