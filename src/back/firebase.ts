import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBuCgrUsiEzwRIxpkl3Cztb1yqbyQAQ-FU",
    authDomain: "acesscar-61061.firebaseapp.com",
    databaseURL: "https://acesscar-61061.firebaseio.com",
    projectId: "acesscar-61061",
    storageBucket: "acesscar-61061.appspot.com",
    messagingSenderId: "1002938423667",
    appId: "1:1002938423667:web:50d1f7e866cc567f9b4d06",
    measurementId: "G-NJFHJM14JD"
  };

firebase.initializeApp(firebaseConfig);

export const dbFirebase = firebase;

export const db = firebase.firestore();

export const dbAuth = firebase.auth();