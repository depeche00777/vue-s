<template>
  <div>
    <p>{{ msg.text }}</p>
    <button v-on:click="addMsg">addClick</button>
    <hr>
    <p>{{ msg2 }}</p>
    <button v-on:click="addMsg2">addClick</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup () {
    let msg = reactive({ text: ' Hello Vue!!'});
    const addMsg = () =>{
      msg.text = msg.text + '@'
    }
    console.log('msg- ', msg)
    console.log('msg typeof- ', typeof msg) 
    console.log('msg.text- ', msg.text) 

    const msg2 = ref('안녕하세여!??!!')
    const addMsg2 = () =>{
      msg2.value = msg2.value + '???'
    }

    console.log('msg2- ', msg2)
    console.log('msg2 typeof- ', typeof msg2) 
    console.log('msg2.value- ', msg2.value) 

    return { msg, addMsg, msg2, addMsg2 }
  }
}
</script>

<style lang="scss" scoped>

</style>