import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router =  new Router({
//   mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
},
linkExactActiveClass: "active",
// linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
        path: '/speakers',
        name: 'speakers',
        component: () => import('./views/Speakers.vue'),
      },
      {
        path: '/schedule',
        name: 'schedule',
        component: () => import('./views/Schedule.vue'),
      },
    //   {
    //     path: '/event-types',
    //     name: 'event-types',
    //     component: () => import('./views/EventTypes.vue'),
    //   },
  ],
});

router.beforeEach((to, from, next) => {
    // const currentUser = firebase.auth().currentUser;
    // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
    // if (requiresAuth && !currentUser) next('login');
    // else if (!requiresAuth && currentUser) next('/');
    // else if(to.path === '/login' && currentUser)
    //     next('/');
    // else next();
    next();
  });

  router.afterEach((to, from) => {
    const el = document.getElementsByClassName("navbar-collapse")[0];
    if(el){
        el.classList.remove('in');
    }
});
  
  export default router;
