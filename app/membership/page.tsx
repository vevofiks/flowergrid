import Connect from '@/components/About/person/Connect'
import FaqSection from '@/components/Contact/FAQSection'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import MembershipAbout from '@/components/Membership/About'
import CardSection from '@/components/Membership/CardSection'
import FlowergridJourney from '@/components/Membership/FlowergridJourney'
import Founders from '@/components/Membership/Founders'
import Hero from '@/components/Membership/Hero'
import MembershipHelp from '@/components/Membership/MembershipHelp'
import Plans from '@/components/Membership/Plans'
import React from 'react'

const MembershipPage = () => {
  return (
    <div>
      <Hero />
      <MembershipAbout />
      <CardSection />
      <MembershipHelp />
      <FlowergridJourney />
      <Plans />
      <HeroTestimonials />
      <Founders />
      <FaqSection />
      <Connect image={`/membership/connection.jpg`} title="Unlock your transformation. Start your new life today" btnText='Join The Membership' description='' />
    </div>
  )
}

export default MembershipPage