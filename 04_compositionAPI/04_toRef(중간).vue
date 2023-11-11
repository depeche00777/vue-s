<template>
  <div>
    <p>{{ book }}</p>
    <p>저자: {{ book.author }}</p>
    <p>책제목: {{ title }}</p>
    <p>가격: {{  price }}</p>
    <p>책설명: {{ description }}</p>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup () {
    const book = reactive({
      author: 'Vue team',
      year: 2023,
      title: 'Vue 3 Guide',
      description: '초보자를 위한 Vue의 모든것',
      price: '무료'
    })

    //const { title, price, description } = book;  
    //구조분해할당(destructuring) -> reactivity(반응형)을 잃어버림

    const { title, price, description } = toRefs(book);  
    //const title = toRef(book, 'title'); //1개씩 가져올때
    
    book.author = '그린 컴퓨터 개발팀';
    //book.title = 'Vue 박살내기!'; //구조분해한 상태라 안바뀜! 
    title.value = 'Vue 박살내기!'; 


    return { book, title, price, description }
  }
}
</script>

<style lang="scss" scoped>

</style>