<template>
  <div id="addrole">
    <a-card class="form" :title="title">
      <a-form-model ref="addForm" :model="info" :rules="rules" v-bind="layout">
        <a-form-model-item label="名字" prop="name">
          <a-input v-model="info.name" type="text" />
        </a-form-model-item>
        <a-form-model-item label="角色代码" prop="code">
          <a-input v-model="info.code" type="text" />
        </a-form-model-item>
        <a-form-model-item label="角色" prop="roles">
          <a-input v-model="info.roles" type="text" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-col>
            <a-button type="primary" @click="submitForm('addForm')">
              提交
            </a-button>
            <a-button style="" @click="resetForm('addForm')"> 重置 </a-button>
            <a-button style="" @click="back('addForm')"> 返回 </a-button>
          </a-col>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  name: "role",
  data() {
    return {
      info: {
        code: "",
        name: "",
        roles: "",
      },
      title: "新增角色",
      rules: {
        code: [{ required: true, message: "不能为空" }],
        name: [{ required: true, message: "不能为空" }],
        roles: [{ required: true, message: "不能为空" }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  created() {
    if (this.$route.query.type == "edit") {
      this.title = "修改角色";
      this.info = this.$route.query;
    }
  },
  methods: {
    back() {
      this.$router.push("role");
    },
    saveRole(item) {
      var url = "addrole";
      if (this.$route.query.type == "edit") {
        url = "editrole";
      }
      this.$axios
        .post("/role/" + url, { info: item })
        .then((res) => {
          if (res.code == 0) {
            this.$message.success({ content: "成功", duration: 1.5 });
            this.back();
          } else {
            this.$message.error({ content: res.msg || "失败", duration: 1.5 });
          }
        })
        .catch((err) => {
          this.$message.error({ content: "网络异常", duration: 1.5 });
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.saveRole(this.info);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>