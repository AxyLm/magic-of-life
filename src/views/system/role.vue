<template>
  <div id="role">
    <a-table :columns="columns" :data-source="roleList">
        <span slot="code" slot-scope="tags">
            <a-tag color='geekblue'>
                {{ tags.toUpperCase() }}
            </a-tag>
            </span>
    </a-table>
  </div>
</template>
<script>
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
}
</style>