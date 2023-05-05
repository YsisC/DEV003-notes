import React from 'react'
import styles from '../styles/Home.module.css'

function CreateArea() {
    return (
        <div>
            <form className={styles.form}>
                <input type='text' placeholder='Title' name="title" ></input>
                <p>
                    <textarea name='content'
                        placeholder='Take a note....' >
                    </textarea>
                </p>

            </form>
        </div>
    )
}

export default CreateArea