// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaEwj39Q93oE3KOvZVcnM9LxKubvExSk0",
  authDomain: "pantry-tracker-f1ec0.firebaseapp.com",
  projectId: "pantry-tracker-f1ec0",
  storageBucket: "pantry-tracker-f1ec0.appspot.com",
  messagingSenderId: "755606064238",
  appId: "1:755606064238:web:53eb91ffa877626350ea7f",
  measurementId: "G-D9ZETCSST8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
export {firestore}