import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBiZAoXxG945oPOEzzBznIK6aoYTpGgKig",
    authDomain: "sabpay-841e7.firebaseapp.com",
    databaseURL: "https://sabpay-841e7.firebaseio.com",
    projectId: "sabpay-841e7",
    storageBucket: "sabpay-841e7.appspot.com",
    messagingSenderId: "1021010962128",
    appId: "1:1021010962128:web:05f66ba1f79530265760d5"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  export default firebaseApp.firestore()