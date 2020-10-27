import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Detail from '@/pages/Detail.vue'
import List from '@/pages/List.vue'
import Search from '@/pages/Search.vue'
import City from '@/pages/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  ]
})
