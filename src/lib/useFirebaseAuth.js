import React from 'react'
import { useState, useEffect } from 'react'
// import firebase from '../firebase.config';
import { auth, db, } from '../firebase.config'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/router';
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDoc,
  deleteDoc,
  where,
  query,
  updateDoc,
  getDocs

} from 'firebase/firestore';



const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  emailVerified: user.emailVerified
});

export default function useFirebaseAuth() {

  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  //function stateUser
  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }
    setLoading(true)
    var formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  // clear user and change loading
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
    router.push('/login')
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
      })

  const createUserWithEmail = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      if (name !== "") {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  // debugger;
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logOut = () => {
    signOut(auth).then(clear);
  }
  const addANewPost = (title, content) => addDoc(collection(db, 'notes'), {
    title,
    content,
    date: new Date(),
    user: authUser
  });

  const getNotes = () => getDocs(collection(db, "notes"))

  const currentUserInfo = () => auth.currentUser;
  

  const onGetNotes = (callback) => {
    const queryPost = query(collection(db, "notes"), orderBy('date', 'desc'));
    onSnapshot(queryPost, callback);
  };


  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged)
    return () => unsubscribe()
  }, []);

  const deleteNote = async (id) => await deleteDoc(doc(db, 'notes', id));

 
  return {
    authUser,
    loading,
    loading,
    signIn,
    createUserWithEmail,
    signInWithGoogle,
    logOut,
    addANewPost,
    getNotes,
    onGetNotes,
    currentUserInfo,
    deleteNote
  };



}
