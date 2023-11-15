import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { Routes } from '@/constants/routes';
import AboutView from '@/views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import WorkViewList from '../views/WorkViewList.vue';
import WorkView from '../views/WorkView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: Routes.HOME,
    component: HomeView,
  },
  {
    path: '/about',
    name: Routes.ABOUT,
    component: AboutView,
  },
  {
    path: '/contact',
    name: Routes.CONTACT,
    component: ContactView,
  },
  {
    path: '/works',
    name: Routes.WORKLIST,
    component: WorkViewList,
  },
  {
    path: '/works/:workId',
    name: Routes.WORK,
    component: WorkView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
