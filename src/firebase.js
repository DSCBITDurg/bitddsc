import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqkpmH1jEqhnrGeIUJDC__rvQ3CErSSbs",
    authDomain: "bitddsc-site.firebaseapp.com",
    databaseURL: "https://bitddsc-site.firebaseio.com",
    projectId: "bitddsc-site",
    storageBucket: "bitddsc-site.appspot.com",
    messagingSenderId: "835181929651",
    appId: "1:835181929651:web:9e4c20c6a8ac1cc4283cc6",
    measurementId: "G-77CWZW3W4R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };