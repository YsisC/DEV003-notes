import { useEffect, useState } from 'react';
import { db } from '../firebase.config';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

export default function useFirebaseStore() {
   const [showModal, setShowModal] = useState(false)
   const updateNote = async (id, newFields) => await updateDoc(doc(db, 'notes', id), newFields);
   const deleteNote = async (id) => await deleteDoc(doc(db, 'notes', id));
   const openModal = () => {
      setShowModal(true)
   }
   return {
      updateNote,
      deleteNote,
      showModal,
      openModal
   }
}