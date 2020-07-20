import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import select from '@/components/select'
import AppIndex from '@/components/AppIndex'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/AppIndex',
      name: 'AppIndex',
      component: AppIndex
    }
  ],
  // mode: 'history',
  proxyTable: {
    '/api': {
      target: 'http://localhost:8082',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
})
