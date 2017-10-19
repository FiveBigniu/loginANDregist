<template>
	<div id="chose">

		<div class="grid-content bg-purple gridSecend">
			<router-link :to="{name: 'userinfo'}">list1</router-link>
		</div>

		<div class="grid-content bg-purple gridSecend">
			<router-link :to="{name: 'lift'}">list2</router-link>
		</div>

		<div class="grid-content bg-purple gridSecend">
			<router-link :to="{name: 'userinfo'}">self</router-link>
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
		methods: {

		}
	}
</script>

<style lang="scss">

</style>