import React, { use } from 'react'
import TicketCard from './TicketCard';

export default function Ticket({responceofdata,setincrement,increment,info,setinfo,}) {
 const ticketData=use(responceofdata);
 console.log(ticketData);
 
 

  return (
    <section>
      
      <h3 className=' font-Inter font-semibold text-2xl my-5'>Customer Tickets</h3>
      
      <div className=' grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  items-center justify-center '>
 {
      
      ticketData.map(ticket=> <TicketCard setinfo={setinfo} info={info} increment={increment} setincrement={setincrement} key={ticket.id} ticket={ticket} > </TicketCard>)
      
      }
      </div>
      
       </section>
  )
}
