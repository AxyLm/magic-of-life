<template>
    <div style="width:100%;height:100%">
        <div ref="charts" style="width:100%;height:100%"></div>
    </div>
</template>

<script>
    import { Area } from '@antv/g2plot';
    import moment from "moment"
    export default {
        data() {
            return {
                chart: "",
                dataList:[
                    {
                        name:"实时流量统计",
                        now:(new Date()).getTime(),
                        totalout:0,
                        totalIn:0,
                        type:"上行",
                        value:0
                    },
                    {
                        name:"实时流量统计",
                        now:(new Date()).getTime(),
                        totalout:0,
                        totalIn:0,
                        type:"下行",
                        value:0
                    }
                ]
            }
        },
        props: {
            trafficList: {
                type: Array,
                default: []
            },
        },
        watch: {
            trafficList(newValue) {
                this.editList(newValue)
                this.chartUpdate()
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init() {
                this.editList(this.trafficList)
                let data = this.dataList
                this.chart = new Area(this.$refs.charts, {
                data:data,
                xField: 'now',
                yField: 'value',
                seriesField: 'type',
                smooth:true,
                xAxis: {
                    range: [0, 1],
                    tickCount:100,
                    type: 'time',
                    mask: 'HH:MM:ss',
                },
                yAxis:{
                },
                // tooltip: {
                // },
                // slider: {
                //     start: 0.1,
                //     end: 0.5,
                // },
                areaStyle: () => {
                    return {
                    fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
                    };
                },
                });
                this.chart.render();
            },
            chartUpdate(){
                this.chart.changeData(this.dataList);
            },
            editList(value) {
                if(value){
                    const item = value[0]
                    const eth0 = value[1]
                    let time = (new Date()).getTime(); //moment().format('HH:mm:ss')
                    let obj = {
                        name:"实时流量统计",
                        now:time,
                        totalout:item.cumulative_cx,
                        totalIn:eth0.cumulative_cx
                    }
                    this.dataList.push({
                        ...obj,
                        type:"上行",
                        value:Number((item.cx / 1024 ).toFixed(2))
                    })
                    this.dataList.push({
                        ...obj,
                        type:"下行",
                        value:Number((item.rx/ 1024 ).toFixed(2))
                    })

                    let maxLen = this.dataList.length
                    console.log(maxLen)
                    if((maxLen ) >= 11){
                        this.dataList = this.dataList.slice(maxLen-10,maxLen)
                    }
                }else{
                    return value
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>