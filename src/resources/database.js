import firebaseApp from "../firebase";
import { getDatabase, ref, set, child, get } from "firebase/database";

const database = getDatabase(firebaseApp);

export const pushData = (props) => {
  set(ref(database, props.root), props.data);
};

export const pullData = (props) => {
    const dbRef = ref(database);
    const db = get(child(dbRef, props.root));

    db.then((snapshot) => snapshot.exists() ? { type: 'data', data: snapshot.val() } : { type: null, data: null }).catch((e) => alert('Error: ' + e));
};
