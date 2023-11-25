<template>
		<h2>v-model ( 양방향 바인딩 )</h2>
		<div class="description">
			-v-model : 사용자 입력을 받는 form  엘리먼트 또는 컴포넌트에 사용하는 양방향 바인딩<br>
			- input , select, textarea,  컴포넌트에서 사용
			- 수식어(Modifiers) 는 .number, .trim, lazy  
		</div>

	<div class="box">
		<h3>input value</h3>
		<!-- <input  :value="inputValue" @:input = "(event)=>inputValue = event.target.value" > -->

		<input  v-model.lazy="inputValue" > 
		<div>{{ inputValue }}</div>
		<div>데이타의 타입은? {{ typeof inputValue }}</div>

	</div>

	<div class="box">
		<h3>textarea value</h3>
		<!-- <textarea :value="textareaValue" @input="e=>{ textareaValue = e.target.value}"></textarea> -->
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>
	</div>

	<div class="box">
		<h3>checkbox value</h3>
		<label for="check"> {{ checkboxValue }}</label>
		<!-- <input type="checkbox" id="check" :checked="checkboxValue" @change = "e => checkboxValue = e.target.checked"> -->
		<input 
			type="checkbox" 
			id="check" 
			v-model="checkboxValue"
			true-value="체크되었음!"
			false-value="미 체크"
		>
	</div>

	<div class="box">
		<h3>checkbox values</h3>
		<label><input type="checkbox" value="html" v-model="checkboxValues" >HTML</label> 
		<label><input type="checkbox" value="js" v-model="checkboxValues" >Javascript</label> 
		<label><input type="checkbox" value="vuejs" v-model="checkboxValues" >Vuejs</label> 
		<div>{{ checkboxValues }}</div>		
	</div>

	<div class="box">
		<h3>radio values</h3>
		<label><input type="radio" name="type" value="O"  v-model="radioValue">O형</label>
		<label><input type="radio" name="type" value="A"  v-model="radioValue" >A형</label>
		<label><input type="radio" name="type" value="B"  v-model="radioValue">B형</label>
		<label><input type="radio" name="type" value="AB"  v-model="radioValue">AB형</label>
		<div>{{ radioValue }}형</div>
	</div>

	<div class="box">
		<h3>select value</h3>
		<!-- <select :value="selectvalue" @change="e => (selectvalue = e.target.value)"> -->
		<select v-model="selectvalue">
			<option value="html">HTML</option>
			<option value="js">Javascript</option>
			<option value="vue">Vuejs</option>
		</select>
		<div>{{ selectvalue }}</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	

	const inputValue = ref(null);
	const textareaValue = ref(''); 
	const checkboxValue = ref(true)
	const checkboxValues = ref([])
	const radioValue = ref('O');
	const selectvalue = ref('HTML')
</script>

<style lang="scss" scoped>
	.box {
    border:1px solid lightgray;
    margin: 50px 10px;
    padding:0 20px 20px;

    .description { color: gray; font-size: 16px; padding-top: 20px;}
  }
</style>