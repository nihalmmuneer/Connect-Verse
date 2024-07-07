// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_TOKEN,
  authDomain: "connect-verse-13f8d.firebaseapp.com",
  projectId: "connect-verse-13f8d",
  storageBucket: "connect-verse-13f8d.appspot.com",
  messagingSenderId: "1087897774015",
  appId: "1:1087897774015:web:a84bae5ad5336126bca30a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
