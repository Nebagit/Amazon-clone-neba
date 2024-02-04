import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmU1rcHXATKeQln3zVlDWLdq6sBfpwiPc",
  authDomain: "etu-1a2a5.firebaseapp.com",
  projectId: "etu-1a2a5",
  storageBucket: "etu-1a2a5.appspot.com",
  messagingSenderId: "90497304930",
  appId: "1:90497304930:web:0190666596e506ea57043b"
};





// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth}
export default firebase;
