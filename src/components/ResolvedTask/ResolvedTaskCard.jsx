import React from 'react'

export default function ResolvedTaskCard({resolved,resolvedButton}) {
  return (
    <section className='mt-5'>
        <div className='w-[300px] h-25 bg-white px-5 pt-2 flex flex-col  justify-center rounded-md'>
   <h1 className=''>{resolved.title}</h1>
<button className='bg-red-600 text-white w-full mt-2 py-1 rounded-xl' onClick={()=>{resolvedButton(resolved)}} >remove</button>

        </div>
     </section>
  )
}
