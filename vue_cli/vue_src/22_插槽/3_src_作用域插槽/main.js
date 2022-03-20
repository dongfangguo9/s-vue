//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	}
})
//  结构变动比较大，但是不想创建新的组件。用作用域插槽：由vm定义组件结构，将数据从vc传递给vm，也是组件之间通信方式的一种
// 作用域插槽：数据在组件自身，但根据数生成的结构需要组件的使用者来决定