import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBFIcjAsgIEkjfNU8x3DAf3_2hRztA-KqE",
  authDomain: "fitness-guide-56182.firebaseapp.com",
  databaseURL: "https://fitness-guide-56182-default-rtdb.firebaseio.com",
  projectId: "fitness-guide-56182",
  storageBucket: "fitness-guide-56182.appspot.com",
  messagingSenderId: "667250411652",
  appId: "1:667250411652:web:6feaf0027c17666c6c1ad1",
  measurementId: "G-R25YEK5BFH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();