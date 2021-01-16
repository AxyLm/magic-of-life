<template>
	<div style="height: 90%">
		<!--position:absolute; v-scrollBar> -->
		<!-- <a-card style="height: 100%" :bodyStyle="{ height: '100%' }"> -->
		<a-row style="height: 100%" :gutter="gutter">
			<a-col :span="24" :xl="6">
				<a-card>
					<a-row :gutter="gutter">
						<a-col :span="24" style="text-align: center">
							<a-avatar :size="100" :src="avatar"></a-avatar>
						</a-col>
						<a-col :span="24" style="text-align: center">
							<h3>{{ userInfo.username }}</h3>
						</a-col>
					</a-row>
					<a-divider />
					<a-row :gutter="gutter" v-if="userInfo.emile">
						<a-col :span="24">
							<a :href="'mailto:+' + userInfo.emile">
								<span style="color: rgba(0, 0, 0, 0.65)">
									<a-icon type="mail" />
									&nbsp;{{ userInfo.emile }}</span
								>
							</a>
						</a-col>
					</a-row>
					<a-row :gutter="gutter" v-if="userInfo.phone">
						<a-col :span="24">
							<a :href="'tel:+' + userInfo.phone">
								<span style="color: rgba(0, 0, 0, 0.65)">
									<a-icon type="phone" theme="filled" />
									{{ userInfo.phone }}</span
								>
							</a>
						</a-col>
					</a-row>
				</a-card>
			</a-col>
			<a-col :span="24" :xl="18">
				<a-card
					title="My blog"
					:bordered="false"
					style="width: 100%; height: calc(100vh - 140px)"
					:bodyStyle="{
						height: 'calc(100% - 60px)',
						overflowY: 'auto',
						padding: 0,
					}"
				>
					<iframe
						src="https://www.soulfree.cn"
						frameborder="0"
						scrolling="no"
						style="width: 100%; height: 2500px; border: none"
					/>
				</a-card>
			</a-col>
		</a-row>
		<!-- </a-card> -->
	</div>
</template>
<script>
	export default {
		name: "userinfo",
		data() {
			return {
				gutter: [16, 32],
				taglist: [],
				userInfo: {
					account: "",
					emile: "",
					phone: "",
					username: "",
				},
			};
		},
		computed: {
			avatar() {
				try {
					console.log(this.$store.state.user.userInfo);
					return this.$store.state.user.userInfo.avatar;
				} catch (error) {
					return "";
				}
			},
		},
		created() {
			this.userInfo = this.$store.state.user.userInfo;
		},
		methods: {
			shuffle() {
				for (let i = 1; i < this.taglist.length; i++) {
					var random = Math.floor(Math.random() * (i + 1));
					[this.taglist[i], this.taglist[random]] = [
						this.taglist[random],
						this.taglist[i],
					];
				}
			},
			addtag() {
				console.log(Math.random(0, 1) * this.taglist.length.toFixed(0));
				this.taglist.splice(
					Math.random(0, 1) * this.taglist.length.toFixed(0),
					0,
					this.taglist.length
				);
			},
			con() {
				console.log(global);
			},
		},
	};
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
	transition: all 0.33s ease-in;
}
.slide-fade-leave-active {
	transition: all 0.33s cubic-bezier(1, 0.5, 0.8, 1);
	transform: translateX(100px);
}
.slide-fade-enter,
.slide-fade-leave-to {
	opacity: 0;
}

@media screen and (max-width: 1200px) {
	/deep/ .ant-card-body:nth-child(2) {
		height: auto;
		overflow-y: visible !important;
		iframe {
			height: 500px;
		}
	}
}
</style>
