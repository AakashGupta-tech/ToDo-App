import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdRtBy4rmjXkrhYwCRSGRNjyJdGp9aqgs",
  authDomain: "todo-app-5c906.firebaseapp.com",
  databaseURL: "https://todo-app-5c906.firebaseio.com",
  projectId: "todo-app-5c906",
  storageBucket: "todo-app-5c906.appspot.com",
  messagingSenderId: "27087256596",
  appId: "1:27087256596:web:9fb13ebb847960f53a3b01",
  measurementId: "G-WHPX1CPF8J",
});

const db = firebaseApp.firestore();

export default db;
