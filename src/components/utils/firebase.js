// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKkjmQ6QvNjfvWBbnYnvRG0X6nmddklRY",
  authDomain: "store-ddf61.firebaseapp.com",
  projectId: "store-ddf61",
  storageBucket: "store-ddf61.firebasestorage.app",
  messagingSenderId: "222035653686",
  appId: "1:222035653686:web:a19b11397e9cf275b91497",
  measurementId: "G-91QKL49GMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);