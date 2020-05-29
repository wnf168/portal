import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/Login'
import Index from 'pages/Index'
import Gis from 'pages/Gis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/gis',
      name: 'Gis',
      component: Gis
    }
  ]
})
