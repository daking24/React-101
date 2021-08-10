import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDfJfP7QTI1kBilo7QczWSh1-ZkM15532A",
  authDomain: "linkedin-clone-dw.firebaseapp.com",
  projectId: "linkedin-clone-dw",
  storageBucket: "linkedin-clone-dw.appspot.com",
  messagingSenderId: "562263902570",
  appId: "1:562263902570:web:e10e9324a55dad4ab53d13"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };