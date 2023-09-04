import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import LatestWorks from '../sections/LatestWorks'
import Contact from '../sections/Contact'

export default function Home(){
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <LatestWorks/>
        <Contact/>
    </div>
  )
}

