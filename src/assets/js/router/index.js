import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../../../views/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    /* {
      path: '/lista',
      name: 'list',
      component: List
    } */
  ]
});

export default router;