import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAuth } from '../context/AuthUserContext';


function Header(props) {
  const {  logOut } = useAuth();
  const signOut = () => {
    logOut()
    // if ( authUser === null)
      // router.push('/login')
  }
    const logo = <Image src="https://raw.githubusercontent.com/YsisC/DEV003-notes/main/public/assets/logo.svg"alt='logoLabnote'  width={20} height={20}></Image>
  return (
    <div className={styles.header} >
        {logo}<h3>Lab Note</h3>
        <button onClick={signOut} className={styles.button} type="button">
          Log out
        </button>
        </div>
  )
}

Header.propTypes = {}

export default Header
