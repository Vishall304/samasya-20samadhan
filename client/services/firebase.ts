import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";   

const firebaseConfig = {
  apiKey: "AIzaSyBhosRusS_WoU_cdnZxnEAboacu9T_ITwQ",
  authDomain: "samsyasamadhan-ddc89.firebaseapp.com",
  projectId: "samsyasamadhan-ddc89",
  storageBucket: "samsyasamadhan-ddc89.firebasestorage.app",
  messagingSenderId: "698501238095",
  appId: "1:698501238095:web:7d7463b4c1bdcd5000493a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);   