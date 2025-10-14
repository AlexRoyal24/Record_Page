// Importa solo lo necesario para Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.17.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.17.0/firebase-firestore.js";

// Configuración de tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMOjgT0Mb-bcA9fNlc23dc1DSKeyFPc1Y",
  authDomain: "recordpage-e86a1.firebaseapp.com",
  projectId: "recordpage-e86a1",
  storageBucket: "recordpage-e86a1.firebasestorage.app",
  messagingSenderId: "67394429287",
  appId: "1:67394429287:web:30ff1f8d82081feac2cfc2",
  measurementId: "G-W701BTFM3F"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Ahora `db` ya está disponible para usar en tu HTML/JS:
// Ejemplo:
// await addDoc(collection(db, "usuarios"), { nombre: "Juan", registros: [], notas: "" });
// const snapshot = await getDocs(collection(db, "usuarios"));
// await deleteDoc(doc(db, "usuarios", "ID_DEL_USUARIO"));
