import React from 'react'
import styles from '../styles/Home.module.css'
// import MdDelete from 'react-icons/md'
import { MdDelete, MdModeEditOutline } from "react-icons/md";

import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';


export default function Note({ id, title, content, displayName, category}) {
  
  const router = useRouter()
  const { deleteNote } = useAuth();

  const deleteNoteId = () => {
    console.log(id)

    // console.log(idNote)
    deleteNote(id)
    // openModal()
  }
  const onEdit = async (e) => {
    const isContainerNoteClicked = e.target.closest('#containerNote');
    const isDeleteButtonClicked = e.target.closest('#delete');
  
    if (isContainerNoteClicked && !isDeleteButtonClicked) {
      console.log('Edit clicked');
    router.push({
      pathname: `${category}/[content]`,
      query: { content: id }
    });
  
   }
      


  }

  return (

    <div className={styles.note} onClick={onEdit} id='containerNote'>
      <div  className={styles.note_main}   >
        <h1> {title}</h1>
        <p>{content}</p>
        {/* <p>{id}</p> */}
      </div>
      <div className={styles.note_footer} >
       

        {/* <small>20/20/17 </small> */}
        <button  onClick={deleteNoteId}  id='delete'>
          <MdDelete size={30}
        
          />

        </button>

      </div>


    </div>
  )
}

