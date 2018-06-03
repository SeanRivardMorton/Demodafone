import Vue from 'vue';
import Router from 'vue-router';
import BuyPhone from './views/BuyPhone.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BuyPhone',
      component: BuyPhone
    }
  ]
});
