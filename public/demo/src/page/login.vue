<template>
	<div id="home">
		<input v-model="form.username" type="text" placeholder="手机号码" />
		<input v-model="form.password" type="password" placeholder="密码" />
		<button type="button" @click="onSubmit">登录</button>
		<div class="regin_enter">
			<router-link to='register/register'>注册</router-link> |
			<router-link to='forget/forgetPassword'>忘记密码</router-link>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "home",
		data() {
			return {
				labelPosition: 'left',
				form: {
					username: 'admin',
					password: '123456',
					remember: 'true'
				}
			}
		},
		methods: {
			onSubmit() {

				var _this = this;
				var url = "http://192.168.20.233:3000/login";
				var params = {
							username: this.form.username,
							password: this.form.password					
				};
				axios.post(url, params)
					.then(function(response) {
						if(response.data) {
							console.log(response.data);
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