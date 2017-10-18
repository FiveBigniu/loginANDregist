<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
        <div class="weui-cells__title">设置</div>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>手机号</p>
                </div>
                <div class="">15999999999</div>
            </a>
            <a class="weui-cell weui-cell_access" @click = "onSubmit">
                <div class="weui-cell__bd">
                    <p>身份认证</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
            <a class="weui-cell weui-cell_access" @click = "onSubmit1">
                <div class="weui-cell__bd">
                    <p>审核进度</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
            <a class="weui-cell weui-cell_access" @click = "onSubmit2">
                <div class="weui-cell__bd">
                    <p>修改密码</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>            
            <a class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>退出登录</p>
                </div>
            </a>           
        </div>		
		
		</div>
	</div>
</template>

<script>
	export default {
		name:"chose",
		data() {
			return {
				labelPosition: 'left'
			}
		},
		methods: {
			goback() {
				this.$router.back(-1);
			},			
			onSubmit() {
				this.$router.push('user');
			},			
			onSubmit1() {
				this.$router.push('../progress');
			},			
			onSubmit2() {
				this.$router.push('changePassword');
			}
		}		

	}
</script>

<style lang="scss">
header{
    height: 60px;
    width: 100%;
    background-color: #19a1ad;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
}
h3{
	color: white;
	width: auto;
	position: absolute;
	left: 80px;
	right: 80px;
	line-height: 60px;
	margin: 0;
	z-index: 9999;
}
header .backBtn{
	float: left;
	line-height: 60px;
	color: white;
}
header .nextBtn{
	float: right;
	line-height: 60px;
	color: white;
}
</style>