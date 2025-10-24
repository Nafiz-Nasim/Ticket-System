 import { p } from 'motion/react-client'
import React from 'react'
 
 export default function TaskStatusCard({info,setinfo,clickcompletes}) {
 
   return (
     <section className='mt-5'>
        <div className='w-[300px] h-25 bg-white px-5 pt-2 flex flex-col  justify-center rounded-md'>
   <h1 className=''>{info.title}</h1>
<button className='bg-green-800 text-white w-full mt-2 py-1 rounded-xl' onClick={()=>clickcompletes(info)} >Complete</button>

        </div>
     </section>
   )
 }
 