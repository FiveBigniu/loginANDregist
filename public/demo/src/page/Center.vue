<template>
	<div>
		<p>show center</p>
		<input type="button" value="获取"  @click="getList"/>
		<hr />
		<!--<div v-for="item in lists">-->
			<mt-cell v-for="(items,index) in lists" :title=items.message :key='items.id'>
				<mt-button plain @click="pointLike(items.id)">+</mt-button>
			</mt-cell>
			
		<!--</div>-->
	</div>
</template>

<script>
	import axios from '../router/axiosConfig.js'
	export default {
		name:"chose",
		data() {
			return {
				lists:[],
			}
		},
		created(){
			this.getList();
		},
		methods: {	
			async getList() {
				var url = "/getSquareList";
				var params = {};
				this.lists = await axios.get(url, params)
					.then(function(response) {
//							console.log(response.data.msg);
							return response.data.msg.rows
					})
					.catch(function(response) {

					});
			},
			pointLike(index){
				var url = "/setLike";
				var params = {
					username: this.$store.state.user.user_name,
					status: 0,//点赞1 评论2
					square_id:index
				};

				axios.post(url, params)
					.then(function(response) {
						console.log(response.data.msg);
					})
					.catch(function(response) {
						console.log(response.data.msg+"err");
					});
			}
		}		

	}
</script>

<style>
</style>