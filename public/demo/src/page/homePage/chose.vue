<template>
	<div id="chose">
		<div class="chosePerson">
		  <span class="wrapper">
		    <router-link to='maintence'>
		    	<el-button type="success">维保用户</el-button>
		    </router-link><br /><br />
		    <!--<el-button type="warning">警告按钮</el-button>
		    <el-button type="danger">危险按钮</el-button>-->
		    <router-link to="content">
		    	<el-button type="info">普通用户</el-button>
		    </router-link>
		    
		  </span>
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
		}

	}
</script>

<style lang="scss">
.chosePerson {
	position: absolute;
	top: 38%;
	width: 100%;
	text-align: center;
}
/*.el-button{
	padding: 18px 25px;
}*/
</style>