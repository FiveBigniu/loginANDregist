<template>
	<div id="chose">
		<div class="content">
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>name:{{username}}</p>
                </div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>friend-click</p>
                </div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>test1</p>
                </div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>test2</p>
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
				labelPosition: 'left',
				username:'',
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

</style>