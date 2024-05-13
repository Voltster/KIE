import React from 'react'
import SectionHeader from '../components/common/SectionHeader'
import GridGallery from '../components/common/GridGallery'
import FAQSection from '../components/about/FAQSection'
import { LayoutGridDemo } from '../components/Home/LayoutGridDemo'

const Gallery = () => {
  return (
    <section className='bg-inherit relative z-20'>
      <SectionHeader heading={" Unleash the Power of Print "} text={"At Koncept India Enterprises, we don't just talk about quality printing, we showcase it."}/>
      <h3 className='no-underline text-center mt-20'>Let Our Work Inspire You</h3>
      {/* <GridGallery/> */}
      <LayoutGridDemo/>
     <FAQSection/>
    </section>
  )
}

export default Gallery
