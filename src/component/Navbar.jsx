import React from 'react'

function Navbar() {
  return (
    <div className='sticky top-0 z-40 bg-gray-100 shadow-lg flex justify-between py-4 px-4'>
      <div className='flex-1'>
            <a href="" className='text-xl'>PIXEL</a>
      </div>
      <div className='flex gap-2 '>
        <div >
            <input type="text" placeholder='Search' className='border-none px-2' />
        </div>
        <button>Search</button>
      </div>
    </div>
  )
}

export default Navbar
