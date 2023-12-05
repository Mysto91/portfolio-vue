import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { vue3Debounce } from 'vue-debounce';
import { register } from 'swiper/element/bundle';
import App from './App.vue';
import router from './router';

import 'swiper/swiper-bundle.css';
import './index.css';

router.beforeEach((to, from, next) => {
  // Scroll en haut de la page avant de naviguer vers la nouvelle route
  window.scrollTo(0, 0);
  next();
});

const pinia = createPinia();

register();

createApp(App)
  .use(router)
  .use(pinia)
  .directive('debounce', vue3Debounce({ lock: true }))
  .mount('#app');
