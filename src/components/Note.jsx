import React from 'react'
import styles from '../styles/Home.module.css'
// import MdDelete from 'react-icons/md'
import {MdDelete} from "react-icons/md";

function Note({title, content, displayName}) {
  return (
    // //example with props
    // <div className={styles.note}>
    //     <h1> Mi tituulo</h1>
    //     <p>Esta es mi primera nota</p>

    //     <button>
    //           <MdDelete size={30}/> 
    //           <></>
    //      </button>
    // </div>

    //exaple with the template
    <div className={styles.note}>
        <h1> {title}</h1>
        <p>{content}</p>
        <div className={styles.note_footer}>
          <small>{displayName} </small>
          {/* <small>20/20/17 </small> */}
        <button>
              <MdDelete size={30}/> 
           
       </button>
        </div>
      

    </div>
  )
}

export default Note