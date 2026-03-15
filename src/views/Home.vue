<template>
  <h1>Home</h1>
  <input type="text" v-model="search">
  <p>seach term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">
  {{ name }}
  </div>

</template>

<script>
import { computed, ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { search, names, matchingNames }
  } 
}
</script>
