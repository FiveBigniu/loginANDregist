<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
			<div class="weui-cells__title">修改密码</div>
			<div class="weui-cells">
				<div class="weui-cell">
					<div class="weui-cell__hd"><label class="weui-label">原始密码</label></div>
					<div class="weui-cell__bd">
						<input class="weui-input" type="number" pattern="[0-9]*" placeholder="密码" />
					</div>
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">新密码</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="number" pattern="[0-9]*" placeholder="密码" />
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd"><label class="weui-label">确认密码</label></div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="number" pattern="[0-9]*" placeholder="密码" />
				</div>
			</div>	
			<div class="login_btn">
				<el-button type="primary">提交</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "chose",
		data() {
			return {
				labelPosition: 'right'
			}
		},
		methods: {
			goback() {
				this.$router.back(-1);
			},
			onSubmit() {
				this.$router.push('status');
			},
			onSubmit1() {
				this.$router.push('restart');
			},
			onSubmit2() {
				this.$router.push('record');
			}			
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
	
	.lift_btn {
		width: 100%;
	}
	
	.lift_btn a {
		width: 33.3%;
		color: white;
		text-align: center;
		height: 50px;
		line-height: 50px;
		margin: 0 !important;
		padding: 0 !important;
		float: left;
	}
	
	.lift_btn .btn_a {
		background-color: #58B7FF;
		display: inline-block;
	}
	
	.lift_btn .btn_b {
		background-color: #20A0FF;
		display: inline-block;
	}
	
	.lift_btn .btn_c {
		background-color: #1D8CE0;
		display: inline-block;
	}
	
	.el-collapse-item__content {
		padding: 0;
	}
	.login_btn{
		width: 100%;
		margin-top:30px ;
		text-align: center;
	}
</style>