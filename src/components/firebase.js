import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkkgBGSAK4tBitJU-zKXVWl36nY6JACzc",
  authDomain: "olx-clone-d2422.firebaseapp.com",
  databaseURL: "https://olx-clone-d2422.firebaseio.com",
  projectId: "olx-clone-d2422",
  storageBucket: "olx-clone-d2422.appspot.com",
  messagingSenderId: "1090959166792",
  appId: "1:1090959166792:web:a5c5b776ec9e11b5bbf77d",
  measurementId: "G-BV1S86M7CT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
