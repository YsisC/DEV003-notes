//hooks
import React, { useState } from 'react';
// Components
import Sidebar from './Sidebar';
import Header from '../components/Header';
import Modal from '../components/Modal'



export default function RootLayout({ children }) {


//Menu toogle sidebar
    const [isOpen, setIsOpen] = useState(true)
    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>


   
            <div>
                <Header toogleMenu={toogleMenu} />
                <div className='flex gap-6'>
                    <Sidebar isOpen={isOpen} />
                    <main 

                    className=' flex-1 z-0 h-screen overflow-y-auto max-[767px]:pl-16   pt-4'>
                        {children}
                    </main>
                </div>
            </div>  
                 {/* <Modal isVisible={showModal} /> */}

     
            </>


    )
}
