import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { HiPlus } from "react-icons/hi";
import { useAuth } from '../context/AuthUserContext';


function CreateArea() {

    const { addANewPost } = useAuth();
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
    function submitButton(event) {
        console.log(note)
        // onAdd(note)
        addANewPost(note.title, note.content)
            .then(resp => {
              console.log("Document written with ID",resp) 

            })
        event.preventDefault()
        // return note

    }
    return (
        <div>
            <form className={styles.form}>
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
                    className={styles.button}
                    onClick={submitButton}><HiPlus /></button>
            </form>
        </div>
    )
}

export default CreateArea