import { initializeApp } from "firebase/app";

// Authentication Library
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Database Library
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch, // writes documents to database
  query,
  getDocs,
} from "firebase/firestore";

// ================= Configuration ===============================

const firebaseConfig = {
  apiKey: "AIzaSyAJbJp1tVcXhw6tZ6AnpRSOIqOGiUQploU",
  authDomain: "fashion-app-8de68.firebaseapp.com",
  projectId: "fashion-app-8de68",
  storageBucket: "fashion-app-8de68.appspot.com",
  messagingSenderId: "685915628699",
  appId: "1:685915628699:web:654c63475365fab56b923e",
};

// initialize App
const app = initializeApp(firebaseConfig);

// Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// ================= Auth Token ===============================

export const auth = getAuth();

// ================= Provider ===============================

// Google Popup Sign In
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Database Initialized
const db = getFirestore();

// ================= Database ===============================

// Add collection of documents to the database
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  // iterates over each object in the array of objects
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  // adds object data to the document
  await batch.commit();
  console.log("done");
};

// the collectionRef accesses our collection in database and accesses categories docs
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");

  // creats an object we can get snapshot on
  const q = query(collectionRef);

  // getDocs - async fetch document snapshots from above
  const querySnapshot = await getDocs(q);

  // gives array of all individual docs. snapshots are the data
  // reduce over it
  // we are trying to build categoryMap
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    // we want title and items from the data of the document snapshot
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  // accesses the database, users documents, and its unique ID
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userDocRef;
};

// ================= Authentication ===============================

// Create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign In user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Sign Out User
export const signOutUser = async () => await signOut(auth);

// =================  Auth Listener ===============================

// Listen to user's actions
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
