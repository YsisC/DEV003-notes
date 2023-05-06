import { useEffect, useState } from 'react';
import { db } from '../firebase.config';




export default function useFirebaseAuth() {
    const [noteList, setNoteList] = useState([]);
    const fetchPost = () => getDocs(collection(db, "notes"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
            setNoteList(newData);
            console.log("todos", newData);
        })
    return {
        fetchPost
    }
}