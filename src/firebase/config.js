// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACXmcjlx9ylskF4YlB9klLpF_N-gCNdWw",
  authDomain: "bibliotech-lucas.firebaseapp.com",
  projectId: "bibliotech-lucas",
  storageBucket: "bibliotech-lucas.appspot.com",
  messagingSenderId: "950443956185",
  appId: "1:950443956185:web:652e14e0814ee4d289abc8"
};


// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);