<template>
	<div>
		<h1 class="title">你好啊</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
	//如果不采用scoped 同名的后面的引入后覆盖前面的引入 
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{School,Student}
	}
</script>

<style scoped>
	.title{
		color: red;
	}
</style>
