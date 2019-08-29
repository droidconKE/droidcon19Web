import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/2020/Home20.vue';
import firebase from './services/Firebase';
// import store from './store'


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
      component: Home,
    },
    {
      path: '/about',
      component: () => import('./views/About.vue'),
    },
    {
        path: '/2019/speakers',
        component: () => import('./views/2019/Speakers.vue'),
        },
        {
        path: '/2019/schedule',
        component: () => import('./views/2019/Schedule.vue'),
        },
        {
        path: '/2019/starred',
        component: () => import('./views/2019/Stared.vue'),
        meta: {
            protected: true
        },
        },
        {
        path: '/2019',
        component: () => import('./views/2019/Home19.vue'),
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
