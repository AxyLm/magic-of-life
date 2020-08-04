<template>
    <div style="height:90%;width:100%">
        <a-row>
            <a-col :span='8'>
                <a-card title="router" style="width:100%;height:auto">
                    <a-tree blockNode draggable
                        :tree-data="treeData"
                        :replaceFields='replaceFields'
                        @select='selTree'
                        @dragstart='dragstart'
                        :defaultSelectedKeys='[treeData[0].route]'/>
                </a-card>
            </a-col>
            <a-col :span='16'>
                <a-card>
                    <a-form layout='vertical' :label-col="labelCol" :wrapper-col="wrapperCol">
                        <a-form-item label='路径' :labelCol='{span:3}'>
                            <a-input></a-input>
                        </a-form-item>
                        <a-form-item label='名称' :labelCol='{span:3}'>
                            <a-input></a-input>
                        </a-form-item>
                    </a-form>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name:'userinfo',
    data(){
        return{
            treeData:[],
            replaceFields:{children:'children', title:'title', key:'path' },
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        }
    },
    created(){
        this.initTree()
    },
    methods:{
        initTree(){
            // this.$axios.post(this.$api.url + '/users/getAuthRouter',{
            //     "role":"soulfer"
            // })
            // .then((res)=>{
                
                this.treeData = JSON.parse(localStorage.getItem('router'))
            // })
        },
        dragstart(selectedKeys, e){
            console.log(selectedKeys,e)
        },
        selTree(selectedKeys, e){
            console.log(selectedKeys,e.node.title)
        }
    }
}
</script>
