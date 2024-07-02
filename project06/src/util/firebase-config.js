
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCo6UqwE-X5VGzrkb-SHXQ6iqQ_w-OQNQY",
  authDomain: "shopcode-e2536.firebaseapp.com",
  projectId: "shopcode-e2536",
  storageBucket: "shopcode-e2536.appspot.com",
  messagingSenderId: "271996736302",
  appId: "1:271996736302:web:e59fe9a615d0111930a0bf",
  measurementId: "G-KDVDQNVGDM"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig