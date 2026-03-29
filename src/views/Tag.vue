<template>
    <div class="tag">
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length" class="layout">
            <PostLIst :posts="filterPosts" />
            <TagCloud :posts="posts"/>
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostLIst from '../components/PostLIst.vue'
import TagCloud from '../components/TagCloud.vue'
import Spinner from '../components/Spinner.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    components: { PostLIst, Spinner, TagCloud },
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
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>