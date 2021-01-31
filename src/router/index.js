import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Spotify from '@/components/Spotify'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/spotify/',
      name: 'Spotify',
      component: Spotify
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
