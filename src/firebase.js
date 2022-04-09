// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "YOUR UNIQUE API KEY",
authDomain: "YOUR UNIQUE AUTHDOMAIN",
projectId: "YOUR UNIQUE PROJECTID",
storageBucket: "YOUR UNIQUE STORAGEBUCKET",
messagingSenderId: "YOUR UNIQUE MESSAGINGSENDERID",
appId: "YOUR UNIQUE API KEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



