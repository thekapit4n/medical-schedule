import { createRouter, createWebHistory } from 'vue-router'
import DoctorSchedule from '../views/DoctorSchedule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'doctor-schedule',
      component: DoctorSchedule,
    },
  ],
})

export default router
