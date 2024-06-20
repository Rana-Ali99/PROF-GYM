// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRHBxvzw47yYlknguhe8EM05K4NjmhZCs",
  authDomain: "prof-gym.firebaseapp.com",
  databaseURL: "https://prof-gym-default-rtdb.firebaseio.com",
  projectId: "prof-gym",
  storageBucket: "prof-gym.appspot.com",
  messagingSenderId: "367385144562",
  appId: "1:367385144562:web:9dc920e68af582ce6cb46b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let nameIn = document.getElementById("user");
let passIn = document.getElementById("password");
let emailIn = document.getElementById("Email");

let RegisterUser = (evt) => {
  evt.preventedDefault();
  createUserWithEmailAndPassword(auth, emailIn.value, passIn.value)
    .then((Credential) => {
      console.log(Credential);

    })
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message)
    });
};
