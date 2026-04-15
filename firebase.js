<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, updateDoc, deleteDoc } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBChYq1GZKU7RQ2rTN_gShncYhBukVPitw",
  authDomain: "winix-f2660.firebaseapp.com",
  projectId: "winix-f2660",
  storageBucket: "winix-f2660.firebasestorage.app",
  messagingSenderId: "467492949746",
  appId: "1:467492949746:web:4a0b7adfd5373df1e38a6b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 نخليها global
window.db = db;
window.fb = { doc, setDoc, getDoc, getDocs, collection, updateDoc, deleteDoc };
</script>