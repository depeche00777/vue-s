<template>
  <div class="box">
    <h3>이중중괄호(콧수염괄호)</h3>
    <p>{{ message  }}</p>
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message+'🧡'">Click</button>
    <div class="description">
      이중중괄호(콧수염괄호)는 데이터의 변경이 있을때마다 자동으로 업데이트<br>
      v-once :데이터가 변경되어도 업데이트 되지 않는 일회성으로 만들어준다
    </div>
  </div>

  <div class="box">
    <h3>Text, HTML</h3>
    <p>{{ rawHTML  }}</p>
    <p v-text="rawHTML"></p>
    <p v-html="rawHTML"></p>
    <p>{{ rawHTML2 }}</p>
    <p v-html="rawHTML2"></p>
    <div class="description">
      이중줄괄호는 데이터를  HTML이 아닌 일반 텍스트로 인식<br>
      v-text : 엘리먼트의 텍스트 컨텐츠를 업데이트/   이중중괄호 사용시와 동일
      v-html :  엘리먼트의 innerHTML을 업데이트합니다.
    </div>
  </div>

  <div class="box">
    <h3>속성(Attribute) 바인딩</h3>
    <p v-bind:title="dynamicTitle" > 마우스를 올려보세요</p>
    <input type="text" placeholder="입력해보세요!!"  :disabled="inputDis">
    <button v-on:click="inputDis=!inputDis">toggle BUTTON</button><br>
    <input :="attrs">

    <div class="description">
      -  이중중괄호는  html태그의 속성으로는 사용❌   -> v-bind 이용 <br>
      - boolean 속성에서도  v-bind  사용 <br>
      - 여러개의 속성을 한번에 바인딩 <br>
      - 축약형으로 :만 쓰기도 함
    </div>

  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup () {
    const message = ref(' 안녕하세요!!'); 
    const rawHTML = '<strong>초겨울 아침입니다</strong>'
    const rawHTML2 = '<strong style="color:red">초겨울 아침입니다</strong>'

    const dynamicTitle = ref('손을 올려 놓았나요?')

    const inputDis = ref(true);

    const attrs = reactive({
      type:"text",
      size: "60",
      placeholder:"여러개의 속성을 적용"
    })

    return { message, rawHTML, rawHTML2, dynamicTitle, inputDis, attrs}
  }
}
</script>

<style lang="scss" scoped>
  .box {
    border:1px solid lightgray;
    margin: 50px 10px;
    padding:0 20px 20px;

    p { margin:5px 0}
    
    .description { color: gray; font-size: 16px; padding-top: 20px;}
  }
</style>