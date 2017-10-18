<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
			<div class="weui-cells__title">运行状态</div>
			<div class="weui-cells">
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>电池电流</p>
					</div>
					<div class="">
						<span>{{item.a}}</span>A</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>电池电压</p>
					</div>
					<div class="">
						<span>{{item.b}}</span>V</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>运行时间</p>
					</div>
					<div class="">
						<span>{{item.c}}</span>s</div>
				</a>
			</div>
			<div class="weui-cells__title">故障信息</div>
			<div class="weui-cells">
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>过流停机</p>
					</div>
					<div class="">
						<span>{{item.d}}</span>A</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>过载停机</p>
					</div>
					<div class="">
						<span>{{item.e}}</span>V</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>电池过放电</p>
					</div>
					<div class="">
						<span>{{item.f}}</span>s</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>电池欠压</p>
					</div>
					<div class="">
						<span>{{item.g}}</span>
					</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>充电器故障</p>
					</div>
					<div class="">
						<span>{{item.h}}</span>
					</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>过载故障</p>
					</div>
					<div class="">
						<span>{{item.i}}</span>s</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>错误次数</p>
					</div>
					<div class="">
						<span>{{item.j}}</span>次</div>
				</a>
			</div>
			<div class="weui-cells__title">系统状态信息</div>
			<div class="weui-cells">
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>电池电流</p>
					</div>
					<div class="">
						<span>{{item.k}}</span>A</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>STP</p>
					</div>
					<div class="">
						<span>{{item.l}}</span>V</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>主电</p>
					</div>
					<div class="">
						<span>{{item.m}}</span>s</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>逆变</p>
					</div>
					<div class="">
						<span>{{item.n}}</span>
					</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>软启动</p>
					</div>
					<div class="">
						<span>{{item.o}}</span>
					</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>低速运行信号</p>
					</div>
					<div class="">
						<span>{{item.p}}</span>
					</div>
				</a>
				<a class="weui-cell weui-cell_access" href="javascript:;">
					<div class="weui-cell__bd">
						<p>运行次数</p>
					</div>
					<div class="">
						<span>{{item.q}}</span>次</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: "chose",
		data() {
			return {
				item: {}
			}
		},
		created() {
			this.getStatus();
		},
		methods: {
			goback() {
				this.$router.back(-1);
			},
			onSubmit() {
				this.$router.push('page/chose');
			},
			getStatus() {
				var _this = this;
				_this.$ajax.get("http://www.hawkwisdom.cn/wx/project_ard/static/status.json", {
	
					})
					.then(function(response) {
						if(response.data.success == true) {
							//console.log(response.data.body.village);
							_this.item = response.data.body;
						} else {
							console.log(response.data.error.message + "2");
						}
					})
					.catch(function(response) {
						console.log(response.data + "3");
					});
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
</style>