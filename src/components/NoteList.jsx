import {onSnapshot, collection, orderBy, query,  addDoc, getDocs  } from "firebase/firestore";
import React from 'react'
import { useEffect, useState } from 'react';
import Note from "./Note";
import { db } from '../firebase.config';
import styles from '../styles/Home.module.css'



function NoteList({value}) {
      // const [todos, setTodos] = useState([])
  const [noteList, setNoteList] = useState([]);

    const fetchPost = async () => {
        const collectionRef = collection(db, value)
        const q = query(collectionRef, orderBy("date", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          setNoteList(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, date: doc.data().date?.toDate().getTime() })))
     
        });
        return unsubscribe;
      }
    
      useEffect(() => {
        fetchPost();
      }, []) //and not sure about this return [] item is gona bee empty or not
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