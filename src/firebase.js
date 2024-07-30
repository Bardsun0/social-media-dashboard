import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGkcrGCPPTlG6HXxaQ7nqIkOaOUVEiGE0",
  authDomain: "social-media-dashboard-88f41.firebaseapp.com",
  projectId: "social-media-dashboard-88f41",
  storageBucket: "social-media-dashboard-88f41.appspot.com",
  messagingSenderId: "35164984543",
  appId: "1:35164984543:web:98788335d84bdfaacc056a",
  measurementId: "G-GNS05KVCHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
