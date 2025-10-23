import { section } from "motion/react-client";
import React from "react";

export default function TicketCard({ ticket }) {
  return (
    <section className="h-60 w-sm bg-white font-Inter">
      <div className="p-5">
        <div className="one flex items-center justify-between">
          <h2 className="text-lg font-Inter ">{ticket.title}</h2>
          {ticket.status === "Open" ? (
            <button className="btn btn-active btn-success">Open</button>
          ) : ticket.status === "In Progress" ? (
            <button className="btn btn-active btn-warning">Warning</button>
          ) : (
            <button className="btn btn-active btn-secondary">
              {ticket.status}
            </button>
          )}
        </div>
        <div className="two mt-5 text-[#627382] ">
            <p>{ticket.description}</p>
        </div>
         <div className="three mt-3 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
            <p className="text-[#627382] text-[14px]">#{ticket.id}</p>
            {
                ticket.priority==="High"?<p className="text-red-700 text-[14px]">HIGH PRIORITY</p> : ticket.priority==="Medium"?<p className= "text-yellow-500 text-[14px]">MEDIUM PRIORITY</p> :<p className="text-green-950  text-[14px]">LOW PRIORITY</p> 
                
                
                }
        </div>
        <div className="text flex items-center justify-center gap-3">
            <p>{ticket.customer}</p>
            <p>{ticket.createdAt}</p>
        </div>
      </div>

      </div>

     
    </section>
  );
}
