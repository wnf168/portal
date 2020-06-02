import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/Login'
import Gis from 'pages/Gis'
import Map from 'com/Map'
import Momicenter from 'com/Momicenter'

import Home from 'pages/Home'
import shiData from 'pages/shiData'
import shiDatapai from 'pages/shiDatapai'

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
          path: '/shiData',
          name: 'shiData',
          component: shiData
        },
        {
          path: '/shiDatapai',
          name: 'shiDatapai',
          component: shiDatapai
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
