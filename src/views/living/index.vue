<template>
	<div id="role">
		<a-card class="form">
			<a-form-model :model="info" ref="seachForm" v-bind="layout">
				<a-row>
					<a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
						<a-form-model-item label="类型" prop="account">
							<a-input v-model="info.account" disabled> </a-input>
						</a-form-model-item>
					</a-col>
					<a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
						<a-form-model-item label="内容" prop="username" lab>
							<a-input v-model="info.username" disabled>
							</a-input>
						</a-form-model-item>
					</a-col>
					<a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
						<a-form-model-item label="时间" prop="rolecode">
							<a-input
								v-model="info.rolecode"
								type="text"
								disabled
							>
							</a-input>
						</a-form-model-item>
					</a-col>
				</a-row>
			</a-form-model>
			<a-row justify="end" type="flex">
				<a-col>
					<a-button type="primary" @click="queryList(1)"
						>查询</a-button
					>
					<router-link
						:to="{ path: 'livingInfo', query: { type: 'add' } }"
					>
						<a-button type="">新增</a-button>
					</router-link>
					<a-button type="" @click="resetForm('seachForm')" disabled
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
					:data-source="dataList"
					bordered
					:pagination="false"
					:loading="tableLoading"
				>
					<a-table-column
						key="content"
						title="内容"
						data-index="content"
					/>
					<a-table-column
						key="createTime"
						title="创建时间"
						data-index="createTime"
					/>
					<a-table-column key="action" title="素材" width="150px">
						<template slot-scope="operating">
							<a-col>
								<a-avatar size="large" v-for="item in operating.footageList.splice(0,2)" :key="item.url+item.id" :src="item.url+'?imageView2/0/interlace/1/q/10'"> </a-avatar>
							</a-col>
						</template>
					</a-table-column>
					<a-table-column key="action" title="操作" width="150px">
						<template slot-scope="operating">
							<a-col>
								<router-link
									:to="{
										path: 'userInfo',
										query: { type: 'edit', ...operating },
									}"
								>
									<a-button size="small" disabled
										>修改</a-button
									>
								</router-link>
								<a-popconfirm title="确定删除么?" @confirm="delData(operating.id)">
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
				dataList: [],
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
				pageSize: 10,
				pageIndex: 1,
				total: 0,
				tableLazy: true,
				tableLoading: false,
			};
		},
		created() {
			this.queryList(1);
		},
		methods: {
			listTopT(list){
				return list.splice(0,3)
			},
			delData(id) {
				this.$axios.post("http://localhost:8033/"+"lives/removeLive", {liveId:id}).then((res) => {
					this.queryList();
				});
			},
			queryList(pageIndex) {
				this.tableLoading = true;
				this.$axios
					.post("http://localhost:8033/"+"lives/list", {
						pageSize: this.pageSize,
						page: pageIndex || this.pageIndex,
					})
					.then((res) => {
						if (res.code == 200) {
							this.dataList = res.data;
							// this.total = res.data.count;
							// this.current = res.data.pageIndex;
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
				console.log(page);
				this.queryList(page);
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