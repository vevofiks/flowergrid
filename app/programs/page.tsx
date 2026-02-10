import React from 'react'
import { myPrograms } from './data'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import Connect from '@/components/About/person/Connect'
import FaqSection from '@/components/Contact/FAQSection'
import CurvedPathAnimation from '@/components/Programme/CurvedPathAnimation'
import HeaderSecrtion from '@/components/Programme/HeaderSecrtion'
import ProgramCarousel from '@/components/Programme/ProgramCarousal'
import Achievement from '@/components/Programme/Achievement'
import ProgramCards from '@/components/Programme/ProgrammeCards'
import ProgramIntro from '@/components/Programme/ProgrammeIntro'

const page = () => {
  return (
    <>
      <ProgramIntro />
      <ProgramCards />
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