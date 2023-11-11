<template>
  <div class="box">
    <h2>setup</h2>
    setup() 함수(hook) -  Composition API 사용을 위한 진입점 역할<br>
  </div>
  <div class="box">
    <h2>Reactivity: 반응형 메세지</h2>
    <p> 
      Reactivity메세지 : <span>{{ reactiveMsg }}</span><br>
      <button v-on:click="addReactiveMsg">Add Message</button>
    </p>
    <p>Normal메세지 : <span>{{ normalMsg }}</span><br>
      <button v-on:click="addNormalMsg">Add Message</button>
    </p>
    <p>
      <strong>ref()</strong> -reference, 변이가능한 값을 반환, value속성을 포함/ 템플릿에서 사용할때는 value빼줌->내부값(value)이 unwrapping됨<br>
      <strong>isRef()</strong> -값이 ref 객체인지 확인(true/false)
    </p>
  </div>
  <div class="box">
    <h2>Lifecycle Hooks</h2>
    Vue 인스턴스나 컴포넌트가 생성되고, 작동하고, 삭제될때 단계를 거치게 되는데 이를 라이프 사이클이라고 한다<br>    
    create -> mount -> update -> destroy
  </div>
</template>

<script>
import { ref, isRef, onBeforeMount, onMounted} from 'vue';

  export default {
    setup(){
      const reactiveMsg = ref('리액티브 메세지');
      const addReactiveMsg = () =>{
        reactiveMsg.value = reactiveMsg.value+'!';
      }
      //console.log('reactiveMsg?', isRef(reactiveMsg));

      const normalMsg = '노말 메세지';
      const addNormalMsg =()=>{
        normalMsg = normalMsg + '???'
      }
      //console.log('normalMsg?', isRef(normalMsg));

      onMounted(()=>{
        console.log('마운트되었습니다')
      });

      onBeforeMount(()=>{
        console.log(' 마운트 되게 전!ㅜㅠ')
      })



      return {
        reactiveMsg, normalMsg, addReactiveMsg, addNormalMsg 
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box { 
    border:1px solid lightgray;
    margin:50px 10px;
    padding:0 20px 20px;    

    h2 {
      color:brown
    }

    span { color:red; }
  }
  
</style>