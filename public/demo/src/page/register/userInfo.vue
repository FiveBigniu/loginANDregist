<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
			<h3>注册</h3>
		</header>
		<transition name="fade">
			<p v-if="show">
				<toastView :toastMsg="toastMsg"></toastView>
			</p>
		</transition>
		<div class="content" style="padding: 10px 0 0 0;">

			<div class="weui-cells weui-cells_form">
				<div class="weui-cell">
					<div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-model="form.name" placeholder="姓名" />
					</div>
				</div>

				<div class="weui-cell">
					<div class="weui-cell__hd"><label for="" class="weui-label">出生年月</label></div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-model="form.barth" type="date" value="" />
					</div>
				</div>
				<div class="weui-cell">
					<div class="weui-cell__hd"><label class="weui-label">身份证号</label></div>
					<div class="weui-cell__bd">
						<input class="weui-input" v-model="form.card" placeholder="身份证号" />
					</div>
				</div>
				<div class="weui-cell weui-cell_select weui-cell_select-after">
					<div class="weui-cell__hd">
						<label for="" class="weui-label">性别</label>
					</div>
					<div class="weui-cell__bd">
						<select class="weui-select" v-model="form.sex">
							<option value="1">男</option>
							<option value="2">女</option>
						</select>
					</div>
				</div>
			</div>

		</div>
		<el-form ref="form" label-width="80px" class="regin_from">
			<el-form-item class="regin_sumit">
				<el-button type="primary" size="large" @click="onSubmit">下一步</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import toastView from "../../components/toast.vue"
	export default {
		name: "chose",
		data() {
			return {
				labelPosition: 'left',
				show: false,
				form: {
					name: '',
					barth: '',
					card: '',
					sex: ''
				}
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
				if(this.form.name == "") {
					this.beforSubmit(this, "请填写姓名");
					return;
				}

				if(this.form.barth == "") {
					this.beforSubmit(this, "请填写出生年月");
					return;
				}

				if(this.form.card == "") {
					this.beforSubmit(this, "请填写身份证号");
					return;
				}
				if(this.form.sex == "") {
					this.beforSubmit(this, "请选择性别");
					return;
				}

				this.$router.push('/page/homePage/content');

			},
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
	
	.regin_sumit {
		text-align: center;
		margin-top: 30px;
	}
	
	.regin_sumit button {
		width: 80%;
		margin-left: 15px;
	}
	
	.regin_sumit .el-form-item__content {
		margin: 0 !important;
	}
</style>