import firebase from "firebase";
import 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyBJNjWhpik7ZJTR3_fgnkb9Gcw08m1WEJU",
  authDomain: "vue-blog-177be.firebaseapp.com",
  projectId: "vue-blog-177be",
  storageBucket: "vue-blog-177be.firebasestorage.app",
  messagingSenderId: "347291663817",
  appId: "1:347291663817:web:a0c458d40f44487a79fc18"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }