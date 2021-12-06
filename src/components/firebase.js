import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAQb9F9XiACUdibiZ31mJ4efy0s7gzGMpw",
    authDomain: "chatbox-588fe.firebaseapp.com",
    projectId: "chatbox-588fe",
    storageBucket: "chatbox-588fe.appspot.com",
    messagingSenderId: "241803033475",
    appId: "1:241803033475:web:0db70296b6cceb898dd4b6"
  }).auth();