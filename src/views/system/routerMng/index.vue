<template>
    <div style="height:90%;width:100%">
        <a-row style="background:#fff;height:100%">
            <a-card title="路由管理" style="width:100%;height:auto;min-height:300px" >
                <a-col :span='10' :xs="24" :xl='10' >
                    <a-spin tip="Loading..." :spinning='treeLoading'>
                        <a-tree blockNode draggable autoExpandParent
                            :tree-data="treeData"
                            :replaceFields='replaceFields'
                            :defaultExpandAll="true"
                            :defaultExpandParent='true'
                            :defaultExpandedKeys='["/"]'
                            @select='selTree'
                            @dragstart='dragstart'
                            @dragend='dragend'
                            @drop='onDrop'>
                            <div slot-scope="item" slot="change" style="widht:100%">
                                <a-icon :type="item.icon" />
                                <span >{{item.title}}</span>
                                <span style="float:right;">
                                    <a-button size='small' type="link" @click.prevent.stop='change(item,"add")'><span  style="color:#1890ff !important">添加</span></a-button>
                                    <a-popconfirm title="确定删除么?" @confirm='delRoute(item)' v-show="!item.disabled">
                                        <a-icon slot="icon" type="delete" style="color: red" />
                                        <a-button size='small' type="link"><span  style="color:#1890ff !important">删除</span></a-button>
                                    </a-popconfirm>
                                </span>
                            </div>
                        </a-tree>
                    </a-spin>
                </a-col>
                <a-col :span='14' :xs="24" :xl='14'>
                    <a-spin tip='Loading' :spinning='formLoading'>
                    <a-form layout='horizontal' :label-col="labelCol" :wrapper-col="wrapperCol" :form='routerInfo' :disabled="true" ref='saveInfo'>
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
                            <a-form-item label='类型(type)' :labelCol='{span:5}' key="type">
                                <a-select v-model="routerInfo.type" :showArrow='true'> 
                                    <a-select-option v-for="(item,index) in tyleList" :key="index+item" :value='item.code'>
                                        {{item.value}}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                            <a-form-item label='权限(visibleRoles)' :labelCol='{span:5}' key="6">
                                <a-select :value="routerInfo.visibleRoles" @change='authChange' mode="multiple" :dropdownMatchSelectWidth='true' :showArrow='true'> 
                                    <a-select-option v-for="(item,index) in allroles" :key="index+item" :value='item.code'>
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
                "type":"",
                "visibleRoles":[]
            },
            allroles:[''],
            replaceFields:{children:'children', title:'title', key:'id' },
            labelCol: { span: 3 },
            wrapperCol: { span: 13 },
            changType:'',
            tyleList:[
                {
                    code:"01",
                    value:'菜单'
                },
                {
                    code:"02",
                    value:"按钮"
                }
            ]
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
            console.log(e)
            this.routerInfo.visibleRoles = e
        },
        delRoute(item){
            this.addParentShow = false
            this.$axios.post('/users/delrouter',{
                routerId:item.id
            })
            .then((res)=>{
                this.$message.success({ content: item.title+'   删除成功',duration:2.5});
                this.initTree()
            })
        },
        change(item,type){
            this.addParentShow = false
            console.log(item,type)
            if(type == 'add'){
                    this.routerInfo = {
                        "title":"",
                        "route":"",
                        "path":"",
                        "icon":"plus",
                        "component":"",
                        "parent":null,
                        "sequence":'',
                        "type":"",
                        "visibleRoles":[]
                    }
                    this.addParentShow = true
                    this.changType = 'add'
                    this.addParent = item
                    // item.children.push({title:'新增节点',route:'/',scopedSlots:{title:'change'}})
            }else if(type == 'del'){
                this.$axios.post('/users/delrouter',{
                    routerId:item.id
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
            //src\views\system\monit\frp\index.vue
            this.treeLoading = true
            this.$axios.post('/users/getAuthRouter',{"flag":1})
            .then((res)=>{
                if(res.code == 0){
                    this.$store.dispatch('SetRouter',res.data)
                    this.treeData = [
                        {
                            title:"根节点",
                            id:null,
                            route:'/',
                            disabled:true,
                            selectable:true,
                            scopedSlots:{title: 'change'},
                            children:res.data
                        }
                    ]
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
            let sequence = event.dragNode.dataRef.sequence || 9
            let roteInfo = {
                ...event.dragNode.dataRef,
                sequence,
                parent:event.node.dataRef.id
            }
            this.$axios.post('/users/updateRoute',roteInfo)
            .then((res)=>{
                if(res.code == 0){
                    this.$message.success({ content: '成功',duration:2.5});
                    this.initTree()
                }
            })

            console.log(roteInfo)
            event.node.dataRef.slots
            console.log(event)
            console.log(event.dragNode.eventKey ,'进入',event.node.eventKey)
        },
        selTree(selectedKeys, e){
            this.formLoading = true
            let {id,parent} = e.node.dataRef
            this.$axios.post('/users/queryRouter',{id,parent})
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
