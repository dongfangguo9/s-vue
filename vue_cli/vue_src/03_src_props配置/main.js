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
// props实现了数据传递，数据传递方向为父向子传递
// 在父组件中通过调用子组件，通过属性的方式传递值，子组件通过props关键字接收key中的value
// props不但能够接收对象还能接收函数，接收的函数可以通过this.name 调用
// props中的内容不允许修改，但如果是对引用值进行的改变，vue无法识别，它的不允许只能实现浅层监控