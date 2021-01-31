<template>
	<div style="width: 100%; height: 100%">
		<div ref="charts" style="width: 100%; height: 100%"></div>
	</div>
</template>
<script>
	import * as echarts from "echarts";
	import moment from "moment";
	export default {
		data() {
			return {
				echarts: null,
				option: {
					tooltip: {
						trigger: "axis",
					},
					grid: {
						left: "3%",
						right: "4%",
						bottom: "3%",
						containLabel: true,
					},
					toolbox: {
						show: false,
					},
					legend: {
						data: ["上行", "下行"],
					},
					dataset: {
						source: [],
					},
					xAxis: {
						type: "category",
						boundaryGap: false,
					},
					yAxis: [
						{
							type: "value",
							name: "单位：kb/s",
						},
					],
					series: [
						{
							name: "上行",
                            type: "line",
                            itemStyle: {
                                color: '#0770FF'
                            },
							areaStyle: {
								color: new echarts.graphic.LinearGradient(
									0,
									0,
									0,
									1,
									[
										{
											offset: 0,
											color: "rgba(58,77,233,0.8)",
										},
										{
											offset: 1,
											color: "rgba(58,77,233,0.3)",
										},
									]
								),
							},
							stack: "io",
						},
						{
							name: "下行",
                            type: "line",
                            itemStyle: {
                                color: '#F2597F'
                            },
							areaStyle: {
								color: new echarts.graphic.LinearGradient(
									0,
									0,
									0,
									1,
									[
										{
											offset: 0,
											color: "rgba(213,72,120,0.8)",
										},
										{
											offset: 1,
											color: "rgba(213,72,120,0.3)",
										},
									]
								),
							},
							stack: "io",
						},
					],
				},
				dataList: [],
			};
		},
		props: {
			trafficList: {
				type: Array,
				default: [],
			},
		},
		watch: {
			trafficList(newValue) {

				let data = newValue[1];
				this.dataList.push({
					product: moment().format("HH:mm:ss"),
					cx: Number((data.cx / 1024).toFixed(2)),
					rx: Number((data.rx / 1024).toFixed(2)),
				});
				if (this.dataList.length > 10) {
					this.dataList.splice(0, 1);
				}
				this.option.dataset.source = this.dataList;
				this.echarts.setOption(this.option);
			},
		},
		created() {},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				this.echarts = echarts.init(this.$refs.charts);
				this.echarts.setOption(this.option);
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>