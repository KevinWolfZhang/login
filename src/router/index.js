import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VantComponent from '../components/VantComponent'
import LoginViewComponent from '../components/login-view/LoginViewComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vant',
      name: 'VantCom',
      component: VantComponent
    },
    {
      path: '/in',
      name: 'LoginViewCom',
      component: LoginViewComponent
    }
  ]
})
