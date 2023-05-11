import React from 'react'
import styles from '../styles/Home.module.css'
// import MdDelete from 'react-icons/md'
import { MdDelete } from "react-icons/md";

function Note({id, title, content, displayName, openModal }) {

const deleteNote=()=>{
  console.log(id)
  openModal
}
  return (
  
    <div className={styles.note}>
      <div className={styles.note_main}>
        <h1> {title}</h1>
        <p>{content}</p>
      </div>
      <div className={styles.note_footer}>
        <small>{displayName} </small>
        {/* <small>20/20/17 </small> */}
        <button>
          <MdDelete size={30} onClick={deleteNote} />

        </button>
      </div>


    </div>
  )
}

export default Note