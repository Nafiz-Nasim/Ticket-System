import React from 'react';
import ResolvedTaskCard from './ResolvedTaskCard';

export default function ResolvedTask({ setresolveinfo, resolveinfo,resolvedButton }) {
  return (
    <section>
      <h3 className='font-semibold text-2xl my-5'>Resolved Task</h3>
      {
        resolveinfo.length === 0 
          ? <p>No resolved tasks yet.</p>
          : resolveinfo.map((resolved, index) => (
              <ResolvedTaskCard key={index} resolved={resolved} resolvedButton={resolvedButton} />
            ))
      }
    </section>
  );
}
