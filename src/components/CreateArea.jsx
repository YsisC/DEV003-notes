import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { HiPlus } from "react-icons/hi";
import { useAuth } from '../context/AuthUserContext';


function CreateArea() {

    const { addANewPost, } = useAuth();
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        setNote(prevalue => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }
  const submitButton= async (event)=> {
            console.log(note)
        // onAdd(note)
        event.preventDefault()
    
        const { title, content } =note

        if(title.length===0 && content.length===0)return;
        addANewPost(note.title, note.content,)
            .then(resp => {
              console.log("Document written with ID",resp.id) 

            })
            // Form.reset();
            setNote({
                title: "",
                content: ""
            }
            )
        // return note

    }

    
    return (
         <div>
            <form 
            onSubmit={submitButton}
            // name='Form'
            className={styles.form}>
                <input
                    value={note.title}
                    type='text'
                    placeholder='Title'
                    name="title"
                    onChange={handleChange}
                ></input>
             
                <p>
                    <textarea
                        value={note.content}
                        name='content'
                        onChange={handleChange}
                        placeholder='Take a note....' >
                    </textarea>
                </p>
                <button
                type='submit'
                    className={styles.button}
                    onClick={submitButton}><HiPlus /></button>
            </form>
            
        </div>    )
}

export default CreateArea
