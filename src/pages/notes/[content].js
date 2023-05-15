import { db } from '@/src/firebase.config'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { MdDelete } from "react-icons/md";
import { useAuth } from '@/src/context/AuthUserContext';

export default function NoteId({ notes }) {
  const [note, setNote] = useState([]);
const {authUser}=useAuth()
  useEffect(()=>{
    setNote(JSON.parse(notes))
  },[notes])
  const {  deleteNote } = useAuth();
  const deleteNoteId=()=>{
    console.log(id)
  
    // console.log(idNote)
    deleteNote(id)
    // openModal()
  }

  // console.log("prueba de note",todosProps)
  return (
    <>
      <div className={styles.note}>
      <div className={styles.note_main}>
      <input className="b" type="text"
        value={note.title}
      />
      <input className="b" type="text"
        value={note.content}
      />
      <input className="b" type="text"
        value={note.id}
      />
      </div>
      <div className={styles.note_footer}>
      <button>
          <MdDelete size={30}
           onClick={deleteNoteId}
           />

        </button>
      </div>
      </div>
   
  
    </>

  )
}

export async function getServerSideProps({ query: { content } }) {
  const docRef = doc(db, 'notes', content)
  const docSnap = await getDoc(docRef)
  const notes = docSnap.data()

  return {
    props: {
      notes: JSON.stringify(notes) || []
    }
  }
}