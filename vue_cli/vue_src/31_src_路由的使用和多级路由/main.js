//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	router:router
})
// 路由是一个插件，按照插件的使用规则，router的引入路由后的路由接口实例，用于配置路由信息
// 一般路由组件单独放在一个文件夹中，这里放在pages中，路由组件是通过路由配置文件展示的，一般组件是通过使用组件标签展示的
