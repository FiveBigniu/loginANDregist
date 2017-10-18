<template>
	<div>
		<div class="regin_enter">
			<router-link to=''>注册</router-link> |
			<router-link to=''>忘记密码</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: 'left',
				form: {
					name: '',
					word: '',
					resource: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log(this.form.resource);
			}
		}
	}
</script>

<style lang="scss">
	.regin_from {
		padding-right: 15px;
	}
	
	.regin_sumit {
		text-align: center;
	}
	
	.regin_sumit button {
		width: 80%;
		margin-left: 15px;
	}
	
	.regin_sumit .el-form-item__content {
		margin: 0 !important;
	}
	
	.regin_enter {
		text-align: center;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
	
	.regin_img {
		text-align: center;
	}
</style>