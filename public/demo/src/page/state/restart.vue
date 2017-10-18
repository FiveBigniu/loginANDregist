<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
			<dialogView v-show="dialog" :dialogMsg="message" @sendMsg = "closeDialog"></dialogView>
			<div class="home_btn">
				<a href="javascript:;" class="weui-btn weui-btn_primary" @click="reStart(1)">启动ARD系统</a>
				<a href="javascript:;" class="weui-btn weui-btn_warn" @click="reStart(2)">关闭ARD系统</a>
			</div>
		</div>
	
	</div>
</template>

<script>
	import dialogView from "../../components/dialog.vue"
	export default {
		name: "chose",
		data() {
			return {
				dialog:false,
				message:""
			}
		},
		methods: {
			goback() {
				this.$router.back(-1);
			},
			onSubmit() {
				this.$router.push('page/chose');
			},
			reStart(data) {
				if(data == 1){
					this.message = "启动成功";
				}else{
					this.message = "关闭成功";
				}
				this.dialog = true;
			},
			closeDialog(data) {
				this.dialog = data;
			}
			
		},
		components:{
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
	
.home_btn{
	width: 100%;
	position: absolute;
	top: 50%;
	margin-top: -60px;
	text-align: center;
	padding: 0 8%;
	box-sizing:border-box;
}
</style>