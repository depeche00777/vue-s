<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  // props:[ 'title']
  props:{
    title:{
      type:String,
      default:'페이지 제목이 들어가는 곳입니다' //데이터 전달된것이 없을때 
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>


