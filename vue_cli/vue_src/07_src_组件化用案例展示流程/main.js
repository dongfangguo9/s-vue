//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App)
})
// 组件化编码流程：
// 1.实现静态数据组件
// 2.展示动态数据：数据的类型，名称是什么 数据保存在哪个文件
// 3.交互