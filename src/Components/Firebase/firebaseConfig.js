// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP-J_Gu9c371nD98UG9Qw3DR2PH2an3U8",
  authDomain: "olive-wood-431db.firebaseapp.com",
  projectId: "olive-wood-431db",
  storageBucket: "olive-wood-431db.appspot.com",
  messagingSenderId: "400769194532",
  appId: "1:400769194532:web:2910e4ce2f2213dbad16b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export default app;
