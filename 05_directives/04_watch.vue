<template>
  <div class="box">
    <h2>Watch</h2>
    {{ message }}
    <p class="description">
      reactivity 데이타의 상태 변경을 감지하여 다른 작업을 수행
    </p>
    <code>
      watch( 감지할 reactivity 데이타, 함수,옵션)<br>
      watch( 감지할 reactivity 데이타, (새로운데이타, 기존데이타)=>{  실행구  })<br>
      watch( 함수의 리턴값인 데이타, (새로운데이타, 기존데이타)=>{  실행구  })<br>
      watch( [데이타1, 데이타2] ([new데이타1, new데이타2], [old데이타1, old데이타2] )=>{  실행구  })<br>
      watch(()=>{ 오브젝트 }, 함수 )
    </code>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup () {
    const message = ref('안녕하세요')

    // watch(message, ()=>{
    //   console.log('message  변함!!')
    // })
    watch(message,(newValue,oldValue)=>{
      console.log('newValue - ',newValue)
      console.log('oldValue - ',oldValue)
    })

    const x =ref(0)
    const y =ref(0)

    //x,y의 합계값을 감지
    watch(()=> x.value + y.value, (sum, oldSum)=>{
      console.log('새로운 합계값: ', sum)
      console.log(' 이전 합계값: ', oldSum)
    } )

    // 여러개를 동시에 감지할 수도 있음
    watch([x,y], ([newX,newY], [ oldX,oldY])=>{ 
      console.log(' 새로운x:', newX, '기존x: ', oldX )
      console.log(' 새로운y:', newY, '기존y: ', oldY )
    })

    // reactivity 객체도 감지 -> 함수안에 넣어서 
    const hotel = reactive({
      name:'shilla',
      emptyRoom: 45
    })

  watch(()=>hotel.emptyRoom, (newV, oldV) =>{
    console.log('새로운 hotel.emptyRoom -  ', newV)
    console.log('이전의 빈방 -  ', oldV)
  })

  



    return { message, x, y, hotel } 
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