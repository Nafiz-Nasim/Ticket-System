import React from 'react'
import HeroCard from './HeroCard'

export default function Hero() {
  return (
    <section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto flex flex-col sm:flex-row justify-between items-center py-5 mx-10 gap-10 mt-5 '>
    <HeroCard text={"In-Progress"} bg={"bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"}></HeroCard>
    <HeroCard text={"Resolved"} bg={"bg-gradient-to-r from-[#54CF68] to-[#00827A]"}></HeroCard>
    </section>
  )
}
