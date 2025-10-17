
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyAUBt_QnosrcrJ247sDqBUO8rSkj-Z-1zo",
  authDomain: "fir-database-8c841.firebaseapp.com",
  projectId: "fir-database-8c841",
  storageBucket: "fir-database-8c841.firebasestorage.app",
  messagingSenderId: "437780402531",
  appId: "1:437780402531:web:ecb710dd8384dfed6f0356"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export default db