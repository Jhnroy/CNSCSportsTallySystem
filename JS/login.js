
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDD2iT8hKifwRuaHv8rVCWW2HebVai24go",
    authDomain: "cnscsportstallysystem.firebaseapp.com",
    projectId: "cnscsportstallysystem",
    storageBucket: "cnscsportstallysystem.appspot.com",
    messagingSenderId: "504791280062",
    appId: "1:504791280062:web:e874a37af00024b49531ef",
    measurementId: "G-0Y9QWR5BS8"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Function to sign in a user
const SignInUser = (evt) => {
    evt.preventDefault();
    
    // For the Retrieve the email and password from the input fields
    const emailValue = $('#Email').val();
    const passwordValue = $('#Password').val();

    if (!emailValue || !passwordValue) {
        alert("Please enter both email and password.");
        return;
    }

    // For the Sign in the user with email and password
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((credentials) => {
            // Get the reference to the user node in the database
            const userRef = ref(db, 'UsersAuthList/' + credentials.user.uid);
            
            //For the Retrieve user data
            return get(userRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const firstname = userData.firstname;
                    const lastname = userData.lastname;

                    sessionStorage.setItem("user-info", JSON.stringify({
                        firstname: firstname,
                        lastname: lastname
                    }));
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));

                    // Show welcome alert message
                    alert(`Welcome, ${firstname} ${lastname}!`);

                    // Redirect to admin.html after successful login
                    window.location.href = 'admin.html';
                } else {
                    alert("No user data found for this user.");
                    console.error("No user data found for this user.");
                }
            });
        })
        .catch((error) => {
            // For the Handle authentication errors
            let errorMessage = "Error signing in.";
            if (error.code === 'auth/wrong-password') {
                errorMessage = "Incorrect password.";
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = "No user found with this email.";
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = "Invalid email format.";
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = "Too many failed login attempts. Please try again later.";
            }
            alert(errorMessage);
            console.error("Error signing in or getting user data:", error);
        });
};

// listener to the form submit button
$('#loginForm').on('submit', SignInUser);
