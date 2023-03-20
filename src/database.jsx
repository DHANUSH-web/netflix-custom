import firebase from "firebase/compat/app";
import { getDatabase, set, get, ref, child } from "firebase/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgWT8EC0AW5J3NzKl2qL7ExejSFC6q8sE",
  authDomain: "netflix-clone-45663.firebaseapp.com",
  projectId: "netflix-clone-45663",
  storageBucket: "netflix-clone-45663.appspot.com",
  messagingSenderId: "1034266451797",
  appId: "1:1034266451797:web:fe851766f74855be6799dc",
  databaseUrl: "https://netflix-clone-45663-default-rtdb.firebaseio.com/"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const dbs = getDatabase(fireBaseApp);
let userData = {};

const updateUserData = (data) => {
  userData = data;
}

export const pushDataBase = ({ ...props }) => {
  // push or write database
  set(ref(dbs, props.root), props.data);
}

export const pullDataBase = ({ ...props }) => {
  // pull or read database
  // The database is returning the data before updating the new data
  const dbRef = ref(dbs);
  
  get(child(dbRef, props.root)).then((snapshot) => {
    if (snapshot.exists())
      updateUserData(snapshot.val());

  }).catch(() => {
    alert("No response from server, try again later");
  })

  return userData;
}

export const updateDataBase = ({ ...props }) => {
  // update existing database
}

export const deleteDataBase = ({ ...props }) => {
  // delete existing database
}

export default fireBaseApp;

/*
  snapshot output = { username: {}, username: {} }
  userData = { usernae: {}, username: {} };
*/