// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNHph03GtvLy7xsW9FhpUnrEcx8GfwS1U',
  authDomain: 'fir-test-6c2df.firebaseapp.com',
  projectId: 'fir-test-6c2df',
  storageBucket: 'fir-test-6c2df.appspot.com',
  messagingSenderId: '178936716114',
  appId: '1:178936716114:web:11f3909e25c2b316d5388b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app



