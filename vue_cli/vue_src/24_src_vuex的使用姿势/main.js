// 首字母大写是规范 import的调用和位置无关，编译器会将优先调用import中的内容
//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//引入store 默认引入index.js ,如果没有就会报错
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	//
	store,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})
// vuex的作用是全局组件通信，省略了订阅发送机制繁琐的写法，不是说订阅发送机制不好，只是当组件之间既要订阅又要发送写起来很烦
// vuex指令：npm i vue3@3 当前是vue2因此指定vuex版本3
// 配置vuex后能够传入一个store进去，这个store就是引入的vuex框架的接口实例，必须要传入。
// vuex定义好了框架流程， 需要手动实现接口，他把操作的函数进行了封装。我所见到了全局操作有通过wiondowSession操作的，好像更方便