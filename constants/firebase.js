// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU0rp_LAIJN5Y4Cr_xDU6EAuaNk3ml408",
  authDomain: "playground-43be4.firebaseapp.com",
  databaseURL: "https://playground-43be4-default-rtdb.firebaseio.com",
  projectId: "playground-43be4",
  storageBucket: "playground-43be4.appspot.com",
  messagingSenderId: "16270610144",
  appId: "1:16270610144:web:7c279ee9abe0b8884c4a85",
  measurementId: "G-LZZ2BBMD7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);