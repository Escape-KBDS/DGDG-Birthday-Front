import { createWebHistory, createRouter } from "vue-router"
import DGDG from './components/DGDG'

const routes = [
  {
    path: "/",
    component: DGDG,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 