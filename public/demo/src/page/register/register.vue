<template>
	<div id="home">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
			<h3>注册</h3>
		</header>
		<transition name="fade">
			<p v-if="show">
				<toastView :toastMsg="toastMsg"></toastView>
			</p>
		</transition>
		<!--<toastView></toastView>-->
		<!--<dialogView v-show="dialog" :dialogMsg="message" @sendMsg = "closeDialog"></dialogView>-->
		<el-form ref="form" :model="form" label-width="80px" class="regin_from">
			<el-form-item label="手机号">
				<el-col :span="12">
					<el-input v-model="form.phone" el-col :span="11"></el-input>
				</el-col>
				<el-col class="line" :span="1">
					-
				</el-col>
				<el-col :span="11">
					<el-button type="primary" @click="sendCord" :disabled="buttonType" v-html="buttonText"></el-button>
				</el-col>
			</el-form-item>
			<el-form-item label="验证码">
				<el-input v-model="form.cord"></el-input>
			</el-form-item>
			<el-form-item label="选择用户">
				<el-select v-model="form.userType" placeholder="请选择您属于哪种用户">
					<el-option label="维保用户" value="weibao"></el-option>
					<el-option label="普通用户" value="common"></el-option>
				</el-select>
			</el-form-item>
			<!--<el-form-item label="密码">
				<el-input v-model="form.pass1" type="password"></el-input>
			</el-form-item>
			<el-form-item label="确认密码">
				<el-input v-model="form.pass2" type="password"></el-input>
			</el-form-item>			-->
			<el-form-item class="regin_sumit">
				<el-button type="primary" size="large" @click="onSubmit">确 定</el-button>
			</el-form-item>
		</el-form>
		<div id="toast" v-show="form.toast">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-icon-success-no-circle weui-icon_toast"></i>
				<p class="weui-toast__content">已提交</p>
			</div>
		</div>
	</div>
</template>

<script>
	import dialogView from "../../components/dialog.vue"
	import toastView from "../../components/toast.vue"
	export default {
		name: "home",
		data() {
			return {
				show: false,
				labelPosition: 'left',
				form: {
					toast: false, //toast隐藏
					phone: '', //电话
					cord: '',
					userType: ''
				},
				dialog: false,
				toastMsg: "",
				message: "",
				buttonType: false,
				buttonText: "获取验证码"
			}
		},
		methods: {
			goback() {
				this.$router.back(-1);
			},

			//提交校验
			beforSubmit(_this, str) {
				_this.show = true;
				_this.toastMsg = str;

				setTimeout(function() {
					_this.show = false;
				}, 2000);
			},
			//提交
			onSubmit() {
				if(this.form.phone == "") {
					this.beforSubmit(this, "请填写手机号码");
					return;
				}

				if(this.form.cord == "") {
					this.beforSubmit(this, "请填写验证码");
					return;
				}

				if(this.form.userType == "") {
					this.beforSubmit(this, "请选择用户类型");
					return;
				}

				this.sendUserMsg(this.form.cord);

			},
			//发送验证码
			sendCheckCord(num, openid) {
				//var url = "http://192.168.8.149:8080/wx/GetVerificationCode";
				var url = "";
				var _this = this;
				_this.$ajax.get(url, {
						params: {
							phone: num
						}
					})
					.then(function(response) {
						if(response.data) {
							//_this.$router.push('/page/homePage/content');
						} else {

						}
						//console.log(response.data);
					})
					.catch(function(response) {
						_this.$router.push('/page/auditStatus/audit');
					});

			},
			//发送提交
			sendUserMsg(num) {
				//var url = "http://192.168.8.149:8080/wx/CheckVerificationCode";
				var url = "";
				var _this = this;
				if(_this.form.userType == "common"){
					_this.$router.push('/page/homePage/content');
				}else{
					_this.$router.push('/page/register/userInfo');
				}
//				_this.$ajax.get(url, {
//						params: {
//							verificationCode: num,
//							openid: 1,
//							userType:_this.form.userType
//						}
//					})
//					.then(function(response) {
//						if(response.data) {
//							_this.$router.push('/page/auditStatus/audit');
//						} else {
//							_this.$router.push('/page/auditStatus/audit');
//						}
//					})
//					.catch(function(response) {
//						_this.$router.push('/page/auditStatus/audit');
//					});

			},
			//发送验证码校验
			sendCord() {
				var time = 59,
					that = this;
				if(that.form.phone) {
					this.sendCheckCord(that.form.phone);
					this.buttonType = true;
					this.buttonText = "重新获取(" + time + ")";
					var clearTime = setInterval(() => {
						time--;
						that.buttonText = "重新获取(" + time + ")";
						if(time == 0) {
							that.buttonType = false;
							that.buttonText = "获取验证码";
							clearInterval(clearTime);
						}
					}, 1000);
				} else {
					that.beforSubmit(that, "请填写11位手机号码");
				}

			}
		},
		components: {
			toastView
		}
	}
</script>

<style lang="scss">
	header {
		height: 60px;
		width: 100%;
		background-color: #19a1ad;
		text-align: center;
		padding: 0 10px;
		box-sizing: border-box;
	}

	h3 {
		color: white;
		width: auto;
		position: absolute;
		left: 80px;
		right: 80px;
		line-height: 60px;
		margin: 0;
		z-index: 9999;
	}

	header .backBtn {
		float: left;
		line-height: 60px;
		color: white;
	}

	header .nextBtn {
		float: right;
		line-height: 60px;
		color: white;
	}

	.regin_from {
		padding-right: 15px;
		margin-top: 20px;
	}

	.regin_sumit {
		text-align: center;
	}

	.regin_sumit button {
		width: 80%;
		margin-left: 15px;
	}

	.regin_sumit .el-form-item__content {
		margin: 0 !important;
	}

	.regin_enter {
		text-align: center;
	}

	html,
	body {
		padding: 0;
		margin: 0;
	}

	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

	.regin_img {
		text-align: center;
	}
</style>
