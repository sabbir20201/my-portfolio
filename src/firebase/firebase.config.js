// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwSdI0MtLcpI_Gne_UUru698m3bkhShqI",
  authDomain: "my-portfolio-5800c.firebaseapp.com",
  projectId: "my-portfolio-5800c",
  storageBucket: "my-portfolio-5800c.appspot.com",
  messagingSenderId: "702100473241",
  appId: "1:702100473241:web:1cea73e44d40a77967bf08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app