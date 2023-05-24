import React from 'react'
import styles from '../styles/Home.module.css'
// import MdDelete from 'react-icons/md'
import { MdDelete, MdModeEditOutline } from "react-icons/md";

import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';


export default function Note({ id, title, content, displayName, }) {
  const router = useRouter()
  const { deleteNote } = useAuth();

  const deleteNoteId = () => {
    console.log(id)

    // console.log(idNote)
    deleteNote(id)
    // openModal()
  }
  return (

    <div className={styles.note}>
      <div className={styles.note_main}>
        <h1> {title}</h1>
        <p>{content}</p>
        {/* <p>{id}</p> */}
      </div>
      <div className={styles.note_footer}>
        <button>
          <MdModeEditOutline size={30} onClick={() => {
            router.push({
              pathname: 'notes/[content]',
              query: { content: id }
            });
          }}
          />
        </button>

        {/* <small>20/20/17 </small> */}
        <button>
          <MdDelete size={30}
            onClick={deleteNoteId}
          />

        </button>

      </div>


    </div>
  )
}

