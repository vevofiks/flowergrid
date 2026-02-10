import programCards from '@/components/program/programCards'
import React from 'react'
import programIntro from '@/components/program/programIntro'
import CurvedPathAnimation from '@/components/program/CurvedPathAnimation'
import ProgramCarousel from '@/components/program/ProgramCarousal'
import { myPrograms } from './data'
import HeaderSecrtion from '@/components/program/HeaderSecrtion'
import Achievement from '@/components/program/Achievement'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import Connect from '@/components/About/person/Connect'
import FaqSection from '@/components/Contact/FAQSection'
const page = () => {
  return (
    <>
      <programIntro />
      <programCards />
      <HeroTestimonials />
      <ProgramCarousel programs={myPrograms} />
      <HeaderSecrtion />
      <CurvedPathAnimation />
      <Achievement />
      <FaqSection />
      <Connect image={`/about/person2/5.png`} title="Unlock your transformation. Start your new life today" btnText='Join The Membership' description='' />
    </>
  )
}

export default page