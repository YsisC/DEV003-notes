import React from 'react'
import styles from '../styles/Home.module.css'
// import MdDelete from 'react-icons/md'
import {MdDelete} from "react-icons/md";

function Note({title, content}) {
  return (
    //example with props
    <div className={styles.note}>
        <h1> Mi tituulo</h1>
        <p>Esta es mi primera nota</p>

        <button>
              <MdDelete size={30}/> 
              <></>
         </button>
    </div>

    // //exaple with the template
    // <div className={styles.note}>
    //     <h1> {title}</h1>
    //     <p>{content}</p>
    // </div>
  )
}

export default Note