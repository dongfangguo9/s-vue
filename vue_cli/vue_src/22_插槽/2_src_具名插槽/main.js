//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
//import vueResource from 'vue-resource'
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
//Vue.use(vueResource)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	// beforeCreate() {
	// 	Vue.prototype.$bus = this
	// }
})
// 当你想要搞多个插槽时，就使用具名插槽，注意，具名插槽和匿名插槽写法是不一样的。