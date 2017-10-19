<template>
	<div id="chose">

		<div class="content">
			<div class="weui-cells__title">列表展示</div>
		</div>
	</div>
</template>

<script>
//	import loadingView from "../../components/loading.vue"
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
//			this.getLift();
	    },
		methods: {
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
//			loadingView
		}

	}
</script>

<style lang="scss">

</style>
