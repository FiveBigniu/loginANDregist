<template>
	<div id="chose">

		<header>
			<a class="backBtn" @click="goback"><i class="el-icon-arrow-left"></i>返回</a>
		</header>
		<div class="content">
			<loadingView v-show="loading"></loadingView>
        <div class="weui-cells__title">小区展示</div>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" v-for="village in items" data-id="{village.id}"  @click = "onSubmit(village.id)">
                <div class="weui-cell__bd">
                    <p>{{village.name}}</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
        </div>
		</div>
	</div>
</template>

<script>
	import loadingView from "../../components/loading.vue"
	import axios from "axios"
	export default {
		name:"chose",
		data() {
			return {
				loading:false,
				items:[],
				abc:123
			}
		},
		created() {
			this.getVillage();
		},
		methods: {
			goback() {
				this.$router.back(-1);
			},
			onSubmit(event) {

			},
			getVillage() {
				this.loading = true;
				var _this = this;
				_this.$ajax.get("static/village.json",{

				  })
				  .then(function (response) {
				  	if(response.data.success == true){
				  		//console.log(response.data.body.village);
				  		_this.items = response.data.body.village;
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
