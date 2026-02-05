import Intro from '@/components/Services/Intro'
import ScrollingTextReveal from '@/components/UI/ScrollingTextReveal'
import MedicalServices from '@/components/Services/MedicalServices'
import MeetExperts from '@/components/Services/MeetExperts'
import CoreValues from '@/components/Home/CoreValues'
import ServiceConsultation from '@/components/Services/ServiceConsultation'
import FaqSection from '@/components/Contact/FAQSection'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import ServiceCards from '@/components/Services/ServiceCards'
import Connect from '@/components/About/person/Connect'
const img = `/about/person2/4.png`

const phrases = [
  "The Flower of Life reminds us that everything in the universe is connected, including our own journey of transformation"
]

const coreValues = [

  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}services/i1.png`,
    title: "Book A Discovery Call",
    desc: "share your goals and challenges."
  },
  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}services/i2.png`,
    title: "Receive a Personalized Wellness Path",
    desc: " built around your unique needs."
  },
  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}services/i3.png`,
    title: "Begin Your Journey",
    desc: "start 1:1 or group sessions online or in person."
  },
  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}services/i4.png`,
    title: "Transform & Reflect",
    desc: "supported by our expert team and digital tools."
  }
]

const page = () => {
  return (
    <>
      <Intro />
      <ServiceCards />
      <MedicalServices />
      <MeetExperts />
      <CoreValues values={coreValues} />
      <Connect image={`${process.env.NEXT_PUBLIC_IMGURL}about/person2/5.png`} title='Ready to explore our holistic wellness services?' description='Book a conversation today to find the path that supports your transformation best.' btnText='Book a Consultation' />
      <ServiceConsultation />
      <HeroTestimonials />
      <FaqSection />
    </>
  )
}

export default page