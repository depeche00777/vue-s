<template>
  <div>
    <h2 v-if="visible">v-if : Hello Vue!</h2>
    <h2 v-else="visible">Hello Vue!</h2>
    <button @:click="visible=!visible">Toggle</button>

    <hr>
    <button @:click="type='A'">A</button>
    <button @:click="type='B'">B</button>
    <button @:click="type='C'">C</button>
    <button @:click="type='D'">D</button>
    <button @:click="type='E'">E</button>

    <h2 v-if="type==='A'">A버튼을 클릭했습니다</h2>
    <h2 v-else-if="type==='B'">B버튼을 클릭했습니다</h2>
    <h2 v-else-if="type==='C'">C버튼을 클릭했습니다</h2>
    <h2 v-else>A,B,C 버튼을 클릭 하지 않았습니다!!!</h2>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const visible = ref(false)
    const type = ref('A')

    return { visible, type }
  }
}
</script>

<style lang="scss" scoped>

</style>