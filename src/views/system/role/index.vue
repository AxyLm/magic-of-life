<template>
	<div id="role">
		<a-card class="form">
			<a-form-model :model="info" ref="seachForm" v-bind="layout">
				<a-row>
					<a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="4">
						<a-form-model-item label="角色名" prop="rolename" lab>
							<a-input v-model="info.rolename"> </a-input>
						</a-form-model-item>
					</a-col>
					<a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="4">
						<a-form-model-item label="角色" prop="rolecode">
							<a-input v-model="info.rolecode"> </a-input>
						</a-form-model-item>
					</a-col>
				</a-row>
			</a-form-model>
			<a-row justify="end" type="flex">
				<a-col>
					<a-button type="primary" @click="queryRole">查询</a-button>
					<router-link
						:to="{ path: 'roleInfo', query: { type: 'add' } }"
					>
						<a-button type="">新增</a-button>
					</router-link>
					<a-button type="" @click="resetForm('seachForm')"
						>重置</a-button
					>
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
					<a-table-column
						key="rolename"
						title="角色名"
						data-index="rolename"
						:width="150"
					/>
					<a-table-column
						key="rolecode"
						title="角色代码"
						data-index="rolecode"
						:width="150"
					/>
					<a-table-column
						key="remark"
						title="备注"
						data-index="remark"
					/>
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
								<a-popconfirm
									title="确定删除么?"
									@confirm="delRole(operating)"
								>
									<a-icon
										slot="icon"
										type="delete"
										style="color: red"
									/>
									<a-button type="danger" size="small"
										>删除</a-button
									>
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
					rolecode: "",
					rolename: "",
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
				this.$axios.post("/role/delrole", item).then((res) => {
					this.queryRole();
				});
			},
			queryRole() {
				this.tableLoading = true;
				this.$axios
					.post("/role/getrole", this.info)
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