<template>
  <div>
    <h2>reactive()</h2>
    <button v-on:click="increment">Click : {{ state.count }} </button>
    <button v-on:click="increment">Click : {{ state.deep.count2 }} </button>
    <br><br>
    - 객체(+배열)에 적용,depth가 깊어졌을때도 사용 가능 <br>
    - ref는 하위 depth에는 reactivity 속성을 주지 ❌->객체(+배열)에 사용❌  / 프리미티브 타입(문자열,숫자열,블린값... 에서만 사용)<br>
  </div>
</template>

<script>
import { reactive } from 'vue';

  export default {
    setup(){
      let state = reactive({  //state객체를 반응형 객체로 만듦
        count: 1004,
        deep:{ count2: 0}
      })
      const increment = () => {
        state.count++;
        state.deep.count2++;
      }

      return {
        state, increment
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>