// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSAqliNHOB20XrkKFzxT5fgwSA7rytBNg",
  authDomain: "todo-app-7427d.firebaseapp.com",
  projectId: "todo-app-7427d",
  storageBucket: "todo-app-7427d.appspot.com",
  messagingSenderId: "436787861577",
  appId: "1:436787861577:web:8d332e279e5ea30044c798",
  measurementId: "G-R91HDM97FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};