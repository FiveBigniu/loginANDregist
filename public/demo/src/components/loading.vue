<template>
	<div id="chose">
		<div class="chosePerson">
			<span class="wrapper">
				<p>加载中，请稍后...</p>
		  </span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "chose",
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
	
	.el-button {
		padding: 18px 25px;
	}
</style>