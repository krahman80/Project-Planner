<template>
Home
<p ref="p">my name is {{ name }} and age {{ age }}</p>
<button @click="handleClick">Click me</button>
<button @click="age++">add 1 to ge</button>
<input type="text" v-model="name">
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {

    let name = ref('mario')
    let age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    return { name, age, handleClick }
  } 
}
</script>
