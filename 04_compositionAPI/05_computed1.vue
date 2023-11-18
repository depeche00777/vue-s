<template>
  <div>
    <h2>computed -   계산된 속성, 함수</h2>
    - 템플릿 문법이 길어지면 가독성이 떨어지고, 유지보수가 어려워지는 것을 방지<br>
    -  계산한 것을 캐싱(보관)해주고,   화면이 업데이트 될때 캐싱을 호출함, 데이터가 변경될때 다시 계산<br>
  </div>

  <div class="box">
    <h2>점심식단</h2>
    <p>=점심메뉴가 나왔나요?</p>
    <p>일반함수 - {{ existMenu() }}</p>
    <p>일반함수 - {{ existMenu() }}</p>
    <p>일반함수 - {{ existMenu() }}</p>
    <p>computed - {{ hasMenu }}</p>
    <p>computed - {{ hasMenu }}</p>
    <p>computed - {{ hasMenu }}</p>
    <button v-on:click="counter++">{{  counter  }}</button>
  </div>
</template>

<script>
import { computed, ref  } from 'vue'

export default {
  setup () {
    const lunch = {
      name: '점심 식단',
      menu:[ ]
    }
      function existMenu(){
        console.log('일반함수')
        return lunch.menu.length > 0 ? '네 준비되어있습니다! 😉' : '아직 준비중이에요 😭' 
      }
      
      const hasMenu = computed(() =>{
        console.log('computed')
        return lunch.menu.length > 0 ? '네 준비되어있습니다! 😉' : '아직 준비중이에요 😭' 
      })

      const counter = ref(0); 
    


    return { lunch, existMenu, hasMenu, counter}
  }
}
</script>

<style lang="scss" scoped>

</style>