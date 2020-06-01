import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/Login'
import Gis from 'pages/Gis'
import Map from 'com/Map'
import Momicenter from 'com/Momicenter'

import Home from 'pages/Home'
import waterData from 'com/waterData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'momicenter',
      children:[
        {
          path: '/momicenter',
          name: 'momicenter',
          component: Momicenter
        },
        {
          path: '/waterData',
          name: 'waterData',
          component: waterData
        },
      ]
    },
    {
      path: '/gis',
      name: 'Gis',
      component: Gis,
      children:[
        {
          path: '/',
          name: 'Map',
          component: Map
        }
        
      ]
    }
  ]
})
