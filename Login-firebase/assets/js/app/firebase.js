// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS-fmPBUCE770ERhxoLwYPlX-3_VMirjU",
  authDomain: "login-firebase-29e89.firebaseapp.com",
  projectId: "login-firebase-29e89",
  storageBucket: "login-firebase-29e89.appspot.com",
  messagingSenderId: "410726309537",
  appId: "1:410726309537:web:47c9d3af1dd62963c39ae0",
  measurementId: "G-3C11ZSJHC5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


