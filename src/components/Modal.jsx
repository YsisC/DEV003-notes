import React from 'react'
// React Icons
import { MdDelete } from "react-icons/md";
import styles from '../styles/Home.module.css'

export function Modal({isVisible, note,  onSave,  onChange, deleteNoteId, }) {
    if(!isVisible) return null;
  return (
 
    <div onClick={onSave} id='container' className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center  z-[90]'>
        <div className='w-80 md:w-[32rem] flex flex-col '>
         

          <div className={styles.note_modal}>
          <div  className={styles.note_header} >
                <input className="b"
                  type="text"
                  name="title"
                  value={note.title}
                  onChange={onChange}
                />
               
              </div>
           
            <div className={styles.note_main}>
            
              <textarea
                name="content"
                className="b"
                type="text"
                value={note.content}
                onChange={onChange}
              />
              {/* <p className='self-end'>Ultima modificacion: {new Date(note.date).toDateString()}</p> */}
              <p className='flex mb-2 justify-end'>Ultima modificacion: {note.date}</p>
            </div>
            <div className={styles.note_footer}>
              <button>
                <MdDelete size={30}
                  onClick={deleteNoteId}
                />

              </button>
              <button id='close' onClick={onSave}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
  )
}
