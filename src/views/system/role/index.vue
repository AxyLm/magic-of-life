<template>
  <div id="role">
    <a-card class="form">
      <a-form-model :model="info" ref="seachForm" v-bind="layout">
        <a-row>
          <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="4">
            <a-form-model-item label="名称" prop="name" lab>
              <a-input v-model="info.name"> </a-input>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="4">
            <a-form-model-item label="角色" prop="roles">
              <a-input v-model="info.roles"> </a-input>
            </a-form-model-item>
          </a-col>
          <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="4">
            <a-form-model-item label="代码" prop="code">
              <a-input v-model="info.code" type="text"> </a-input>
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model>
      <a-row justify="end" type="flex">
        <a-col>
          <a-button type="primary" @click="queryRole">查询</a-button>
          <router-link :to="{ path: 'roleInfo', query: { type: 'add' } }">
            <a-button type="">新增</a-button>
          </router-link>
          <a-button type="" @click="resetForm('seachForm')">重置</a-button>
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
          :data-source="roleList"
          bordered
          :pagination="false"
          :loading="tableLoading"
        >
          <a-table-column key="name" title="名称" data-index="name" />
          <a-table-column key="code" title="代码" data-index="code" />
          <a-table-column key="roles" title="角色" data-index="roles" />
          <a-table-column key="action" title="操作" width="150px">
            <template slot-scope="operating">
              <a-col>
                <router-link
                  :to="{
                    path: 'roleInfo',
                    query: { type: 'edit', ...operating },
                  }"
                >
                  <a-button size="small">修改</a-button>
                </router-link>
                <a-popconfirm title="确定删除么?" @confirm="delRole(operating)">
                  <a-icon slot="icon" type="delete" style="color: red" />
                  <a-button type="danger" size="small">删除</a-button>
                </a-popconfirm>
              </a-col>
            </template>
          </a-table-column>
        </a-table>
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
      roleList: [],
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
      tableLazy: true,
      tableLoading: false,
    };
  },
  created() {
    this.queryRole();
  },
  methods: {
    delRole(item) {
      console.log(item);
      this.$axios.post("/users/delrole", item).then((res) => {
        this.queryRole();
      });
    },
    queryRole() {
      this.tableLoading = true;
      this.$axios
        .post("/users/getrole", { info: this.info })
        .then((res) => {
          if (res.code == 0) {
            this.roleList = res.data;
          }
          this.tableLoading = false;
          this.tableLazy = false;
        })
        .catch((err) => {
          this.tableLoading = false;
          this.tableLazy = false;
        });
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