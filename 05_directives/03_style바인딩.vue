<template>
  <div>
    <div :style="styleObj">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id elit non metus fringilla elementum ac sed urna. Morbi erat nunc, eleifend vulputate tellus sit amet, accumsan ornare lectus. Etiam tempus mattis mollis. Pellentesque sed commodo quam. Aliquam dui ligula, convallis sit amet dapibus quis, fringilla et mi. In imperdiet eros eros, vel ultrices augue pulvinar et. Sed vel venenatis diam. Maecenas rutrum, sapien ut pellentesque facilisis</div>
    <button @:click="fs--"> - </button>
    <button @:click="fs++"> + </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup () {
    const fs = ref(20);

    const styleObj = computed(() => {
      return {
        fontSize: fs.value+'px',
        color:'chocolate'
      }
    })

    return { styleObj, fs }
  }
}
</script>

<style lang="scss" scoped>

</style>