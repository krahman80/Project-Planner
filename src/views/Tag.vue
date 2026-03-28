<template>
    <div class="tag">
        Tag
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostLIst :posts="filterPosts" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import getPosts from '../composables/getPosts';
import PostLIst from '../components/PostLIst.vue';
import Spinner from '../components/Spinner.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: { PostLIst, Spinner },
    setup() {
        // call route id
        const route = useRoute()
        const { posts, error, load } = getPosts()

        load()

        const filterPosts = computed(() => {
            return posts.value.filter((p) => {
                return p.tags.includes(route.params.tag)
            })
        })

        return { posts, error, filterPosts }
        
    }
}
</script>

<style>

</style>