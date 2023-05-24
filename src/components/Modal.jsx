import React from 'react'

export function Modal({isVisible}) {
    if(!isVisible) return null;
  return (
 
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center  z-[10]'>
       <div className='w-80 md:w-[32rem] flex flex-col '>
       <button className='text-white text-xl z-[11]  place-self-end'>X</button>
        <div className='bg-white p-2 rounded flex '>
        Modal
        </div>
        </div> 
    </div>
  )
}
