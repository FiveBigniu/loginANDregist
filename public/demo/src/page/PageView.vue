<template>
	<div id="chose">
		<HeaderBar></HeaderBar>
		<router-view>a</router-view>
	</div>
</template>

<script>
	import HeaderBar from '../components/HearderBar'
	export default {
		name: "chose",
		data() {
			return {
				labelPosition: 'left'
			}
		},
		components: {HeaderBar},
		methods: {
//			testClick() {
//				var url = "http://192.168.8.120:8080/device/list";
//				var sendInfo = "ard_Device=aaa&password=1";
//				var _this = this;
//				//var test = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxba03a716f0353ce4&redirect_uri=http://www.hawkwisdom.cn/wx/project_ard/index.html&response_type=code&scope=SCOPE&state=STATE#wechat_redirect";
//				_this.$ajax.post(url, sendInfo)
//					.then(function(response) {
//						if(response.data) {
//							//_this.$router.push('/page/homePage/content');
//							console.log(response.data + "1");
//						} else {
//							console.log(response.data + "2");
//						}
//						//console.log(response.data);
//					})
//					.catch(function(response) {
//						console.log(response.data + "3");
//					});
//
//			},
//			goback() {
//				this.$router.back(-1);
//			},
//			onSubmit() {
//				this.$router.push('../villageLift/village');
//			},
//			onInfo() {
//				this.$router.push('../user/info');
//			}
		}

	}
</script>

<style lang="scss">

</style>