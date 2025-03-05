import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Reservation from "../views/Reservation.vue";
import AddAppointment from "../views/AddAppointment.vue";
import ListAppointment from "@/views/ListAppointment.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/reservation",
      component: Reservation,
    },

    {
      path: "/add-appointment",
      name: "AddAppointment",
      component: AddAppointment,
    },
    {
      path: "/list-appointment",
      name: "ListAppointment",
      component: ListAppointment,
    },
  ],
});

export default router;
