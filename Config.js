import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDSb6qFIrWNmHjQHiWPjFzv4DX2WdUikzg",
    authDomain: "barterapp-d3010.firebaseapp.com",
    projectId: "barterapp-d3010",
    storageBucket: "barterapp-d3010.appspot.com",
    messagingSenderId: "348463796993",
    appId: "1:348463796993:web:71007a3170eafab4898100"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);