import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

  const firebaseConfig = {
    apiKey: "AIzaSyAPQBkXQSq0Mtbv9Zv0y4EJaz6T__HTOhc",
    authDomain: "linkedin-clone-8317c.firebaseapp.com",
    projectId: "linkedin-clone-8317c",
    storageBucket: "linkedin-clone-8317c.appspot.com",
    messagingSenderId: "865542185338",
    appId: "1:865542185338:web:6dae341e73614863d9f6c3"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage =firebase.storage();
  
  export {auth,provider,storage};
  export default db;
