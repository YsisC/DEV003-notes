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
import { useRouter } from 'next/router';
import RootLayout from '@/src/layouts/RootLayout';

import Head from 'next/head';
import { Modal } from '@/src/components';


export default function NoteId({ notes }) {
  const [showModal, setShowModal] = useState(true)
  //Show Modal
  const openModal = () => {
    setShowModal(true)
  }
  // const router = useRouter()
  const router = useRouter()
  const [edit, setEdit] = useState(false);
  const [note, setNote] = useState([]);
  const [title, setTitle] = useState(''); // Declare a state variable...
  // const { authUser } = useAuth()
  const { deleteNote, } = useAuth();

  useEffect(() => {
    setNote(JSON.parse(notes))
  }, [notes])


  const onChange = (e) => {
    // setEdit(true)
    // if (edit) {
    const { value, name } = e.target;
    setNote(prevState => ({
      ...prevState,
      [name]: value,

    }))
    // }

  }
  // console.log(JSON.parse(notes))
  JSON.parse(notes)

  const onSave = async (e) => {

  
    if (e.target.id === 'container' || e.target.id === 'close') {
      const { id } = router.query

      const docRef = doc(db, 'reminders', id);
      await updateDoc(docRef, { ...note, date: new Date() });
      // await router.push(`/notes/${content}`)
      await router.push(`/reminders`)
    }


  }

  const deleteNoteId = async () => {
    console.log(note.id)
    deleteNote(note.id)
    await router.push(`/reminders`)
    // openModal()
  }

  return (
    <>
      <Head>
        <title>Lab Note</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://raw.githubusercontent.com/YsisC/DEV003-notes/main/public/assets/logo.svg" />
      </Head>
      <RootLayout>

      </RootLayout>

      <Modal
      key={note.id}
        onChange={onChange}
        deleteNoteId={deleteNoteId}
        isVisible={showModal}
        note={note}
        onSave={onSave}
       
      />

    </>

  )
}

export async function getServerSideProps({ query: { id } }) {
  const docRef = doc(db, 'reminders', id)
  const docSnap = await getDoc(docRef)

  const notes = { ...docSnap.data(), id: docSnap.id, date: docSnap.data().date.toDate().toDateString() }

  return {
    props: {
      notes: JSON.stringify(notes) || []
    }
  }
}