import React from 'react'
import HeroCard from './HeroCard'
import HeroCardtwo from './HeroCardtwo'

export default function Hero({increment,decrement}) {
  return (
    <section className='sm:max-w-2xl lg:max-w-6xl sm:mx-auto lg:mx-auto flex flex-col sm:flex-row justify-between items-center py-5 mx-10 gap-10 mt-5 '>
    <HeroCard  increment={increment}></HeroCard>
    <HeroCardtwo decrement={decrement}></HeroCardtwo>
    </section>
  )
}
