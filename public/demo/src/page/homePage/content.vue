<template>
	<div id="chose">
		<header class="header">
			<!--<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>-->
			<!--<h3>ARD监控</h3>-->
			<!--<a class="nextBtn" @click="onInfo"><i class="el-icon-setting"></i></a>-->
		</header>
		<a class="nextBtn" @click="onInfo"><i class="el-icon-setting"></i></a>
		<div class="user_img">
			<p>用户  <span class="color_blue">Thanks.</span> 你好</p>
		</div>

		<el-row :gutter="20">
		  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="9">
		  	<div class="grid-content bg-purple gridSecend" @click="testClick">
		  		<p>扫一扫</p>
		  	</div>
		  	</el-col>
		  <el-col :span="9">
		  	<div class="grid-content bg-purple gridSecend" @click = "onSubmit">
		  		<p>选择设备</p>
		  	</div>
		  </el-col>
		  <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		<footer>
			<p>- ARD监控 -</p>
		</footer>
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
			testClick() {
				var url = "http://192.168.8.120:8080/device/list";
				var sendInfo = "ard_Device=aaa&password=1";
				var _this = this;
				//var test = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxba03a716f0353ce4&redirect_uri=http://www.hawkwisdom.cn/wx/project_ard/index.html&response_type=code&scope=SCOPE&state=STATE#wechat_redirect";
				_this.$ajax.post(url, sendInfo)
				  .then(function (response) {
				  	if(response.data){
				  		//_this.$router.push('/page/homePage/content');
				  		console.log(response.data+"1");
				  	}else{
				  		console.log(response.data+"2");
				  	}
				    //console.log(response.data);
				  })
				  .catch(function (response) {
				    console.log(response.data+"3");
				  });

			},
			goback() {
				this.$router.back(-1);
			},
			onSubmit() {
				this.$router.push('../villageLift/village');
			},
			onInfo() {
				this.$router.push('../user/info');
			}
		}

	}
</script>

<style lang="scss">
.header{
    height: 10px;
    width: 100%;
    background-color: #19a1ad;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
}
 .nextBtn{
	position: absolute;
	right: 15px;
	top: 15px;
	line-height: 60px;
	color: #20A0FF;
	font-size: 28px;
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .gridSecend{
  	padding: 10%;
  	background: #20A0FF;
  	text-align: center;
  }
  .gridSecend img{
  	width: 60%;
  	height: auto;
  }
  .gridSecend p{
  	color: white;
  }
  .user_img{
  	text-align: center;
  	width: 100%;
  	margin: 15% 0;
  }
  .user_img p{
  	color: #20A0FF;
  }
  .user_img img{
  	width: 35%;
  	height: auto;
  	border-radius: 50%;
  	border: 2px solid #20A0FF;
  }
  footer{
  	position: absolute;
  	bottom: 25px;
  	width: 100%;
  }
  footer p{
  	color: #BBBBBB;
  	font-size: 16px;
  	text-align: center;
  }
  .color_blue{
  	color: blue;
  }
</style>
