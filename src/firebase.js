import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCLsQUv_TezThHmjfKIobxgOtn32EbprVM",
    authDomain: "tinder-clone-b5d6e.firebaseapp.com",
    projectId: "tinder-clone-b5d6e",
    storageBucket: "tinder-clone-b5d6e.appspot.com",
    messagingSenderId: "222739531180",
    appId: "1:222739531180:web:fca76d490269794d09a609",
    measurementId: "G-BVCJE8PBWT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()
const auth = firebase.auth()

export default database