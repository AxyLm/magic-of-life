<template>
  <div id="addrole">
    <a-card class="form" :title="title">
      <a-form-model ref="addForm" :model="info" :rules="rules" v-bind="layout">
        <a-form-model-item label="头像" prop="avatar">
          <a-input v-model="info.avatar" type="text" />
        </a-form-model-item>
        <a-form-model-item label="用户名" prop="usersName">
          <a-input v-model="info.usersName" type="text" />
        </a-form-model-item>
        <a-form-model-item label="用户Id" prop="uId">
          <a-input v-model="info.uId" type="text" />
        </a-form-model-item>
        <a-form-model-item label="账户" prop="account">
          <a-input v-model="info.account" type="text" />
        </a-form-model-item>
        <a-form-model-item label="密码" prop="password">
          <a-input v-model="info.password" type="text" />
        </a-form-model-item>
        <a-form-model-item label="角色" prop="role">
          <a-select v-model="info.role">
            <a-select-option v-for="(item,index) in roleList" :key="index+item" :value='item.rolecode'>
                {{item.rolename}}
            </a-select-option>
        </a-select>
        </a-form-model-item>
        <a-form-model-item label="手机号" prop="phone">
          <a-input v-model="info.phone" type="text" />
        </a-form-model-item>
        <a-form-model-item label="邮箱" prop="emile">
          <a-input v-model="info.emile" type="text" />
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
          usersName:"",
          password:"",
          role:"",
          phone:"",
          emile:"",
          avatar:"",
          account:"",
          uId:"",
      },
      title: "新增用户",
      rules: {
        uId: [{ required: true, message: "用户名不能为空" }],
        usersName: [{ required: true, message: "用户名不能为空" }],
        password: [{ required: true, message: "密码不能为空" }],
        account: [{ required: true, message: "账户不能为空" }],
        role: [{ required: true, message: "请选择角色" }],
      },
      roleList:[],
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  created() {
      this.getRole()
    if (this.$route.query.type == "edit") {
      this.title = "修改用户";
      this.info = this.$route.query;
    }
  },
  methods: {
    back() {
      this.$router.push("userMng");
    },
    save(item) {
      var url = "adduser";
      if (this.$route.query.type == "edit") {
        url = "edituser";
      }
      item.rolecode = item.role
      this.$axios
        .post("/user/" + url, item )
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
            console.log(this.info)
          this.save(this.info);
        } else {
          return false;
        }
      });
    },
    getRole(){
        this.$axios.post('/role/getrole')
        .then((res)=>{
            if(res.code == 0){
                this.roleList = res.data
            }
        })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>