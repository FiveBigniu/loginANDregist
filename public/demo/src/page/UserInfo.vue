<template>
	<div id="chose">
		<div class="content">
	        <div class="weui-cells">
	            <a class="weui-cell weui-cell_access" href="javascript:;">
	                <div class="weui-cell__bd">
	                    <p>name:{{username}}</p>
	                </div>
	            </a>
	            <a class="weui-cell weui-cell_access" href="javascript:;">
	                <div class="weui-cell__bd">
	                    <p>friend-click</p>
	                </div>
	            </a>
	            <a class="weui-cell weui-cell_access" href="javascript:;">
	                <div class="weui-cell__bd">
	                    <p>test1</p>
	                </div>
	            </a>
	            <a class="weui-cell weui-cell_access" href="javascript:;">
	                <div class="weui-cell__bd">
	                    <p>test2</p>
	                </div>
	            </a>            
	        </div>		
			<div>
				<form action="/talkMsg" method="post">
					<input type="text" name="talkMsg" v-model="talkMsg" value="" />
					<input type="text" name="userid" v-model="userid" value="" />
					<input type="button" value="发布"  @click="onSubmit"/>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from '../router/axiosConfig.js'
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name:"chose",
		data() {
			return {
				labelPosition: 'left',
				username:'',
				talkMsg:'',
				userid:2
			}
		},
		methods: {
			goback() {
				this.$router.back(-1);
			},	
			computed: {
				...mapState({
					test:state => state.user.user_name
				})
			},			
			onSubmit() {
				var url = "/setSquareList";
				var params = {
					talkMsg: this.talkMsg,
					userid: this.userid					
				};
				console.log(this.$store.state.user.user_name+"///");
//				axios.post(url, params)
//					.then(function(response) {
//						if(response.data) {
//							console.log(response.data.msg);
//						} else {
//
//						}
//					})
//					.catch(function(response) {
//						console.log('err')
//					});
			}
		}		

	}
</script>

<style lang="scss">

</style>