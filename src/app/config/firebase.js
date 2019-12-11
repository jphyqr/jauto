  import firebase from 'firebase/app'
  
  import 'firebase/firestore'
  import 'firebase/database'
  import 'firebase/auth'
  import 'firebase/storage'
 // import 'firebase/analytics'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCEQSCcZ-dwuoJyG1ldQMUxGa8pRsoZKGY",
    authDomain: "jauto-10612.firebaseapp.com",
    databaseURL: "https://jauto-10612.firebaseio.com",
    projectId: "jauto-10612",
    storageBucket: "jauto-10612.appspot.com",
    messagingSenderId: "1068870863114",
    appId: "1:1068870863114:web:fe22aeb7826f7d67aad2f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
  firebase.firestore();

  export default firebase
