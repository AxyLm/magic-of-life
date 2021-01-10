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
                dataList:[]
            }
        },
        props: {
            diskList: {
                type: Array,
                default: []
            },
        },
        watch: {
            diskList(newValue) {
                this.dataList = this.dataList.concat(this.ioList(newValue))
                this.chartUpdate(newValue)
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init() {
                let data = this.ioList(this.diskList)
                console.log(data)
                this.chart = new Area(this.$refs.charts, {
                data:data,
                xField: 'now',
                yField: 'value',
                seriesField: 'type',
                // smooth:true,
                xAxis: {
                    range: [0, 1],
                    type: 'time',
                    mask: 'HH:MM:ss',
                },
                yAxis:{
                    tickCount: 5,
                },
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
            chartUpdate(list){
                this.chart.changeData(this.dataList);
            },
            ioList(list) {
                if(list.length >= 1){
                    let data = []
                    for (let i = 0; i < list.length; i++) {
                        const item = list[i];
                        let time = (new Date()).getTime(); //moment().format('HH:mm:ss')
                        let obj = {
                            name:"磁盘io",
                            now:time,
                        }
                        data.push({
                            ...obj,
                            type:"read",
                            value:Number((item.read_bytes / 1024 ).toFixed(2))
                        })
                        data.push({
                            ...obj,
                            type:"write",
                            value:Number((item.write_bytes/ 1024 ).toFixed(2))
                        })
                    }
                    return data
                }else{
                    return list
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>