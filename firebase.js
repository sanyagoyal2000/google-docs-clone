import  firebase from "firebase"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwW5pf13fHgznvge9Fev94lyiqvFU06zM",
    authDomain: "docs-clone-9f282.firebaseapp.com",
    projectId: "docs-clone-9f282",
    storageBucket: "docs-clone-9f282.appspot.com",
    messagingSenderId: "602490236198",
    appId: "1:602490236198:web:64bd0b8f96dbfdfc57a5e7"
  };

  const app = !(firebase.apps.length)
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();


  const db=app.firestore();
  export { db };
