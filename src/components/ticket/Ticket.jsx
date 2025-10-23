import React, { use } from 'react'
import TicketCard from './TicketCard';

export default function Ticket({responceofdata}) {
 const ticketData=use(responceofdata);
 console.log(ticketData);
 

  return (
    <section>
      
      <h3 className=' font-Inter font-semibold text-2xl my-5'>Customer Tickets</h3>
      
      <div className=' flex flex-col md:flex-row flex-wrap  gap-5'>
 {
      
      ticketData.map(ticket=> <TicketCard key={ticket.id} ticket={ticket} > </TicketCard>)
      
      }
      </div>
      
       </section>
  )
}
