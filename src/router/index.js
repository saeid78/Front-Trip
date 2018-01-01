import Vue from 'vue'
import VueRouter from 'vue-router'
 
import Login from  '@/components/authentication/login.vue'
import Register from  '@/components/authentication/register.vue'
import Feed from '@/components/feed.vue'
import CreateFlight from '@/components/trip/Create.vue'
import Trip from '@/components/trip/trip.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      {
          path: "/login",
          component: Login,
          meta : {
            forVisitors: true
          }
    },
      { path: "/register",
        component: Register,
        meta : {
          forVisitors: true
        }
   },
   {
     path: "/feed",
     component: Feed,
     meta: {
       forAuth: true
     }
   },
   {
    path: "/trip",
    component: Trip,
    meta: {
      forAuth: true
    }
  },
   {
    path: "/create",
    component: CreateFlight,
    meta: {
      forAuth: true
    }
  }
  ],
  linkActiveclass: 'active',
  mode : 'history'
})
export default router
