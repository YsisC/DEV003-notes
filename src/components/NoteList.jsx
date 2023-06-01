//firebase
import { db } from '../firebase.config';
import { onSnapshot, collection, orderBy, query, addDoc, getDocs, where } from "firebase/firestore";
//react hooks
import React from 'react'
import { useEffect, useState } from 'react';
//components
import Note from "./Note";
//css
import styles from '../styles/Home.module.css'
import { useAuth } from '../context/AuthUserContext';


export function NoteList({ value, notes, category }) {

  const { authUser, currentUserInfo, } = useAuth();

  const [noteList, setNoteList] = useState([]);

  const user = authUser

  // console.log(user.uid)


  useEffect(() => {

    const collectionRef = collection(db, value)
    const q = query(collectionRef, orderBy("date", "desc"),);
    // const q = query(collectionRef, orderBy("date", "desc"),);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
//  querySnapshot.docs.map(doc => (   console.log( "date", doc.data().date.toDate()) ))
      setNoteList(querySnapshot.docs.map(doc => (  { ...doc.data(), id: doc.id, date:  doc.data().date.toDate()})))
    
    });
    return unsubscribe;


  }, [value, setNoteList]) //
  return (
    <div className={styles.note_list}>

      {
        noteList?.map((note) => (
          (user.uid === note.user.uid) && <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            displayName={note.user.displayName}
            uid={note.user}
            category ={category}
          />

        ))

      }
    </div>
  )
}

export const getServerSideProps = async (context) => {

  // const {   currentUserInfo  } = useAuth();
  const user = currentUserInfo()
  const collectionRef = collection(db, "notes")
  const q = query(collectionRef, orderBy("date", "desc"));
  const querySnapshot = await getDocs(q)
  const docs = []
  querySnapshot.forEach((doc) => {
    // if (user.uid === doc.data().user.uid) return;
    docs.push({ ...doc.data(), id: doc.id, date: doc.date })
  })
  return {
    props: {
      todosProps: JSON.stringify(docs) || [],
    }
    // props: { session: `Your email is ${email} and your UID is ${uid}.` },
  };
}
