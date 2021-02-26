import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCilE_kzPJWxr7ihY935dLU4KvMWdjEKdg",
  authDomain: "crwn-db-20a2e.firebaseapp.com",
  projectId: "crwn-db-20a2e",
  storageBucket: "crwn-db-20a2e.appspot.com",
  messagingSenderId: "263065920383",
  appId: "1:263065920383:web:76aa249549b1afdf5ab04a",
  measurementId: "G-46QZG18BEM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
