import React from 'react'

export default function HeroCardtwo({decrement}) {
  return (
     <section className="h-80 w-[880px] bg-gradient-to-r from-[#54CF68] to-[#00827A] mx-5 flex flex-col items-center justify-center">
      <h2 className='font-Inter sm:text-3xl text-xl text-white'>Resolved</h2>
      <p className='text-2xl sm:text-3xl text-white font-semibold mt-5'>{decrement}</p>
    </section>
  )
}
