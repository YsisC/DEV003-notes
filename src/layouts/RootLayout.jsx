//hooks
import React, { useState } from 'react';
// Components
import Sidebar from './Sidebar';
import { Header , Modal} from '../components';




export default function RootLayout({ children }) {


//Menu toogle sidebar
    const [isOpen, setIsOpen] = useState(false)
    const toogleMenu = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>


   
            <div className='h-full'>
                <Header className=" h-[10vh]"  toogleMenu={toogleMenu} />
                <div className='flex gap-6 '>
                    <Sidebar isOpen={isOpen} />
                    <main 

                    className=' flex-1 z-0 h-[90vh] overflow-y-auto max-[767px]:pl-16   pt-4'>
                        {children}
                    </main>
                </div>
            </div>  
                 {/* <Modal isVisible={showModal} /> */}

     
            </>


    )
}
