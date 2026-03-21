<template>
<div class="post">
    <RouterLink :to="{ name: 'Details', params: { id: post.id }}">
        <h3>{{ post.title }}</h3>
    </RouterLink>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :id="tag">
        #{{ tag }}
    </span>
</div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0, 50) + '...'
        })

        return { snippet }
    }
}
</script>

<style>

</style>