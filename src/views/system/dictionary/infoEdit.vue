<template>
	<div id="addrole">
		<a-card class="form" :title="title">
			<a-form-model
				ref="addForm"
				:model="info"
				:rules="rules"
				v-bind="layout"
			>
            <a-form-model-item label="字典归属" prop="vested">
					<a-input v-model="info.vested" type="text" />
				</a-form-model-item>
				<a-form-model-item label="字典名称" prop="data">
					<a-input v-model="info.data" type="text" />
				</a-form-model-item>
				<a-form-model-item label="字典代码" prop="code">
					<a-input v-model="info.code" type="text" />
				</a-form-model-item>
				<a-form-model-item label="备注" prop="remark">
					<a-textarea v-model="info.remark" :row="3" />
				</a-form-model-item>
				<a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-col>
						<a-button type="primary" @click="submitForm('addForm')">
							提交
						</a-button>
						<a-button style="" @click="resetForm('addForm')">
							重置
						</a-button>
						<a-button style="" @click="back('addForm')">
							返回
						</a-button>
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
					vested: "",
					code: "",
					data: "",
					remark: "",
				},
				title: "新增数据字典",
				rules: {
					code: [{ required: true, message: "不能为空" }],
					data: [{ required: true, message: "不能为空" }],
					vested: [{ required: true, message: "不能为空" }],
				},
				layout: {
					labelCol: { span: 4 },
					wrapperCol: { span: 14 },
				},
			};
		},
		created() {
			if (this.$route.query.type == "edit") {
				this.title = "修改数据字典";
				this.info = {
					...this.info,
					...this.$route.query,
				};
			}else if(this.$route.query.type == "copy"){
                const {vested,code,data,remark} = this.$route.query
                    
                this.info = {vested,code,data,remark}
            }
		},
		methods: {
			back() {
				this.$router.push("dictionary");
			},
			saveRole(item) {
				var url = "addDataCode";
				if (this.$route.query.type == "edit") {
					url = "editDataCode";
				}
				this.$axios
					.post("/system/" + url, item)
					.then((res) => {
						if (res.code == 0) {
							this.$message.success({
								content: "成功",
								duration: 1.5,
							});
							this.back();
						} else {
							this.$message.error({
								content: res.msg || "失败",
								duration: 1.5,
							});
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