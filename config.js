import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCw9U6pBrZ3fPhztBjpIRuxTR2iClj120g",
  authDomain: "agricultureopedia.firebaseapp.com",
  projectId: "agricultureopedia",
  storageBucket: "agricultureopedia.appspot.com",
  messagingSenderId: "946721428488",
  appId: "1:946721428488:web:38ebf3df770f757d6e2dbd",
  measurementId: "G-E9TRQMBLG3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
