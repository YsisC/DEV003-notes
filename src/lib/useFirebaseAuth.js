import React from 'react'
import { useState, useEffect } from 'react'
// import firebase from '../firebase.config';
import { auth } from '../firebase.config'
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';


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
    router.push('/')
  };

  const signInWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  const logOut = () => {
    signOut(auth).then(clear);
  }

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged)
    return () => unsubscribe()
  }, []);



  return {
    authUser,
    loading,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithGoogle,
    logOut
  };



}
