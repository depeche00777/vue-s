<template>
	<div class="box">
		<h3>매소드 이벤트 핸들러</h3>
		<button @click="printEventInfo">event handler</button>
		<div class="description">
			v-on 디렉티브에서 매소르를 호출하면 event객체를 받음
		</div>
	</div>

	<div class="box">
		<h3>인라인 핸들러에서 이벤트 객체 접근</h3>
		<button @click="printEventInfo2('이벤트객체에 접근?',$event )">event handler</button>
		<div class="description">
			v-on:click="함수(매개변수, $event)" <br>
			이벤트 객체를 매개변수로 받을때(다른 변수도 사용할때),  $event(고정) 를 사용
		</div>
	</div>

	<div class="box">
		<h3>키보드 이벤트</h3>
		<input type="text" @keydown="onKeyHandler">
	</div>

	<div class="box">
		<h3>이벤트 수식어</h3>
		<a href="#" @click.prevent="clickA">클릭!</a>
	</div>

</template>

<script setup>
	const printEventInfo = (event)=>{
		console.log(event)
		console.log(event.target.tagName)
	}

	const printEventInfo2 = (msg,event)=>{
		console.log('msg:', msg)
		console.log('event: ',event)
		console.log('event.target.tagName: ', event.target.tagName)
	}

	const onKeyHandler = e =>{
		console.log('키보드의 어떤 키를 눌렀어? : ', e.key)
	}

	const clickA = (e) =>{
		//e.preventDefault();
		alert('경고창입니다!!')
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