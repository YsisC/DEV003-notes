// import React from 'react'

export function Alert ( {isVisible, error})  {
    if(!isVisible) return null;
  return (
    <>
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <span class="block sm:inline ">{error}.</span>
  <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
    
  </span>
</div>

    </>
 
  )
}

