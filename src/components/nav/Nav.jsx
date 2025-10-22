import React from 'react'

export default function Nav() {
  return (
    <div className='bg-white'>
       <section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto flex justify-between items-center py-5 mx-10 '>
    <div className="left  "> <h3 className=' font-main  font-bold text-2xl'>CS — Ticket System</h3></div>
<div className="right hidden md:flex  gap-5 items-center  justify-center">
<a href="">Home</a>
<a href="">FAQ</a>
<a href="">Changelog</a>
<a href="">Blog</a>
<a href="">Download</a>
<a href="">Contact</a>
<button className="btn  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-2 px-4 rounded-md hover:from-[#9F62F2] hover:to-[#632EE3] transition-colors duration-300">+ New Ticket</button>

</div>
    </section>
    </div>
  )
}
