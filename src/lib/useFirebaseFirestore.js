import { useEffect, useState } from 'react';
import { db } from '../firebase.config';




export default function useFirebaseAuth() {
 
 const updateTask = (id, newFields) => updateDoc(doc(db, 'notes', id), newFields);
 
}