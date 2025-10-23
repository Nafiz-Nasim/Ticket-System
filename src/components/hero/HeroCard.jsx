import React from 'react';

export default function HeroCard({ bg,text }) {
  return (
    <section className={`h-80 w-[880px] ${bg} mx-5 flex flex-col items-center justify-center`}>
      <h2 className='font-Inter sm:text-3xl text-xl text-white'>{text}</h2>
      <p className='text-2xl sm:text-3xl text-white font-semibold'>0</p>
    </section>
  );
}
