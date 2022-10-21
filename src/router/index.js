import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import AfterLogin from '../views/AfterLogin.vue'
import TestSignUp from '../views/TestSignUp.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }

  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },

  {
    path: '/afterLogin',
    name: 'afterLogin',
    component: AfterLogin
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/testSignup',
    name: 'testSignup',
    component: TestSignUp
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
