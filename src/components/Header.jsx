//Hooks
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthUserContext';
//next
import Image from 'next/image'
//css
import styles from '../styles/Header.module.css'
//react-icon
import { HiMenu, HiOutlineSearch } from 'react-icons/hi'

export  function Header({ toogleMenu }) {
  const { logOut } = useAuth();
  const signOut = (i) => {
    i.preventDefault()
    logOut()

  }

  const logo = <Image src="https://raw.githubusercontent.com/YsisC/DEV003-notes/main/public/assets/logo.svg" alt='logoLabnote' width={35} height={35}></Image>

  return (
    <div className={styles.header} >
      <div className="flex gap-1 items-center">
        <div onClick={ toogleMenu }>
        <HiMenu size={25} />
        </div>
     
      {logo}<h3>Lab Note</h3>
      </div>
      
      <div className={styles.input_group}>
      <HiOutlineSearch size={25}/>
      <input
          type="text"
          name="email"
          placeholder="Buscar"
          className={styles.input_text}
          id="loginEmail"
          onChange={(event) => setEmail(event.target.value)}
                        />
      </div>
    <div>
    <button onClick={signOut} className={styles.button_logOut} type="button">
        Log out
      </button>
    </div>
     
    </div>
  )
}




