<template>
	<div id="role">
		<a-card class="form">
			<a-form-model :model="info" ref="seachForm" v-bind="layout">
				<a-row>
					<a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="6">
						<a-form-model-item label="字典归属" prop="vested">
							<a-input v-model="info.vested"> </a-input>
						</a-form-model-item>
					</a-col>
					<a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="6">
						<a-form-model-item label="字典名称" prop="data" lab>
							<a-input v-model="info.data">
							</a-input>
						</a-form-model-item>
					</a-col>
					<a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" :xxl="6">
						<a-form-model-item label="字段代码" prop="code">
							<a-input v-model="info.code" type="text">
							</a-input>
						</a-form-model-item>
					</a-col>
				</a-row>
			</a-form-model>
			<a-row justify="end" type="flex">
				<a-col>
					<a-button type="primary" @click="query(1)"
						>查询</a-button
					>
					<router-link
						:to="{ path: 'dicInfo', query: { type: 'add' } }"
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
					:data-source="tableData"
					bordered
					:pagination="false"
					:loading="tableLoading"
				>
					<a-table-column
						key="vested"
						title="字段归属"
						data-index="vested"
					/>
					<a-table-column
						key="data"
						title="字典名称"
						data-index="data"
					/>
					<a-table-column
						key="code"
						title="字典代码"
						data-index="code"
					/>
					<a-table-column
						key="remark"
						title="备注"
						data-index="remark"
					/>
					<a-table-column key="action" title="操作" width="200px">
						<template slot-scope="operating">
							<a-col>
								<router-link
									:to="{
										path: 'dicInfo',
										query: { type: 'edit', ...operating },
									}"
								>
									<a-button size="small" disabled
										>修改</a-button
									>
								</router-link>
                                <router-link
									:to="{
										path: 'dicInfo',
										query: { type: 'copy', ...operating },
									}"
								>
									<a-button size="small"
										>复制</a-button
									>
								</router-link>
								<a-popconfirm title="确定删除么?" @confirm="ListDel(operating)">
								<a-icon slot="icon" type="delete" style="color: red" />
								<a-button type="danger" size="small"
									>删除</a-button
								>
								</a-popconfirm>
							</a-col>
						</template>
					</a-table-column>
				</a-table>
				<div style="padding: 10px">
					<a-pagination
						v-model="current"
						:total="total"
						show-less-items
						:pageSize="pageSize"
						@change="pageChange"
					/>
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
				tableData: [],
				info: {
					vested: "",
					code: "",
                    data: "",
					remark: "",
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
				pageSize: 20,
				pageIndex: 1,
				total: 0,
				tableLazy: true,
				tableLoading: false,
			};
		},
		created() {
            this.query(1);
            this.$axios.post("/system/getDataCode", {
                        vested:"ROUTER_TYPE",
					})
		},
		methods: {
			ListDel(item) {
				console.log(item);
				this.$axios.post("/system/delDataCode", item).then((res) => {
					this.query();
				});
			},
			query(pageIndex) {
				this.tableLoading = true;
				this.$axios
					.post("/system/getDataCodeByPage", {
                        ...this.info,
						pageSize: this.pageSize,
						pageIndex: pageIndex || this.pageIndex,
					})
					.then((res) => {
						if (res.code == 0) {
							this.tableData = res.data.list;
							this.total = res.data.count;
							this.current = res.data.pageIndex;
						}
						this.tableLoading = false;
						this.tableLazy = false;
					})
					.catch((err) => {
						this.tableLoading = false;
						this.tableLazy = false;
					});
			},
			pageChange(page, pageSize) {
				this.query(page);
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