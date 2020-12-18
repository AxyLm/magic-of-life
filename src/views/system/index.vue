<template>
    <div style="height:90%;width:100%">
        <a-row style="background:#fff;height:100%">
                <a-card title="路由管理" style="width:100%;height:auto;min-height:300px" >
            <a-col :span='10' :xs="24" :xl='10' >
                    <a-spin tip="Loading..." :spinning='treeLoading'>
                        <a-tree blockNode draggable
                            :tree-data="treeData"
                            :replaceFields='replaceFields'
                            :autoExpandParent='true'
                            :defaultExpandAll='true'
                            @select='selTree'
                            @dragstart='dragstart'
                            @dragend='dragend'
                            @drop='onDrop'>
                            <div slot-scope="item" slot="change" style="widht:100%">
                                <span >
                                    {{item.title}}
                                </span>
                                <span style="float:right">
                                    <a-button size='small' type="link" @click.prevent.stop='change(item,"add")'>添加</a-button>
                                    <a-popconfirm title="确定删除么?" @confirm='change(item,"del")'>
                                        <a-icon slot="icon" type="delete" style="color: red" />
                                        <a-button size='small' type="link">删除</a-button>
                                    </a-popconfirm>
                                </span>
                            </div>
                        </a-tree>
                    </a-spin>
            </a-col>
            <a-col :span='14' :xs="24" :xl='14'>
                    <a-spin tip='Loading' :spinning='formLoading'>
                    <a-form layout='horizontal' :label-col="labelCol" :wrapper-col="wrapperCol" :form='routerInfo'>
                        <transition-group name="slide-fade" mode='out-in'>
                        <a-form-item label='父级(parent)' :labelCol='{span:5}' v-if="addParentShow" key="0">
                            <a-input v-model="addParent.title" :disabled="true"/>
                        </a-form-item>
                        <a-form-item label='名称(title)' :labelCol='{span:5}' key="1">
                            <a-input v-model="routerInfo.title"/>
                        </a-form-item>
                        <a-form-item label='路径(route)' :labelCol='{span:5}' props='title' key="2">
                            <a-input v-model="routerInfo.route"/>
                        </a-form-item>
                        <a-form-item label='图标(icon)' :labelCol='{span:5}' key="3">
                            <a-input v-model="routerInfo.icon">
                                <a-icon slot="suffix" :type="routerInfo.icon" />
                            </a-input>
                        </a-form-item>
                        <a-form-item label='组件(component)' :labelCol='{span:5}' key="4">
                            <a-input v-model="routerInfo.component"/>
                        </a-form-item>
                        <a-form-item label='链接(path)' :labelCol='{span:5}' key="5">
                            <a-input v-model="routerInfo.path"/>
                        </a-form-item>
                         <a-form-item label='序列(sequence)' :labelCol='{span:5}' key="sequence">
                            <a-input v-model="routerInfo.sequence"/>
                        </a-form-item>
                        <a-form-item label='权限(visibleRoles)' :labelCol='{span:5}' key="6">
                            <a-select :value="routerInfo.visibleRoles" @change='authChange' mode="multiple" :dropdownMatchSelectWidth='true' :showArrow='true'> 
                                <a-select-option v-for="(item,index) in allroles" :key="index+item">
                                    {{item}}
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                        <a-form-item key="7" style="text-align:center">
                            <a-button @click="submit"  type="primary">提交</a-button>
                        </a-form-item>
                        </transition-group>
                    </a-form>
                    </a-spin>
            </a-col>
                </a-card>
        </a-row>
    </div>
</template>
<script>
export default {
    name:'userinfo',
    data(){
        return{
            treeData:[],
            addParent:{},
            addParentShow:false,
            treeLoading:false,
            formLoading:false,
            routerInfo:{
                "title":"",
                "route":"",
                "path":"",
                "icon":"plus",
                "component":"",
                "parent":null,
                "sequence":'',
                "visibleRoles":[]
            },
            allroles:[''],
            replaceFields:{children:'children', title:'title', key:'node' },
            labelCol: { span: 3 },
            wrapperCol: { span: 13 },
            changType:'',
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
        authChange(e){
            this.routerInfo.visibleRoles = e
        },
        change(item,type){
            this.addParentShow = false
            console.log(item,type)
            if(type == 'add'){
                    this.addParentShow = true
                    this.changType = 'add'
                    this.addParent = {title:item.title,...item.slots}
                    // item.children.push({title:'新增节点',route:'/',scopedSlots:{title:'change'}})
            }else if(type == 'del'){
                this.$axios.post('/users/delrouter',{
                    routerId:item.slots.id
                })
                .then((res)=>{
                    this.$message.success({ content: item.title+'   删除成功',duration:2.5});
                    this.initTree()
                })
            }else{

            }
        },
        submit(){
            if(this.addParentShow){
                this.routerInfo.parent = this.addParent.id
            }
            let url = ''
            if(this.changType == 'query'){
                url = '/users/updateRoute'
            }else{
                url = '/users/addroute'
            }
            this.$axios.post(url,this.routerInfo)
            .then((res)=>{
                if(res.code == 0){
                    this.$message.success({ content: '成功',duration:2.5});
                    this.defaultExpandedKeys = [res.data.route]
                    this.initTree()
                }else{
                    throw res.msg
                }
            }).catch((err)=>{
                this.$message.error({ content: err,duration:2.5});
            })
        },
        getRole(){
            this.$axios.post('/users/getrole')
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
            this.$axios.post('/users/getAuthRouter',{
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
            this.formLoading = true
            this.$axios.post('/users/queryRouter',{
                "node":e.node.dataRef.slots
            })
            .then((res)=>{
                if(res.code == 0){
                    this.changType = 'query'
                    this.routerInfo = res.data
                    if(res.data.parent){
                        this.addParent = res.data.parent
                        this.addParentShow = true
                    }else{
                        this.addParentShow = false
                    }

                    console.log(this.routerInfo)
                }
                this.formLoading = false
            }).catch(()=>{
                this.formLoading = false
            })
            console.log(selectedKeys,e)
        }
    }
}
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .33s ease-in;
}
.slide-fade-leave-active {
  transition: all .33s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transform: translateX(100px);
}
.slide-fade-enter, .slide-fade-leave-to{
  opacity: 0;
}
</style>
