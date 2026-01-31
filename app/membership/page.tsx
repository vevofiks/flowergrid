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

const membershipFaqs = [
  {
    id: 1,
    question: "What makes the Flowergrid programmes different from other wellness courses?",
    answer: "Our programmes integrate mind, body, and spirit with both holistic and medical-informed practices. You’ll benefit from coaching, hypnotherapy, energy work, and lifestyle guidance in one seamless, personalised journey."
  },
  {
    id: 2,
    question: "How long are the programmes, and how do I choose the right one for me?",
    answer: "We offer three levels: Self Discovery (6 weeks), Self Alignment (12 weeks), and Self Mastery (16–20 weeks). Your choice depends on your current needs, goals, and readiness for transformation. We can guide you in selecting the best fit."
  },
  {
    id: 3,
    question: "Are the sessions one-on-one or in groups?",
    answer: "Our programmes combine private 1:1 coaching with group workshops and Flowergrid Hub access. This ensures personalised attention while benefiting from community support and shared learning."
  },
  {
    id: 4,
    question: "Can I join if I have no prior experience with coaching or holistic practices?",
    answer: "Absolutely. Our programmes are designed to guide beginners and experienced participants alike. Each step is structured, supportive, and adapted to your unique journey."
  },
  {
    id: 5,
    question: "What kind of results can I expect from joining a programme?",
    answer: "You can expect clarity, confidence, improved emotional balance, better lifestyle habits, and sustainable transformation in mind, body, and spirit. Specific outcomes will depend on your personal goals and commitment."
  },
  {
    id: 6,
    question: "Is support available between sessions?",
    answer: "Yes. Membership includes access to our Flowergrid Hub for ongoing guidance, community interaction, and practical exercises to keep you on track between sessions."
  },
  {
    id: 7,
    question: "Do you offer flexible payment options?",
    answer: "Yes. Programmes can be paid in full or via instalments, making it easier to invest in your personal growth at a pace that suits you."
  }
];

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
      <FaqSection faqs={membershipFaqs} />
      <Connect image={`/membership/connection.jpg`} title="Unlock your transformation. Start your new life today" btnText='Join The Membership' description='' />
    </div>
  )
}

export default MembershipPage