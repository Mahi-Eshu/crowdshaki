// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx_VeyD68TcMaYtarqF4yhwBsbLDCrLOs",
  authDomain: "fund-raiser-a77f7.firebaseapp.com",
  projectId: "fund-raiser-a77f7",
  storageBucket: "fund-raiser-a77f7.appspot.com",
  messagingSenderId: "167001754559",
  appId: "1:167001754559:web:4d375202f640c81e9baf0a",
  measurementId: "G-4WV7ZBNEJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;