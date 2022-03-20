//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
// on 订阅，emit发布 和消息订阅发布一样。消息订阅还需要第安装第三方库，因此首推全局事件总线
// 这里的原理涉及到原型对象和构造函数以及实例对象的索引，还需进一步了解