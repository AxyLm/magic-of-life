<template>
    <div>
        <div style="width:100%;height:800px" ref='chart'></div>
    </div>
</template>

<script>
    import { Area } from '@antv/g2plot';
    export default {
        data() {
            return {
                data: []
            }
        },
        created () {
            this.query();
        },
        methods: {
            query() {
                this.$axios.post("/monit/queryTraffic",{dimension:"h"})
                .then((res)=>{
                    if(res.code == 0){
                        this.data = res.data

                        const area = new Area(this.$refs.chart, {
                            data:res.data,
                            xField: 'now',
                            yField: 'in',
                            // smooth:true,
                            xAxis: {
                                range: [0, 1],
                                tickCount: 5,
                                type: 'time',
                            },
                            yAxis: {
                                label: {
                                    // formatter: function(v){
                                    //     console.log(v)
                                    //     return v
                                    // },
                                },
                            },
                            slider: {
                                start: 0.1,
                                end: 0.5,
                            },
                            areaStyle: () => {
                                return {
                                fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
                                };
                            },
                            });
                            area.render();
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>