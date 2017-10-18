<template>
	<div id="home">
		<input v-model="form.username" type="text" placeholder="手机号码" />
		<input v-model="form.password" type="password" placeholder="密码"/>
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
					username: 'sysadmin',
					password: '11111111',
					remember:'true'
				}
			}
		},
		methods: {
			openScan() {
				wx.scanQRCode({
			      needResult: 1,
			      desc: 'scanQRCode desc',
			      success: function (res) {
			        alert(JSON.stringify(res));
			      }
			   });
			   alert(location.href.split('#')[0]);
			},
			login() {
				var _this = this;
				//_this.$router.push('/page/homePage/content');

				//var sendInfo = "username="+this.form.username+"&password="+this.form.password+"";
				var sendInfo = '15923970705';
				var url = "${basePath}/loginValidate";
				console.log("${basePath}");
				_this.$ajax({
					  url: url,
					  method: 'post',
					  data: {
					    username: this.form.username,
					    password: this.form.password,
					    remember: this.form.remember
					  },
					  transformRequest: [function (data) {
					    // Do whatever you want to transform the data
					    let ret = ''
					    for (let it in data) {
					      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
					    }
					    return ret
					  }],
					  headers: {
					    'Content-Type': 'application/x-www-form-urlencoded'
					  }
					})
				  .then(function (response) {
				  	if(response.data){
				  		_this.$router.push('/content');
				  	}else{

				  	}
				  })
				  .catch(function (response) {
				  	_this.$router.push('/content');
				  });

			},
			onSubmit() {
				var myReg = /^[0-9]*$/;
				var thisName = this.form.name;
				if(thisName == "") return alert("请输入用户名");
				if(this.form.word == "") return alert("请输入密码");
//				if(!myReg.test(thisName)) {
//					alert("用户名为数字")
//					return false;
//				}
				this.login();
				//this.$router.push('page/chose');
			}
		}
	}
</script>

<style lang="scss">
// @import '../../static/style/common.scss';
</style>
