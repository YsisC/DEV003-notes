import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useAuth } from '../context/AuthUserContext';
import { HiMenu, HiOutlineSearch } from 'react-icons/hi'

function Header(props) {
  const { logOut } = useAuth();
  const signOut = (i) => {
    i.preventDefault()
    logOut()
    // if ( authUser === null)
    // router.push('/login')
  }
  const logo = <Image src="https://raw.githubusercontent.com/YsisC/DEV003-notes/main/public/assets/logo.svg" alt='logoLabnote' width={35} height={35}></Image>
  return (
    <div className={styles.header} >
      <div className="flex gap-1 items-center">
      <HiMenu size={25} />
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

Header.propTypes = {}

export default Header
