<template>
	<a-result status="404" title="404" sub-title="抱歉，您访问的页面不存在。">
		<template #extra>
			<router-link to="/">
				<a-button type="primary"> 首页 </a-button>
			</router-link>
		</template>
	</a-result>
</template>
<script>
	export default {
		name: "err",
		data() {
			return {};
		},
		mounted() {},
		methods: {},
	};
</script>
<style lang="scss" scoped>
</style>
