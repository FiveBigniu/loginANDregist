<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
		<transition name="fade">
			<p v-if="show">
				<toastView :toastMsg="toastMsg"></toastView>
			</p>
		</transition>
		<dialogView v-show="dialog" :dialogMsg="message" @sendMsg = "closeDialog"></dialogView>
			<div class="weui-cells__title">忘记密码</div>
			<el-form ref="form" :model="form" label-width="80px" class="regin_from">
				<el-form-item label="手机号">
					<el-col :span="12">
						<el-input v-model="form.phone" el-col :span="11"></el-input>
					</el-col>
					<el-col class="line" :span="1">
						-
					</el-col>
					<el-col :span="11"><el-button type="primary" @click="sendCord" :disabled = "buttonType" v-html = "buttonText"></el-button></el-col>
				</el-form-item>
				<el-form-item label="验证码">
					<el-input v-model="form.cord"></el-input>
				</el-form-item>
				<el-form-item label="新密码">
					<el-input v-model="form.pass1" type="password"></el-input>
				</el-form-item>
				<el-form-item label="确认密码">
					<el-input v-model="form.pass2" type="password"></el-input>
				</el-form-item>			
				<el-form-item class="regin_sumit">
					<el-button type="primary" size="large" @click="onSubmit">确 定</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import toastView from "../../components/toast.vue"
	import dialogView from "../../components/dialog.vue"
	export default {
		name: "chose",
		data() {
			return {
				labelPosition: 'left',
				show:false,
				form: {
					toast:false,
					phone: '',
					cord: '',
					pass1: '',
					pass2: '',
					aaa:"true"
				},
				toastMsg:'',
				dialog:false,
				message:"",
				buttonType:false,
				buttonText:"获取验证码"
			}
		},
		methods: {
			goback() {
				this.$router.back(-1);
			},
			onSubmit() {
				if(this.form.phone == "") {
					this.beforSubmit(this, "请填写手机号码");
					return;
				}

				if(this.form.cord == "") {
					this.beforSubmit(this, "请填写验证码");
					return;
				}

				if(this.form.pass1 == "" || this.form.pass2 == "") {
					this.beforSubmit(this, "请填写密码");
					return;
				}
				
				if(this.form.pass1 != this.form.pass2) {
					this.beforSubmit(this, "两次填写密码不一致");
					return;
				}
				this.message = "密码修改成功";
				this.dialog = true;
				//this.$router.push('../login');
			},
			//提交校验
			beforSubmit(_this, str) {
				_this.show = true;
				_this.toastMsg = str;

				setTimeout(function() {
					_this.show = false;
				}, 2000);
			},			
			//发送验证码校验
			sendCord() {
				var time = 59,_this = this;
				if(_this.form.phone) {
					//this.sendCheckCord(that.form.phone);
					this.buttonType = true;
					this.buttonText = "重新获取(" + time + ")";
					var clearTime = setInterval(() => {
						time--;
						_this.buttonText = "重新获取(" + time + ")";
						if(time == 0) {
							_this.buttonType = false;
							_this.buttonText = "获取验证码";
							clearInterval(clearTime);
						}
					}, 1000);
				} else {
					_this.beforSubmit(_this, "请填写11位手机号码");
				}

			},
			closeDialog(data) {
				this.dialog = data;
				this.$router.push('../login');
			}			
		},
		components:{
			toastView,
			dialogView
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
</style>