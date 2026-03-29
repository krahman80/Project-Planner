// take in an array of posts
// create a new tag set
// add the tags of each post to the tag set
// return a singgle array of tags based on the sets

import { ref } from "vue";


const useTags = (posts) => {
    const tags = ref([])
    const tagSet = new Set()

    posts.forEach((post) => {
        post.tags.forEach(tag => tagSet.add(tag))
    })

    tags.value = [...tagSet]

    return { tags }

}

export default useTags