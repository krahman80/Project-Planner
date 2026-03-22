<template>
<div v-if="error">{{ error }}</div>
<div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
</div>
<div v-else>
    <Spinner />
</div>

</template>

<script>
import Spinner from '../components/Spinner.vue';
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    // change the props.id to route.params.id
    const route = useRoute()
    console.log(route)

    //const { error, post, load } = getPost(props.id)
    const { error, post, load } = getPost(route.params.id)

    load()

    return { error, post }
  },
}
</script>

<style>
.tags a {
    margin-right: 10px;
  }
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>