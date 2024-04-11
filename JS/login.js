// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

import { getDatabase, get, ref, child} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
 
const firebaseConfig = {
  apiKey: "AIzaSyDD2iT8hKifwRuaHv8rVCWW2HebVai24go",
  authDomain: "cnscsportstallysystem.firebaseapp.com",
  projectId: "cnscsportstallysystem",
  storageBucket: "cnscsportstallysystem.appspot.com",
  messagingSenderId: "504791280062",
  appId: "1:504791280062:web:e874a37af00024b49531ef",
  measurementId: "G-0Y9QWR5BS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref (db);

// Selecting input elements
let Email = document.getElementById('InputEmail1');
let Password = document.getElementById('InputPassword1');
let MainForm = document.getElementById('MainForm');

// Function to register a user
let SignInUser = evt => {
    evt.preventDefault();

   
    const emailValue = Email.value;
    const passwordValue = Password.value;

    // Registering the user with email and password
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((credentials) => {
            get(child(dbref, 'UsersAuthList/'+ credentials.user.uid)).then((snapshot)=>{
                if(snapshot.exists){
                    sessionStorage.setItem("user-info", JSON.stringify({
                        firstname: snapshot.val().firstname,
                        lastname: snapshot.val().lastname
                    }))
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                    window.location.href = 'admin.html';
                    
                }
            }) 
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        });
};

// Adding event listener to the form
MainForm.addEventListener('submit', SignInUser);  