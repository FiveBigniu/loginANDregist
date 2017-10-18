<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
			<div class="weui-cells__title">故障记录</div>
			<div class="weui-cells">
				<div class="weui-cell" v-for="record in items">
					<div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
					</div>
					<div class="weui-cell__bd">
						<p>电梯名称:<label>{{record.name}}</label></p>
						<p style="font-size: 13px;color: #888888;">终端ID：<label>{{record.deviceId}}</label></p>
						<p style="font-size: 13px;color: #888888;">事件：<label>{{record.state}}</label></p>
						<p style="font-size: 13px;color: #888888;">时间：<label>{{record.time}}</label></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import loadingView from "../../components/loading.vue"
	import axios from "axios"
	export default {
		name: "chose",
		data() {
			return {
				loading:false,
				items:[]
			}
		},
		created() {
			this.getRecord();
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
			},
			getRecord() {
				this.loading = true;
				var _this = this;
				_this.$ajax.get("static/record.json",{

				  })
				  .then(function (response) {
				  	if(response.data.success == true){
				  		//console.log(response.data.body.village);
				  		_this.items = response.data.body.record;
				  		_this.loading = false;
				  	}else{
				  		console.log(response.data.error.message+"2");
				  		_this.loading = false;
				  	}
				  })
				  .catch(function (response) {
				    console.log(response.data+"3");
				    _this.loading = false;
				  });
			}
		},
		components:{
			loadingView
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
</style>
