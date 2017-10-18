<template>
	<div id="chose">
        <div class="js_dialog">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__bd">{{dialogMsg}}</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="closeDialog">知道了</a>
                </div>
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
		props:['dialogMsg'],
		methods:{
			closeDialog() {
				this.$emit("sendMsg",false);
			}
		}

	}
</script>

<style lang="scss">
.weui-mask{
	background: rgba(0,0,0,0.3) !important;
}
</style>