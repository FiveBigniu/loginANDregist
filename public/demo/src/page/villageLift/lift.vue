<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
			<loadingView v-show="loading"></loadingView>
			<div class="weui-cells__title">电梯展示</div>
			<el-collapse>
				<el-collapse-item v-for="lift in items" :title=lift.name>
					<div class="lift_btn">
						<a class="btn_a" v-bind:class="{commonWidth:isCommonWidth}" @click = "onSubmit">状态</a>
						<a class="btn_b" v-bind:class="{commonWidth:isCommonWidth}" v-show="isShow" @click = "onSubmit1">控制</a>
						<a class="btn_c" v-bind:class="{commonWidth:isCommonWidth}" @click = "onSubmit2">记录</a>
					</div>
				</el-collapse-item>
			</el-collapse>
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
				items:[],
				isCommonWidth:false,
				isShow:true
			}
		},
		created() {
			this.getLift();

	    },
		methods: {
			goback() {
				this.$router.back(-1);
			},
			onSubmit() {
				this.$router.push('../state/status');
			},
			onSubmit1() {
				this.$router.push('../state/restart');
			},
			onSubmit2() {
				this.$router.push('../state/record');
			},
			getLift() {
				this.loading = true;
				var _this = this;
				_this.$ajax.get("static/lift.json",{

				  })
				  .then(function (response) {
				  	if(response.data.success == true){
				  		//console.log(response.data.body.village);
				  		_this.items = response.data.body.lift;
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
	.commonWidth{
		width: 50% !important;
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
