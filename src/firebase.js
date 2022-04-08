// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgZrjfHh06q57vXjcPIHmvCV6ipnSVfPA",
  authDomain: "fir-auth-y.firebaseapp.com",
  projectId: "fir-auth-y",
  storageBucket: "fir-auth-y.appspot.com",
  messagingSenderId: "365383108439",
  appId: "1:365383108439:web:fb04c64521b25614c32012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app