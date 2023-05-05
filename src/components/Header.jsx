import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'


function Header(props) {
    const logo = <Image src="https://raw.githubusercontent.com/YsisC/DEV003-notes/main/public/assets/logo.svg"alt='logoLabnote'  width={20} height={20}></Image>
  return (
    <div className='header' >
        {logo}<h3>Lab Note</h3>
        </div>
  )
}

Header.propTypes = {}

export default Header
