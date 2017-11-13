<template>
	<div id="home">
		<input v-model="form.username" type="text" placeholder="手机号码" />
		<input v-model="form.password" type="password" placeholder="密码" />
		<button type="button" @click="onSubmit">登录</button>
		<div class="regin_enter">
			<router-link to='register/register'>注册</router-link> |
			<router-link to='forget/forgetPassword'>忘记密码</router-link>
		</div>

	  <div class="movie-view has-header">
			<p>{{test}}</p>
			<button @click = 'add'>++</button>
			<button @click = 'remove'>--</button>
			<p>组件自己的内部计算属性 {{ localComputed }}</p>
			<button @click="ceshi">kkk</button>
	  </div>
	</div>
</template>

<script>
//	import axios from 'axios'
	import axios from '../router/axiosConfig.js'
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name: "home",
		data() {
			return {
				form: {
					username: 'admin',
					password: '123456',
					remember: 'true'
				}
			}
		},
		computed: {
			...mapState({
				//test计算属性，相当于var a，state=>返回state login为store里 index.js定义的名字
				test:state => state.login.info
			}),
			localComputed(){
//				return this.$store.getter.login.anotherWay
			}
		},
		methods: {
			...mapActions(['add', 'remove']),
			ceshi(){
				this.$store.dispatch('ceshi', {value:this.form.username, another:this.localComputed})
			},
			onSubmit() {
				var _this = this;
				var url = "/login";
				var params = {
							username: this.form.username,
							password: this.form.password					
				};
				console.log(this.$store.state.user.user_name)
//				axios({
//					method:'get',
//					url:'/login',
//					params:{
//						'username':'admin',
//						'password':'123456'
//					}
//				})
//				.then((response) => {
//					resolve(response)
//				})
				axios.post(url, params)
					.then(function(response) {
						if(response.data) {
							_this.$store.state.user.user_name =  _this.form.username;
							console.log(response.data.msg);
							_this.$router.push('/pages/userinfo');
						} else {

						}
					})
					.catch(function(response) {
						console.log('err')
						//_this.$router.push('/content');
					});
			}
		}
	}
</script>

<style lang="scss">
	/*@import '../../static/style/common.scss';*/
</style>