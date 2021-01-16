<template>
	<a-layout id="components-layout-demo-responsive">
		<transition>
			<a-layout-sider
				breakpoint="lg"
				collapsed-width="0"
				@collapse="onCollapse"
				@breakpoint="onBreakpoint"
				:collapsed="collapsed"
				:trigger="null"
				v-show="!mobileSilder"
				style="overflow: hidden; position: sticky; top: 0"
			>
				<div class="logo" style="overflow: hidden">
					<img
						src="https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg"
						alt=""
						srcset=""
					/>
				</div>
				<menus theme="dark" />
			</a-layout-sider>
		</transition>
		<a-drawer
			placement="left"
			:mask="true"
			:closable="false"
			:visible="mobileSilderOpen"
			@close="onClose"
			v-show="mobileSilder"
			:bodyStyle="{ padding: '20px 0 20px 10px' }"
		>
			<div
				class="logo"
				style="overflow: hidden; maxheight: 40px"
				slot="title"
			>
				<img
					src="https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg"
					alt=""
					srcset=""
				/>
			</div>
			<menus theme="light" />
		</a-drawer>
		<a-layout style="overflow: hidden">
			<a-layout-header
				:style="{ background: '#fff', padding: 0, display: 'flex' }"
			>
				<span
					type="primary"
					:style="{
						cursor: 'pointer',
						padding: mobileSilder ? '0 10px' : '0 10px 0 25px',
						lineHeight: '65px',
						fontSize: '18px',
					}"
					@click="toggleCollapsed"
					ghost
				>
					<a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
				</span>
				<mHeader />
			</a-layout-header>
			<a-layout-content class="main-content">
				<transition name="slide-fade" mode="out-in">
					<rView />
				</transition>
			</a-layout-content>
			<a-layout-footer class="footer" v-if="PRO_Footer">
				<template v-if="!mobileSilder">
					<div>
						<span
							>Copyright © 2020 浮生若梦 All Rights Reserved.
							京ICP备19051903号
						</span>
					</div>
				</template>
				<template v-else>
					<div>
						<span>Copyright © 2020 浮生若梦</span>
					</div>
				</template>
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script>
	import menus from "./components/Menu";
	import mHeader from "./components/Header";
	import rView from "./components/Layout";
	export default {
		name: "Magic",
		components: { menus, mHeader, rView },
		data() {
			return {
				collapsed: false,
				mobileSilder: false,
				mobileSilderOpen: false,
			};
		},
		watch: {
			$route() {
				this.onClose();
			},
		},
		computed: {
			PRO_Footer() {
				if (process.env.NODE_ENV == "production") {
					return true;
				} else {
					return false;
				}
			},
		},
		created() {
			if (window.innerWidth <= 940) {
				this.mobileSilder = this.collapsed = true;
			} else {
				this.collapsed = this.mobileSilder = this.mobileSilderOpen = false;
			}
		},
		mounted() {
			window.onresize = (e) => {
				if (e.currentTarget.innerWidth <= 940) {
					this.mobileSilder = this.collapsed = true;
				} else {
					this.collapsed = this.mobileSilder = this.mobileSilderOpen = false;
				}
			};
		},
		methods: {
			toggleCollapsed() {
				this.collapsed = !this.collapsed;

				if (this.mobileSilder) {
					this.mobileSilderOpen = !this.mobileSilderOpen;
				}
			},
			onClose() {
				this.mobileSilderOpen = false;
			},
			onCollapse(collapsed, type) {
				console.log(collapsed, type);
			},
			onBreakpoint(broken) {
				console.log(broken);
			},
		},
	};
</script>
<style lang="scss" scoped>
#components-layout-demo-responsive {
	height: 100vh;
}
#components-layout-demo-responsive .logo {
	height: 32px;
	background: rgba(255, 255, 255, 0.2);
	margin: 16px;
}
//router transition
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
.main-content {
	margin: 20px 16px;
	overflow-x: hidden;
	overflow-y: auto;
	height: calc(100vh - 160px);
}

.footer {
	text-align: center;
	padding: 0 !important;
	background: #fff;
	font-size: 13px;

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
</style>
