// const firebaseConfig = {
   
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({ apiKey: "AIzaSyBTVNn19v-_mMCcfoC8l5UeVUj5bfp-ICM",
authDomain: "to-do-app-27fb0.firebaseapp.com",
projectId: "to-do-app-27fb0",
storageBucket: "to-do-app-27fb0.appspot.com",
messagingSenderId: "608411024394",
appId: "1:608411024394:web:915917207bbf25b877f3f3",
measurementId: "G-PTVPK6ZEBL"});

const db = firebaseApp.firestore();
 
export default db;