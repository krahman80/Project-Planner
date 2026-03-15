<template>
Home
<p ref="p">my name is {{ name }} and age {{ age }}</p>
<button @click="handleClick">Click me</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    console.log(this)

    const p = ref('hello')
    console.log(p, p.value)

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
    }

    return { name, age, handleClick, p  }
  } 
}
</script>
