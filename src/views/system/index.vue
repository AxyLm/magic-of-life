<template>
    <div style="position:absolute;height:90%;" v-scrollBar>
        <a-card title="uaserinf" style="width:300px;height:300px">
            <a-tree
                checkable
                :tree-data="treeData"
                @select='selTree'
            />
        </a-card>
    </div>
</template>
<script>
export default {
    name:'userinfo',
    data(){
        return{
            treeData:[]
        }
    },
    created(){
        this.initTree()
    },
    methods:{
        initTree(){
            this.$axios.post(this.$api.url + '/users/getAuthRouter',{
                "role":"admin"
            })
            .then((res)=>{
                this.treeData = res.data
            })
        },
        selTree(selectedKeys, e){
            console.log(selectedKeys,e.node.title)
        }
    }
}
</script>
