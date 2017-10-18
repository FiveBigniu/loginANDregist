<template>
	<div id="chose">
		<div class="toast_content">
			<div class="toast_panel">
				<div>{{toastMsg}}</div>
			</div>
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
		},
		props: ['toastMsg'],
		methods: {
			
		}

	}
</script>

<style lang="scss">
	.toast_content {
		width: 100%;
		height: 35px;
		position: absolute;
		z-index: 1;
		margin: 0 auto;
		text-align: center;
	}
	
	.toast_content .toast_panel {
		width: 70%;
		background-color: #ffa94d;
		height: 30px;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		color: white;
		line-height: 30px;
	}
</style>