import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { Routes } from '@/constants/routes';
import AboutView from '@/views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectViewList from '../views/ProjectViewList.vue';
import ProjectView from '../views/ProjectView.vue';

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
    path: '/projects',
    name: Routes.PROJECTLIST,
    component: ProjectViewList,
  },
  {
    path: '/projects/:workId',
    name: Routes.PROJECT,
    component: ProjectView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
