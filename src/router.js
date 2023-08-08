import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from './components/HelloWorld'
import DGDG from './components/DGDG'

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/DGDG",
    component: DGDG,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 