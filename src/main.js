// 1. 导入Vue 
import Vue from 'vue';
//2.导入主组件 app.vue
import App from './app.vue';
//3. 导入我们需要的路由vue-router  下载路由:cnpm install vuerouter --save-dev
import vueRouter from 'vue-router';
// 绑定到vue中
Vue.use(vueRouter);
//4. 导入 ajax请求数据的vue插件 vue-resource;
import vueResource from 'vue-resource';
// 绑定到vue中
Vue.use(vueResource);


var vm = new Vue({
	//通过render对象 注册App组件 让所有的子组件都依赖App这个主组件进行页面的渲染
	//render:function(create){create(App)} ES5 函数的写法的写法
	render:c=>c(App);// ES6 的函数的写法
});

// 下面是导入我们需要的css样式文件
//1.自定义的样式文件 mobile-base.css 因为是直接使用 所以直接导入css文件即可
import '../statics/css/mobile-base.css'; // 初始化css
import '../statics/css/site.css';        // 全局css
// mui ui组件  因为是本地css文件 直接导入
import '../statics/mui/css/mui.css';     // mui 组件css
import '../statics/mui/fonts/mui.ttf';     // mui 组件字体

//2.导入 mint UI 组件库  因为是npm的方式安装  所以需要在vue中绑定
import mintUI from 'mint-ui';
// 绑定到vue中 才能正常的使用
Vue.use(mintUI);
// 同时必须引入mint-ui的样式 根据文档引入样式
import 'mint-ui/lib/style.css';






