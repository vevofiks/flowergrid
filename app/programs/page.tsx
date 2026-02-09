import ProgrammeCards from '@/components/Programme/ProgrammeCards'
import React from 'react'
import ProgrammeIntro from '@/components/Programme/ProgrammeIntro'
import CurvedPathAnimation from '@/components/Programme/CurvedPathAnimation'
import ProgramCarousel from '@/components/Programme/ProgramCarousal'
import { myPrograms } from './data'
import HeaderSecrtion from '@/components/Programme/HeaderSecrtion'
import Achievement from '@/components/Programme/Achievement'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import Connect from '@/components/About/person/Connect'
import FaqSection from '@/components/Contact/FAQSection'
const page = () => {
  return (
    <>
      <ProgrammeIntro />
      <ProgrammeCards />
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