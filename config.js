import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCc9E0ZJNhdD5-dWj7wBCjI1U1WBShQynw",
    authDomain: "school-attendance-app-e2e7d.firebaseapp.com",
    databaseURL: "https://school-attendance-app-e2e7d-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-e2e7d",
    storageBucket: "school-attendance-app-e2e7d.appspot.com",
    messagingSenderId: "319701921955",
    appId: "1:319701921955:web:d9b563b049ca9a24decf16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();