<template>
    <div id='cloud_file'>
        <a-card class="media" title='文件' style="height:100%;overflow:hidden" :bodyStyle='{padding:"0 0"}'>
            <a-button type="primary" shape="circle" icon='plus' slot="extra" class='add' @click="showAddModal"/>
            <a-table :columns="columns" :data-source="data" />
        </a-card>


         <a-modal v-model="addModal" title="添加" on-ok="handleOk" :destroyOnClose='true' :footer='null'>
            <a-form-model ref='file_add' :rules="rules" :model="fileInfo" :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-model-item prop="name" label="文件名">
                    <a-input v-model="fileInfo.name"  type='text'/>
                </a-form-model-item>
                <a-form-model-item prop="size" label="文件大小">
                    <a-input v-model="fileInfo.size" type="text"/>
                </a-form-model-item>
                <a-form-model-item prop="createTime" label="创建时间" >
                    <a-date-picker v-model="fileInfo.createTime" style="width: 100%;" @change='timeChange'   format='YYYY-MM-DD HH:mm:ss'/>
                </a-form-model-item>
                <a-form-model-item prop="description" label="描述">
                    <a-textarea v-model="fileInfo.description" :auto-size="{ minRows: 3 }"/>
                </a-form-model-item>
                <a-form-model-item>
                    <a-upload
                        name="file"
                        :multiple="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                       >
                        <a-button> <a-icon type="upload" /> Click to Upload </a-button>
                    </a-upload>
                </a-form-model-item>
                <a-form-model-item >
                    <a-button type='primary' @click="submit()">sumbit</a-button>
                </a-form-model-item>
            </a-form-model>
                    
                
            
        </a-modal>
    </div>
</template>
<script>
export default {
    name:'cloud_file',
    data() {
        return {
            data:[],
            createDate:(new Date),
            addModal:false,
            labelCol: { span: 4 },
            wrapperCol: { span:18 },
            tableLoading:false,
            fileInfo:{
                name:'',
                size:'',
                type:'',
                createTime:'',
                description:''
            },
            rules:{
                    name:[
                        { required:true,message: '用户名不能为空', trigger: ['change','blur'] }
                        ],
                    size:[
                        { required:true,message: '用户名不能为空', trigger: ['change','blur'] }
                        ],
                    type:[
                        { required:true,message: '用户名不能为空', trigger: ['change','blur'] }
                        ],
                    createTime:[
                        { required:true,message: '用户名不能为空', trigger: ['change','blur'] }
                        ],
                    description:[
                        { required:true,message: '用户名不能为空', trigger: ['change','blur'] }
                        ]
                },
            columns:[
            {
                title: '文件名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '创建日期',
                dataIndex: 'createTime',
                key: 'age',
            },
            {
                title: '描述',
                dataIndex: 'address',
                key: 'address 1',
                ellipsis: true,
            },
            {
                title: 'Long Column Long Column Long Column',
                dataIndex: 'address',
                key: 'address 2',
                ellipsis: true,
            },
            {
                title: 'Long Column Long Column',
                dataIndex: 'address',
                key: 'address 3',
                ellipsis: true,
            },
            {
                title: 'Long Column',
                dataIndex: 'address',
                key: 'address 4',
                ellipsis: true,
            }]
        }
    },  
    computed: {
        getTime(){
            let time = (new Date).getTime()

        },
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {
        submit(){
            console.log(this.fileInfo)
        },
        tableInit(){
            // this.$axios.post
        },
        timeChange(date, dateString) {
            console.log(date, dateString);
        },
        showAddModal(){
            this.addModal = true
        }
    },
}
</script>
<style lang="scss" scoped>
#cloud_file{
    height: 100%;
    .add{
       padding:0px 2px 2px 2px;
    }
}
</style>