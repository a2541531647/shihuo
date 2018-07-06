import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Discounts from './views/Discounts.vue'
import Find from './views/Find.vue'
import Equipment from './views/Equipment.vue'
import More from './views/More.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/discounts',
      name: 'discounts',
      component: Discounts
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: Equipment
    },
    {
      path: '/more',
      name: 'more',
      component: More
    }
  ]
})
