import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import HelloWorld from '@/components/HelloWorld'
import Login from '../page/login.vue'

Vue.use(Router)

const router = new Router({
  routes:[{
    path:'/',component:Login
  },{
    path:'/login',name:'login',component:require('../page/login.vue')
  },{
    path:'/content',name:'content',component:require('../page/homePage/content.vue')
  },{
    path:'/village',name:'village',component:require('../page/villageLift/village.vue')
  },{
    path:'/lift',name:'lift',component:require('../page/villageLift/lift.vue')
  },{
    path:'/status',name:'status',component:require('../page/state/status.vue')
  },{
    path:'/restart',name:'restart',component:require('../page/state/restart.vue')
  },{
    path:'/record',name:'record',component:require('../page/state/record.vue')
  },{
    path:'/register',name:'register',component:require('../page/register/register.vue')
  },{
    path:'/forgetPassword',name:'forgetPassword',component:require('../page/forget/forgetPassword.vue')
  },{
    path:'/chose',name:'chose',component:require('../page/homePage/chose.vue')
  },{
    path:'/userInfo',name:'userInfo',component:require('../page/register/userInfo.vue')
  },
 //  {
  //  path:'/info',name:'info',component:require('../page/user/info.vue')
  // },{
  //  path:'/user',name:'info',component:require('../page/user/user.vue')
  // },
  {
    path:'/changePassword',name:'changePassword',component:require('../page/user/changePassword.vue')
  }
  ]
})

export default router;
