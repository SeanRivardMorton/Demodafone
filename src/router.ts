import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import BuyPhone from './views/BuyPhone.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BuyPhone',
      component: BuyPhone,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
