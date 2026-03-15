<template>
Home
<p>my name is {{ name }} and age {{ age }}</p>
<button @click="handleClick">Click me</button>
</template>

<script>

export default {
  name: 'Home',
  setup() {
    console.log('setup')

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log('you clicked me')
    }

    return { name, age, handleClick  }
  } 
}
</script>
