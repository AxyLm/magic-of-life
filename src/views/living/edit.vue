<template>
	<div id="addrole">
		<a-card class="form" :title="title">
			<a-form-model
				ref="addForm"
				:model="info"
				:rules="rules"
				v-bind="layout"
			>
				<a-form-model-item label="内容" prop="content">
					<a-textarea  v-model="info.content" type="text" />
				</a-form-model-item>

				<a-row>
					<a-upload
						action="https://upload-z1.qiniup.com/"
						list-type="picture-card"
                        :data="{token:qnToken}"
						:file-list="fileList"
						@preview="handlePreview"
						@change="handleChange"
					>
						<div v-if="fileList.length < 8">
							<a-icon type="plus" />
							<div class="ant-upload-text">Upload</div>
						</div>
					</a-upload>
					<a-modal
						:visible="previewVisible"
						:footer="null"
						@cancel="handleCancel"
					>
						<img
							alt="example"
							style="width: 100%"
							:src="previewImage"
						/>
					</a-modal>
				</a-row>
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
	function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	}
	import request from "@/utils/request";
	export default {
		name: "role",
		data() {
			return {
				info: {
					content: "",
				},
				title: "新增",
				rules: {},
				roleList: [],
				layout: {
					labelCol: { span: 4 },
					wrapperCol: { span: 14 },
				},
				fileList: [],
				previewVisible: false,
				previewImage: "",
                qnToken:null,
			};
		},
		created() {
			this.getRole();
			if (this.$route.query.type == "edit") {
				this.title = "修改";
				this.info = this.$route.query;
			}
            this.getQiuNiuToken()
		},
		methods: {
			getQiuNiuToken() {
               this.$axios.get("http://localhost:8033/"+"qiniu/getToken").then((res)=>{
                   this.qnToken = res.data
               })
				
			},
			handleCancel() {
				this.previewVisible = false;
			},
			async handlePreview(file) {
				if (!file.url && !file.preview) {
					file.preview = await getBase64(file.originFileObj);
				}
				this.previewImage = file.url || file.preview;
				this.previewVisible = true;
			},
			handleChange({ fileList }) {
				console.log(fileList)
				this.fileList = fileList;
			},
			back() {
				this.$router.push("living");
			},
			save(item) {
				var url = "adduser";
				item.liveStatus = 10
				if (this.$route.query.type == "edit") {
					url = "edituser";
				}
				this.$axios
					.post("http://localhost:8033/"+"lives/saveLive", item)
					.then((res) => {
						if (res.code == 200) {
							this.$message.success({
								content: "成功",
								duration: 1.5,
							});
							// this.back();
						} else {
							this.$message.error({
								content: res.msg || "失败",
								duration: 1.5,
							});
						}
					})
					.catch((err) => {
						this.$message.error({ content:err.msg|| "网络异常", duration: 1.5 });
					});
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log(this.info);
						var info = this.info
						const list = this.fileList.map(e=>{
							if(e.status == "done"){
								let showType = null;
								if(e.type.indexOf("image") > -1){
									showType = "image"
								}

								if(e.type.indexOf("video") > -1){
									showType = "video"
								}
								return {
									showType,
									url:"https://qn.soulfree.cn/"+e.response.key
								}
							}
						})
						info.footageList = list
						info.like  = 0
						this.save(info);
					} else {
						return false;
					}
				});
			},
			getRole() {
				this.$axios.post("/role/getrole").then((res) => {
					if (res.code == 0) {
						this.roleList = res.data;
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