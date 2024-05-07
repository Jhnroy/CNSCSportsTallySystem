// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, get, child} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
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
const dbref = ref(db);
// Function to sign in a user
let SignInUser = evt => {
    evt.preventDefault();
   
    const emailValue = Email.value;
    const passwordValue = Password.value;

    // Sign in the user with email and password
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((credentials) => {
            // Get the reference to the user node in the database
            const userRef = ref(db, 'UsersAuthList/' + credentials.user.uid);
            
            // Retrieve user data
            get(userRef).then((snapshot) => {
                if (snapshot.exists()) {
                    sessionStorage.setItem("user-info", JSON.stringify({
                        firstname: snapshot.val().firstname,
                        lastname: snapshot.val().lastname
                    }));
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                    // Redirect to admin.html after successful login
                    window.location.href = 'admin.html';
                }
            }).catch((error) => {
                console.error("Error getting user data:", error);
            });
        })
        .catch((error) => {
            alert(error.message);
            console.error("Error signing in:", error);
        });
};

