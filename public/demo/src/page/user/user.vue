<template>
	<div id="chose">
		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
        <div class="weui-cells__title">用户信息</div>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>真实姓名</p>
                </div>
                <div class="">hehehhe</div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>身份证号</p>
                </div>
                <div class="">500383199952123585</div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>性别</p>
                </div>
                <div class="">女</div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>出生年月</p>
                </div>
                <div class="">1999-02-27</div>
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