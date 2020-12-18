<template>
  <div id="role">
      1
    <!-- <a-table :columns="columns" :data-source="roleList" bordered>
        <span slot="code" slot-scope="tags">
            <a-tag color='geekblue'>
                {{ tags.toUpperCase() }}
            </a-tag>
        </span>
        <template slot="operating">
            <a-tag color="cyan">修改</a-tag>
            <a-tag color="red">禁用</a-tag>
        </template >
    </a-table> -->
    <a-form>

    </a-form>
    <a-row>
        <a-col>
            <a-button>添加</a-button>
        </a-col>
    </a-row>
    <a-table  :data-source="roleList" bordered>
        <a-table-column key='name' title="名称" data-index='name' />
        <a-table-column key='code' title='代码' data-index='code' />
        <a-table-column key='roles' title='角色' data-index='roles' />
        <a-table-column  title='操作' width='150px'>
            <template slot-scope="{operating}">
                <a-tag color="cyan">修改</a-tag>
                <a-tag color="red">禁用</a-tag>
            </template>
        </a-table-column>
    </a-table>
  </div>
</template>
<script>
import request from '../../../../utils/request'
export default {
    name:'role',
    data() {
        return {
            roleList:[],
            columns:[
                {
                    key:'0',
                    title: '角色',
                    dataIndex: 'name',
                },
                {
                    key:'1',
                    title: '代码',
                    dataIndex: 'code',

                },
                {
                    key:'2',
                    title: '角色',
                    dataIndex: 'roles',
                },
                {
                    key:'3',
                    title: '操作',
                    dataIndex: 'operating',
                    scopedSlots: { customRender: 'operating' },
                }
            ],
        };
    },
    created(){
        this.queryRole()
    },
    methods:{
        queryRole(){
            this.$axios.post('/users/getrole',{})
            .then((res)=>{
                this.roleList = res.data
            })
        }
    }
};
</script>
<style lang="scss" scoped>
#role {
  background: #fff;
  padding: 10px;
  height: 100%;
}
</style>