import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from '../components/Header';



export default function RootLayout({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    const toogleMenu = () =>{
      setIsOpen(!isOpen)
    //   console.log(" header",isOpen)
    }
  
//    console.log("root Layaout, ",isOpen)
    return (
        <div>
            <Header toogleMenu={toogleMenu} />
            <div className='flex gap-6'>
                <Sidebar isOpen={isOpen}  />
                <main className='max-w-5xl flex-1 z-0 mx-auto py-4'>
                    {children}
                </main>
            </div>
        </div>
        // <Header></Header>


    )
}
