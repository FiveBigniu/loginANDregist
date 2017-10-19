import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

import Login from '../page/Login.vue'
import PageView from '../page/PageView.vue'
import UserInfo from '../page/UserInfo.vue'
import List from '../page/List.vue'

Vue.use(Router)

const router = new Router({
	mode:'history',
  routes:[{
    path:'/',component:Login
  },{
  	path:'/pages',
  	component:PageView,
  	children: [
	    {
	      path: '',
	      redirect: '/pages/userinfo'
	    },
  		{
  			path:'pageview',
  			name:'pageview',
  			component:PageView
  		},
  		{
  			path:'userinfo',
  			name:'userinfo',
  			component:UserInfo
  		},{
  			path:'lift',
  			name:'lift',
  			component:List
  		}
  	]
  }
//,{
//  path:'/login',name:'login',component:Login
//},{
//  path:'/pageview',name:'pageview',component:PageView
//},{
//  path:'/userinfo',name:'userinfo',component:UserInfo
//},{
//  path:'/lift',name:'lift',component:Lift
//}
  ]
})

export default router;
