<template>
  <div>
    <PageTitle :title="aa"/>
    <!-- title이라는 이름으로 aa전달됨 / 숫자형, 블린, 배열, 객체 등을 전달할땐 무조건 바인드로 -->
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';

export default {
    setup() {
        return {
          aa:'동적 페이지 타이틀'
        };
    },
    components: { PageTitle }
}
</script>

<style lang="scss" scoped>

</style>