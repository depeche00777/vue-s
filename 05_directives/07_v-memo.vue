<template>
	<div class="box">
		<h3>v-memo</h3>
		<div class="description">
			- v-memo=[]
			- []안의 아이템이 바뀌었을때만 렌더링, 변수가 증가해도 화면에 표시되지 않다가, []안의 아이템이 바뀔때 한꺼번에 화면에 표시해준다
			- []  비워놨을때는  v-once 와 동일
		</div>
		<p>구독자수: {{ subscriber }}</p>
		<p>조회수: {{ views }}</p>
		<p>좋아요: {{ likes }}</p>
		<button @click="subscriber++">구독자수+</button>
		<button @click="views++">조회수+</button>
		<button @click="likes++">좋아요+</button>

		<div v-memo="[subscriber, views]" class="box">
			<p>구독자수: {{ subscriber }}</p>
			<p>조회수: {{ views }}</p>
			<p>좋아요: {{ likes }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
		const subscriber = ref(6000)
		const views = ref(400)
		const likes = ref(120)

		return { subscriber, views, likes }
	}
}
</script>

<style lang="scss" scoped>
	.box {
    border:1px solid lightgray;
    margin: 50px 10px;
    padding:0 20px 20px;

    .description { color: gray; font-size: 16px; padding-top: 20px;}
  }
</style>