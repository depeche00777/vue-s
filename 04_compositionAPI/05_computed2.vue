<template>
  <div>
    <h2>computed -   계산된 속성, 함수</h2>
    - 템플릿 문법이 길어지면 가독성이 떨어지고, 유지보수가 어려워지는 것을 방지<br>
    -  계산한 것을 캐싱(보관)해주고,   화면이 업데이트 될때 캐싱을 호출함, 데이터가 변경될때 다시 계산<br>
    - computed는 기본적으로  getter전용(읽기 전용) => set  이용해서 수정
  </div>

  <div class="box">
    <h2>{{ lunch.name }}</h2>
    <p>=점심메뉴가 나왔나요?</p>
    <p>일반함수 - {{ existMenu() }}</p>
    <p>일반함수 - {{ existMenu() }}</p>
    <p>일반함수 - {{ existMenu() }}</p>
    <p>computed - {{ hasMenu }}</p>
    <p>computed - {{ hasMenu }}</p>
    <p>computed - {{ hasMenu }}</p>
    <button v-on:click="counter++">{{  counter  }}</button>
    <hr>
    <p>{{ fullName }}</p>
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

      const firstName = ref('홍') 
      const lastName = ref('길동') 
      // const fullName = computed(()=>{
      //   return firstName.value + " " + lastName.value
      // })

      // 수정 가능한 상태로 변경
      const fullName = computed({
        get(){
          return firstName.value + " " + lastName.value
        }, 
        set(value){
          console.log('value?? ',value);
          console.log('value.split???', value.split(' '));
          [firstName.value, lastName.value] = value.split(' ')   //여백을 기준으로 나눈뒤, 구조분해할당
        }
      })
    
      console.log('수정 전 fullName- ',fullName.value);
      fullName.value = '원 빈'
      console.log('수정 후 fullName- ',fullName.value); //readonly 경고뜸 (get,set 으로 수정 전)

    return { lunch, existMenu, hasMenu, counter, fullName}
  }
}
</script>

<style lang="scss" scoped>

</style>