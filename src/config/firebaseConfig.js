import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyARIl7CNgthV2RqzI3li75A5N-qhn4p9h4",
    authDomain: "todo-cf0bc.firebaseapp.com",
    projectId: "todo-cf0bc",
    storageBucket: "todo-cf0bc.appspot.com",
    messagingSenderId: "144907221320",
    appId: "1:144907221320:web:b1648029576e11ef40db7d"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const auth = getAuth(app);

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;