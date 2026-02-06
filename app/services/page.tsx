import Intro from '@/components/Services/Intro'
import ScrollingTextReveal from '@/components/ui/ScrollingTextReveal'
import MedicalServices from '@/components/Services/MedicalServices'
import MeetExperts from '@/components/Services/MeetExperts'
import CoreValues from '@/components/Home/CoreValues'
import ServiceConsultation from '@/components/Services/ServiceConsultation'
import FaqSection from '@/components/Contact/FAQSection'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import Image from 'next/image'

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

      <section className="min-h-screen w-full flex items-center justify-center px-8 py-20">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <ScrollingTextReveal phrases={phrases} />
          </div>

          <div className="flex items-end justify-center h-full ">
            <div className="relative">
                <Image
                  src={img}
                  alt="Flower Grid"
                  width={500}
                  height={600}
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
            </div>
          </div>
        </div>
      </section>  
      <MedicalServices />
      <MeetExperts />
      <CoreValues values={coreValues} />
      <ServiceConsultation />
      <HeroTestimonials />
      <FaqSection />
    </>
  )
}

export default page