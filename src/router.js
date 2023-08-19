import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from './components/HelloWorld'
import DGDG from './components/DGDG'
import MainPage from './components/MainPage'

const routes = [
  {
    path: "/",
    component: DGDG,
  },
  {
    path: "/DGDG",
    component: HelloWorld,
  },
  {
    path: '/main',
    component: MainPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 