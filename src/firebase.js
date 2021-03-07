import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvSK-EPngC2avukBrgIofdia4s3giSI6E",
    authDomain: "clone-96bb6.firebaseapp.com",
    projectId: "clone-96bb6",
    storageBucket: "clone-96bb6.appspot.com",
    messagingSenderId: "735326528082",
    appId: "1:735326528082:web:311b265cab18f1bd69358b",
    measurementId: "G-JZ6JCXWT2B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }