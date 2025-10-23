import React from 'react';
import TaskStatusCard from './TaskStatusCard';

export default function TaskStatus({ info }) {
  return (
    <section>
      <h3 className='font-semibold text-2xl my-5'>Task Status</h3>
      {
        info.length === 0 
        ? <p>Select a ticket to add to Task Status</p>
        : info.map(info=><TaskStatusCard info={info} /> ) 
      }
    </section>
  );
}
