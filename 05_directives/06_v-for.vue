<template>
  <div class="box">
    <h2>v-for 디렉티브를 사용하여 배열(오브젝트) 목록을 이터러블하게 렌더링 할 수 있다</h2>
    <div class="description">
      - 두번째 아이템은? {{ items[1]  }}<br>
      - v-for="아이템 in 배열명" - 배열에서 항목을 순차적으로 할당<br>
			- v-for="(아이템, index) in 배열명"   -  배열의 인덱스(순서)를 사용<br>
			- 각 아이템을 나열할때 각각의 :key  속성에는 고유한 값을 지정 / 자바스크립트 오브젝트(배열)의 이터러블 방식과 비슷
    </div> 
    <ul>
      <li v-for="(aa, index) in items" :key="aa.id">
      {{ index }}: {{ aa.message }}
      </li>
    </ul>
  </div>

	<div class="box">
		<h3>조건문 추가 (아이디값이 짝수, 홀수 아이템만)</h3>
		<div class="description">
			-v-if / v-for 디렉트브는 하나의 태그에 사용 못함 ->  template태그 이용<br>
			- 미리 배열을  필터링  해놓고 사용
		</div>
		<ul>
      <!-- <li v-for="(aa, index) in items" :key="aa.id"  v-if="aa.id % 2 ===0">
      {{ aa.id }}: {{ aa.message }}
      </li> 사용불가!!! -->
			<template v-for="(aa, index) in items" :key="aa.id"  >
				<li v-if="aa.id % 2 ===0">
				{{ aa.id }}: {{ aa.message }}  
				</li>
			</template> 
			<template v-for="(aa, index) in oddItems" :key="aa.id"> 
					<li>
					홀수 값만 -ID:{{ aa.id }},  인덱스:{{ index }} {{ aa.message }}
				</li>
			</template> 
			
    </ul>

	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  setup () {
    const items = reactive([
      { id:1, message:'Java' },
      { id:2, message:'HTML '},
      { id:3, message:'CSS' },
      { id:4, message:'JavaScript' }
    ])

		const oddItems = computed(()=>items.filter((bb)=> bb.id %2 ===1)); 

    return { items, oddItems }
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