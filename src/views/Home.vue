<template>
  <h1>Home</h1>
  <input type="text" v-model="search">
  <p>seach term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
  {{ name }}
  </div>
  <button @click="handleClick">stop watching</button>
</template>

<script>
import { watchEffect } from 'vue';
import { watch } from 'vue';
import { computed, ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    
    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function run', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }
    return { search, names, matchingNames, handleClick }
  } 
}
</script>
