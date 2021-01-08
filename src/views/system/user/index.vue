<template>
  <div id="role">
    <a-card class="form">
      <a-form-model :model="info" ref="seachForm" v-bind="layout">
        <a-row>
          <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="4">
            <a-form-model-item label="用户名" prop="usersName" lab>
              <a-input v-model="info.usersName" disabled> </a-input>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="4">
            <a-form-model-item label="账户" prop="roles">
              <a-input v-model="info.roles" disabled> </a-input>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="4">
            <a-form-model-item label="角色" prop="code">
              <a-input v-model="info.code" type="text" disabled> </a-input>
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
      <a-row justify="end" type="flex">
        <a-col>
          <a-button type="primary" @click="queryRole(1)">查询</a-button>
          <router-link :to="{ path: 'userInfo', query: { type: 'add' } }">
            <a-button type="">新增</a-button>
          </router-link>
          <a-button type="" @click="resetForm('seachForm')" disabled>重置</a-button>
        </a-col>
      </a-row>
    </a-card>
    <div class="table">
      <a-skeleton
        active
        :loading="tableLazy"
        :paragraph="{ rows: 10 }"
        :title="false"
      >
        <a-table
          :data-source="userList"
          bordered
          :pagination="false"
          :loading="tableLoading"
        >
          <a-table-column key="name" title="账号" data-index="usersName" />
          <a-table-column key="code" title="用户id" data-index="uId" />
          <a-table-column key="roles" title="角色" data-index="role" />
          <a-table-column key="action" title="操作" width="150px">
            <template slot-scope="operating">
              <a-col>
                <router-link
                  :to="{
                    path: 'userInfo',
                    query: { type: 'edit', ...operating },
                  }"
                >
                  <a-button size="small" disabled>修改</a-button>
                </router-link>
                <!-- <a-popconfirm title="确定删除么?" @confirm="delRole(operating)"> -->
                  <!-- <a-icon slot="icon" type="delete" style="color: red" /> -->
                  <a-button type="danger" size="small" disabled>删除</a-button>
                <!-- </a-popconfirm> -->
              </a-col>
            </template>
          </a-table-column>
        </a-table>
        <div style="padding:10px">
            <a-pagination v-model="current" :total="total" show-less-items :pageSize='pageSize' @change='pageChange'/>
        </div>
      </a-skeleton>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  name: "role",
  data() {
    return {
      userList: [],
      info: {
        code: "",
        name: "",
        roles: "",
      },
      layout: {
        labelCol: {
          span: 4,
          xs: 24,
          sm: 6,
          xl: 6,
        },
        wrapperCol: {
          span: 18,
          xs: 24,
          sm: 18,
          xl: 18,
        },
      },
      current: 0,
      pageSize: 5,
      pageIndex:1,
      total:0,
      tableLazy: true,
      tableLoading: false,
    };
  },
  created() {
    this.queryRole(1);
  },
  methods: {
    delRole(item) {
      console.log(item);
      this.$axios.post("/users/delrole", item).then((res) => {
        this.queryRole();
      });
    },
    queryRole(pageIndex) {
      this.tableLoading = true;
      this.$axios.post("/user/getUserList", {
          pageSize:this.pageSize,
          pageIndex:pageIndex||this.pageIndex,
       })
        .then((res) => {
          if (res.code == 0) {
            this.userList = res.data
            this.total = res.count
            this.current = res.pageIndex
          }
          this.tableLoading = false;
          this.tableLazy = false;
        })
        .catch((err) => {
          this.tableLoading = false;
          this.tableLazy = false;
        });
    },
    pageChange(page,pageSize){
        console.log(page)
        this.queryRole(page)
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
#role {
  padding: 10px;
  height: 100%;
  .form {
    margin-bottom: 10px;
  }
  .table {
    background-color: #fff;
  }
}
</style>