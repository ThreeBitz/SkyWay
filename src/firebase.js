import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzhphy2Q40iMDGmCuvZU0yfN_Mz1qdrOU",
    authDomain: "skyway-a9843.firebaseapp.com",
    projectId: "skyway-a9843",
    storageBucket: "skyway-a9843.appspot.com",
    messagingSenderId: "639575563833",
    appId: "1:639575563833:web:fd5ba95d0f01c74a0b37e8"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider}