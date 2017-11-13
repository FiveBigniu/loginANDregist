<template>
	<div id="chose">
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="1">
		    <!--<img slot="icon" >-->
		    <router-link :to="{name: 'center'}">list1</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="2">
		  	<!--<img slot="icon" >-->
		    <router-link :to="{name: 'lift'}">list2</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="3">
		    <!--<img slot="icon" >-->
		    <router-link :to="{name: 'center'}">list1</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="4">
		    <!--<img slot="icon" >-->
		    <router-link :to="{name: 'userinfo'}">self</router-link>
		  </mt-tab-item>
		</mt-tabbar>
		
		<!--<mt-tabbar v-model="selected">
		  <mt-tab-item id="1">
		    <img slot="icon" >
		    <router-link :to="{name: 'center'}">list1</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="2">
		  	<img slot="icon" >
		    <router-link :to="{name: 'lift'}">list2</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="3">
		    <img slot="icon" >
		    <router-link :to="{name: 'center'}">list1</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="4">
		    <img slot="icon" >
		    <router-link :to="{name: 'userinfo'}">self</router-link>
		  </mt-tab-item>
		</mt-tabbar>-->
		
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		    <!--<router-link :to="{name: 'userinfo'}">list1</router-link>-->
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <!--<router-link :to="{name: 'lift'}">list2</router-link>-->
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <!--<router-link :to="{name: 'center'}">list1</router-link>-->
		  </mt-tab-container-item>
		  <mt-tab-container-item id="4">
		    <!--<router-link :to="{name: 'userinfo'}">self</router-link>-->
		  </mt-tab-container-item>  
		</mt-tab-container>
	</div>
</template>

<script>
	import Vue from 'vue'
//	import { Tabbar, TabItem } from 'mint-ui'
//	Vue.component(Tabbar.name, Tabbar);
//	Vue.component(TabItem.name, TabItem);
	export default {
		name: "chose",
		data() {
			return {
				selected: '1'
			}
		},
		methods: {

		},
		watch: {
			selected:function(val, oldVal) {
				console.log(val+"/"+oldVal);
			}
		}
	}
</script>

<style lang="scss">

</style>