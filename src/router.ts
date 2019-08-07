import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import firebase from './services/Firebase';


Vue.use(Router);

const router =  new Router({
  mode: 'history',
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
        path: '*', // or '/index.html'
        beforeEnter: (to, from, next) => {
          next('/')
        }
      },
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
      {
        path: '/starred',
        name: 'starred',
        component: () => import('./views/Stared.vue'),
        meta: {
            protected: true
        },
      },
      {
        path: '/2020',
        name: '2020',
        component: () => import('./views/2020/Home.vue'),
      },
  ],
});

router.beforeEach((to, from, next) => {
    if(!to.meta.protected) { //route is public, don't check for authentication
        next()
    } else {  //route is protected, if authenticated, proceed. Else, login
       firebase.auth().onAuthStateChanged((user: any) => {
            if(user) {
                next()
            } else {
                next('/schedule')
                const el = document.getElementsByClassName("modal-login")[0];
                // (document.querySelector(',modal-login') as HTMLElement).style.color = 'red';
                if(el){
                    el.classList.add('in');
                    (document.querySelector('.modal-login') as HTMLElement).style.display = 'block';
                    // el.style.display= 'block'
                }
            }
        })
    }
  });

  router.afterEach((to, from) => {
    const el = document.getElementsByClassName("navbar-collapse")[0];
    if(el){
        el.classList.remove('in');
    }
});
  
  export default router;
