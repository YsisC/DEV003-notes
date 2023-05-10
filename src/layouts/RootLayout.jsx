//hooks
import React, { useState } from 'react';
// Components
import Sidebar from './Sidebar';
import Header from '../components/Header';


export default function RootLayout({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    const toogleMenu = () =>{
      setIsOpen(!isOpen)
    }
  
    return (
        <div>
            <Header toogleMenu={toogleMenu} />
            <div className='flex gap-6'>
                <Sidebar isOpen={isOpen}  />
                <main className=' flex-1 z-0  max-[767px]:pl-16 mx-auto py-4'>
                    {children}
                </main>
            </div>
        </div>
    )
}
