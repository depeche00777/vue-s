<!-- 
    Options API(vue2) - 데이타, 머서드 등등을 각각 구분해서 사용(인스턴스의 옵션 형식)
    Composition API(vue3) - 가져온 함수를 사용
-->
<template>
  <div>
    <button v-on:click="increment"> Counter: {{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

  export default {
    setup(){
      const counter = ref(100);
      const increment = () => { counter.value++ }

      onMounted(() => console.log('컴포넌트가 마운트 됨!') )
      return { counter, increment }
    }




    // data(){
    //   return{
    //     counter:100
    //   }
    // },
    // methods:{
    //   increment(){
    //     this.counter++
    //   }
    // },
    // mounted(){
    //   console.log('컴포넌트가 마운트 됨!')
    // }

  }
</script>

<style lang="scss" scoped>

</style>