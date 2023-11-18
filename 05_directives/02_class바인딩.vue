<template>
  <div>
    <h3>class바인딩</h3>
    <p class="text" :class="classObj ">텍스트 입니다</p>
    <button v-on:click="isActive = !isActive">Toggle active</button>
    <button v-on:click="hasWanning = !hasWanning">Toggle danger</button><br>
    <button @:click="toggle">전체  Toggle</button>
  </div>
  
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup () {
    const isActive = ref(false);
    const hasWanning = ref(false);
    
    //const classObj ='active danger'
    const classObj = reactive({
      active: isActive,
      danger: hasWanning
    })

    function toggle(){
      isActive.value = !isActive.value;
      hasWanning.value = !hasWanning.value
    }

    return { classObj, isActive, hasWanning, toggle }
  }
}
</script>

<style lang="scss" scoped>
  .text { font-size: 30px; }
  .active { background: green; }
  .danger { color:orange; font-weight: bold; }
</style>