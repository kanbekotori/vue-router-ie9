import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home'
import Page1 from '../page1'
import Page2 from '../page2'


// 页面路由配置
Vue.use(Router)

let router = new Router({
  routes: [
    { name: 'Home', path: '/', component: Home },
    { name: 'Page1', path: '/page1', component: Page1 },
    { name: 'Page2', path: '/page2', component: Page2 }
  ]
})

export default router
