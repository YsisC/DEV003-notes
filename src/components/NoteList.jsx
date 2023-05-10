//firebase
import {  db } from '../firebase.config';
import { onSnapshot, collection, orderBy, query, addDoc, getDocs } from "firebase/firestore";
//react hooks
import React from 'react'
import { useEffect, useState } from 'react';
//components
import Note from "./Note";
//css
import styles from '../styles/Home.module.css'
import { useAuth } from '../context/AuthUserContext';


function NoteList({ value }) {

  const [noteList, setNoteList] = useState([]);
  useEffect(() => {
  
    const collectionRef = collection(db, value)
    const q = query(collectionRef, orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setNoteList(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, date: doc.data().date?.toDate().getTime() })))

    });
    return unsubscribe;


  }, []) //
  return (
    <div className={styles.note_list}>

      {
        noteList?.map((note, i) => (

          <Note
            key={i}
            id={i}
            title={note.title}
            content={note.content}
            displayName={note.user.displayName}
          />
        ))

      }
    </div>
  )
}

export default NoteList