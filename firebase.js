import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA58h0oHUJg9ZRZvm9X9uvUOde6hOJAIxw",
  authDomain: "signal-clone-4ca8d.firebaseapp.com",
  projectId: "signal-clone-4ca8d",
  storageBucket: "signal-clone-4ca8d.appspot.com",
  messagingSenderId: "270301399392",
  appId: "1:270301399392:web:59bb4e10d48918eb29f605",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
