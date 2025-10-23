import React from 'react';

export default function HeroCard({ increment}) {
  return (
    <section className="h-80 w-[880px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mx-5 flex flex-col items-center justify-center">
      <h2 className='font-Inter sm:text-3xl text-xl text-white'>In-Progress</h2>
      <p className='text-2xl sm:text-3xl text-white font-semibold mt-5'>{increment}</p>
    </section>
  );
}
