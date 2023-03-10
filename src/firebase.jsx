import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHNJ4669Y93GRPbGUblaaMjJManlqbVUg",
  authDomain: "netflix-clone-1d0e5.firebaseapp.com",
  projectId: "netflix-clone-1d0e5",
  storageBucket: "netflix-clone-1d0e5.appspot.com",
  messagingSenderId: "189571339725",
  appId: "1:189571339725:web:7d3379858db8e946816084",
  databaseURL: "https://netflix-clone-1d0e5-default-rtdb.firebaseio.com/"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;