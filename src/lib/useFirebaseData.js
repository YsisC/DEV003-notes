
import { useState, useEffect } from 'react'
import { auth, db, } from '../firebase.config'
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
  
  } from 'firebase/firestore'

export const useFirebaseData = (category) => {

    const addANewPost = (title, content, authUser) => addDoc(collection(db, category), {
        title,
        content,
        date: new Date(),
        user: authUser
    });

    return {
        addANewPost
    }
}

