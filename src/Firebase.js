import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA0M0cNl_JE4kyJuSVhEbdoEwD_fYSVHDw",
  authDomain: "basics-6f1a6.firebaseapp.com",
  projectId: "basics-6f1a6",
  storageBucket: "basics-6f1a6.appspot.com",
  messagingSenderId: "412786801920",
  appId: "1:412786801920:web:2ded0b318c616bd23847e5",
  measurementId: "G-T8RQZYZHG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);