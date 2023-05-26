//hooks
import React, { useState } from 'react'
import { useAuth } from '../context/AuthUserContext';
//css
import styles from '../styles/Home.module.css'
//react-icons
import { HiPlus } from "react-icons/hi";



export   function CreateArea() {
    const [isExpanded, setIsExpanded] = useState(false)
    const { addANewPost, } = useAuth();
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

   const handleChange=(e)=> {
        e.preventDefault()
        const { name, value } = e.target
        setNote(prevalue => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }
    const handleExpanded = () => {
        setIsExpanded(true)
    }
    const submitButton = async (event) => {

        event.preventDefault()
        const { title, content } = note;

        if (title.length === 0 && content.length === 0) return;
        addANewPost(title, content)
            .then(resp => {
                console.log("Document written with ID", resp.id)

            })
        setNote({
            title: "",
            content: ""
        }
        )
    }


    return (
        <div>
            <form
                onSubmit={submitButton}
                className={styles.form}>
                {isExpanded && (
                    <input
                        value={note.title}
                        type='text'
                        placeholder='Title'
                        name="title"
                        onChange={handleChange}
                    ></input>

                )}
                <p>
                    <textarea
                        onClick={handleExpanded}
                        value={note.content}
                        name='content'
                        onChange={handleChange}
                        rows={isExpanded ? 3 : 1}
                        placeholder='Take a note....' >
                    </textarea>
                </p>
                <button
                    type='submit'
                    className={styles.button}
                    onClick={submitButton}><HiPlus /></button>
            </form>

        </div>)
}


