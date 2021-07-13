// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAaJzjoDZXi97gQNzR91AQ73LOhXDkeMfM",
    authDomain: "bookshelve-66fd8.firebaseapp.com",
    projectId: "bookshelve-66fd8",
    storageBucket: "bookshelve-66fd8.appspot.com",
    messagingSenderId: "755049176809",
    appId: "1:755049176809:web:17b4fbc750c25ca65c9a78",
    measurementId: "G-DJRM4R8HWM"
  //databaseURL: "YOUR_FIREBASE_DB_URL",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;