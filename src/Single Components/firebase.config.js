// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUi6tKRMbHKbrkTdZKvIZ5FiIeWNHtl5o",
    authDomain: "blood-donation-4da5c.firebaseapp.com",
    projectId: "blood-donation-4da5c",
    storageBucket: "blood-donation-4da5c.appspot.com",
    messagingSenderId: "1043267230178",
    appId: "1:1043267230178:web:dbc49c35fb8bec5e3401bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;