import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBa94axfNYBPd_RHNyovO68axJhF8nw198",
  authDomain: "comp1640-448f0.firebaseapp.com",
  databaseURL: "https://comp1640-448f0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comp1640-448f0",
  storageBucket: "comp1640-448f0.appspot.com",
  messagingSenderId: "388081080962",
  appId: "1:388081080962:web:824fc63f98c7c63c24b29b",
  measurementId: "G-SKL2LMFGLL"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
export { database, analytics };
