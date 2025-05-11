import { createRouter, createWebHistory } from 'vue-router';
import Map from '../pages/Map.vue';

const routes = [
  { path: '/', name: 'Map', component: Map },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
