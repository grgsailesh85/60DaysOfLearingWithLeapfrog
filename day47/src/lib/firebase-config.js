import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNgNOCyYYhNMQL6zcEuJGpCgak5LNjoQA",
  authDomain: "fir-crud-ac7d7.firebaseapp.com",
  projectId: "fir-crud-ac7d7",
  storageBucket: "fir-crud-ac7d7.appspot.com",
  messagingSenderId: "198409242569",
  appId: "1:198409242569:web:a2e21726495c9da33c8a18",
  measurementId: "G-14K6HP79YE"
};

// Initialize Firebase
const firebaseConfigApp = initializeApp(firebaseConfig);
export default firebaseConfigApp