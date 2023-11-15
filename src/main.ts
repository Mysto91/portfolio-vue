import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './index.css';

router.beforeEach((to, from, next) => {
  // Scroll en haut de la page avant de naviguer vers la nouvelle route
  window.scrollTo(0, 0);
  next();
});

createApp(App).use(router).mount('#app');
