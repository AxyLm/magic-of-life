<template>
    <div style="height:90%;width:100%">
        <a-row style="background:#fff">
            <a-col :span='8'>
                <a-card title="router" style="width:100%;height:auto" >
                    <a-spin tip="Loading..." :spinning='treeLoading'>
                        <a-tree blockNode draggable
                            :tree-data="treeData"
                            :replaceFields='replaceFields'
                            @select='selTree'
                            @dragstart='dragstart'
                            @dragend='dragend'
                            @drop='onDrop'
                            :defaultSelectedKeys='[treeData[0].route]'>
                            <span slot-scope="{ slots }" slot="slots">
                                123
                            </span>
                        </a-tree>
                    </a-spin>
                </a-card>
            </a-col>
            <a-col :span='16'>
                <a-card>
                    <a-form layout='vertical' :label-col="labelCol" :wrapper-col="wrapperCol" :form='routerInfo'>
                        <a-form-item label='名称' :labelCol='{span:3}'>
                            <a-input v-model="routerInfo.title"/>
                        </a-form-item>
                        <a-form-item label='路径' :labelCol='{span:3}' props='title'>
                            <a-input v-model="routerInfo.route"/>
                        </a-form-item>
                        <a-form-item label='图标' :labelCol='{span:3}'>
                            <a-input v-model="routerInfo.icon">
                                <a-icon slot="prefix" :type="routerInfo.icon" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label='组件' :labelCol='{span:3}'>
                            <a-input v-model="routerInfo.component"/>
                        </a-form-item>
                        <a-form-item label='链接' :labelCol='{span:3}'>
                            <a-input v-model="routerInfo.path"/>
                        </a-form-item>
                        <a-form-item label='权限' :labelCol='{span:3}'>
                            <a-select :default-value="routerInfo.visibleRoles" style="width: 200px" mode="multiple">
                                <a-select-option v-for="(i,index) in allroles" :key="index">
                                    {{i}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item>
                            <a-button @click="submit">提交</a-button>
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
            treeLoading:false,
            routerInfo:{
                "title":"路由设置",
                "route":"/system/router",
                "path":"router",
                "icon":"edit",
                "component":"system/index",
                "parent":null,
                "visibleRoles":["PRO_SF"]
            },
            allroles:[''],
            replaceFields:{children:'children', title:'title', key:'node' },
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        }
    },
    created(){
        this.initTree()
        this.getRole()
        this.defaultRole = localStorage.getItem('userInfo').roles
    },
    mounted(){
        
    },
    methods:{
        submit(){
            this.$axios.post(this.$api.url +'/users/addroute',this.routerInfo)
            .then((res)=>{
                if(res.code == 0){
                    this.$message.success({ content: '添加成功',duration:2.5});
                    this.initTree()
                }else{
                    throw res.msg
                }
            }).catch((err)=>{
                this.$message.error({ content: err,duration:2.5});
            })
        },
        getRole(){
            this.$axios.post(this.$api.url + '/users/getrole')
            .then((res)=>{
                let urole = localStorage.getItem('userInfo').roles
                const data = res.data
                let roles = []
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    roles.push(item.code)
                    if(item.roles == urole){
                        this.defaultRole = [item.code]
                    }
                }
                this.allroles = roles
            })
        },
        initTree(){
            this.treeLoading = true
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            console.log(userInfo)
            this.$axios.post(this.$api.url + '/users/getAuthRouter',{
                "role":userInfo.roles
            })
            .then((res)=>{
                if(res.code == 0){
                    this.treeData = res.data
                }
                this.treeLoading = false
            }).catch(()=>{
                this.treeLoading = false
            })
        },
        dragstart(selectedKeys, e){
            console.log(selectedKeys,e)
        },
        dragend(event){
            console.log(event)
        },
        onDrop(event){
            console.log(event.dragNode.eventKey ,'进入',event.node.eventKey)
        },
        selTree(selectedKeys, e){
            console.log(selectedKeys,e.node.title)
        }
    }
}
</script>
