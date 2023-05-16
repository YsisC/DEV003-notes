// Firebase
import { db } from '@/src/firebase.config'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
//Hooks
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/src/context/AuthUserContext';
// CSS
import styles from '../../styles/Home.module.css'
// React Icons
import { MdDelete } from "react-icons/md";
//Components
import Note from '@/src/components/Note';
import { useRouter } from 'next/router';

export default function NoteId({ notes }) {
  // const router = useRouter()
  const router = useRouter()
  const [edit, setEdit] = useState(false);
  const [note, setNote] = useState([]);
  const [title, setTitle] = useState(''); // Declare a state variable...
  // const { authUser } = useAuth()
  const { deleteNote,  } = useAuth();

  useEffect(() => {
    setNote(JSON.parse(notes))
  }, [notes])


  const  onChange = (e) => {
    // setEdit(true)
    // if (edit) {
    const { value, name } = e.target;
    setNote(prevState => ({
      ...prevState,
      [name]: value
    }))
    // }
  }
  // console.log(JSON.parse(notes))
  JSON.parse(notes)

  const onSubmit = async (e) => {
    // const { id } = router.query
    const { content } = router.query;
    const docRef = doc(db, 'notes', content);
    await updateDoc(docRef, note);
    // await router.push(`/notes/${content}`)
    await router.push(`/home`)

    console.log(id, content );
  }

  const deleteNoteId = () => {

    deleteNote(id)
    // openModal()
  }

  return (
    <>
      <div key={note.id} className={styles.note}>
        <div className={styles.note_main}>
          <input className="b"
            type="text"
            name="title"
            value={note.title}
            onChange={ onChange}
          />
          <textarea
            name="content"
            className="b" 
            type="text"
            value={note.content}
            onChange={ onChange}
          />
          
        </div>
        <div className={styles.note_footer}>
          <button>
            <MdDelete size={30}
              onClick={deleteNoteId}
            />

          </button>
          <button onClick={onSubmit}>POST</button>
        </div>
      </div>
      {/* <Note
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
      // displayName={note.user.displayName}
      /> */}

    </>

  )
}

export async function getServerSideProps({ query: { content } }) {
  const docRef = doc(db, 'notes', content)
  const docSnap = await getDoc(docRef)
  const notes = { ...docSnap.data(), id: docSnap.id,  date: doc.date }

  return {
    props: {
      notes: JSON.stringify(notes) || []
    }
  }
}