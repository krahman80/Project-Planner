import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            // simulate delay
            // await new Promise(resolve => {
            //     setTimeout(resolve, 2000)
            // })
            
            // make connection to firestore
            const res = await projectFirestore.collection('posts')
            .orderBy('createdAt', 'desc')
            .get()
            
            // console.log(res.docs)
            posts.value = res.docs.map(doc => {
                // console.log(doc.data())
                return { ...doc.data(), id: doc.id }
            })
            
        } catch (err) {
            error.value = err.message
        }
    }

    return { posts, error, load }
}

export default getPosts