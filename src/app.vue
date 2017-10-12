<template>
	<!-- vue2.0中 template中的元素必须有一个跟元素包裹 -->
	<div>
		<!--header begin -->
		<mt-header fixed title="欢迎来到网上商城"></mt-header>
		<!--  header end -->

		<!-- main 渲染区 -->
		<!-- 当正确的注册路由的是 引入 -->
		<router-view></router-view>

		<!-- 公共footer begin -->
		<div>
			<nav class="mui-bar mui-bar-tab">
				<router-link class="mui-tab-item mui-active" to="/home">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">首页</span>
				</router-link>
				<router-link class="mui-tab-item" to="#tabbar-with-chat">
					<span class="mui-icon mui-icon-email"></span>
					<span class="mui-tab-label">消息</span>
				</router-link>
				<router-link class="mui-tab-item" to="#tabbar-with-contact">
					<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
					<span class="mui-tab-label">购物车</span>
				</router-link>
				<router-link class="mui-tab-item" to="#tabbar-with-map">
					<span class="mui-icon mui-icon-gear"></span>
					<span class="mui-tab-label">设置</span>
				</router-link>
			</nav>
		</div>
		
	</div>
</template>

<script>
	// ES6导出一个对象的语法 export default
	export default{

	}
</script>

<style scoped>

</style>