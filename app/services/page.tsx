import Intro from '@/components/Services/Intro'
import ScrollingTextReveal from '@/components/ui/ScrollingTextReveal'
import MedicalServices from '@/components/Services/MedicalServices'
import MeetExperts from '@/components/Services/MeetExperts'
import CoreValues from '@/components/Home/CoreValues'
import ServiceConsultation from '@/components/Services/ServiceConsultation'
import FaqSection from '@/components/Contact/FAQSection'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import ServiceCards from '@/components/Services/ServiceCards'
import Connect from '@/components/About/person/Connect'
import { Quote } from 'lucide-react'
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

const ServiceTestimonials = [
  {
    id: 5,
    quote: "“I had been trying to manage physical symptoms, stress and low mood in separate boxes for years. Flowergrid’s integrative wellness model brought everything together. Coaching, therapeutic support and holistic treatments were coordinated, so I did not have to keep repeating my story. Over time I have felt a real shift in my energy, focus and self-belief, and it finally feels like my mind, body and spirit are working in the same direction.”",
    author: "Helen Green, HR Director, Manchester",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 c.png`,
    rating: 5

  },
  {
    id: 1,
    quote: "“On paper I was successful, but inside I felt completely lost. Working with Flowergrid’s life and transformation coaching helped me reconnect with what I actually want from my career and relationships. Their holistic wellness services gave me structure, reflection, and very human support at a time when I felt like I was falling apart quietly.”",
    author: "Rachael Moore, Senior Project Manager, London",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 a.png`,
    rating: 5

  },
  {
    id: 2,
    quote: "“I came to Flowergrid exhausted by anxiety and constant overthinking. The blend of anxiety and stress management techniques, NLP and gentle therapeutic support helped me feel calmer and more grounded. Over a few months my holistic wellbeing improved noticeably, and I finally had tools to manage difficult days rather than being consumed by them.”",
    author: "David Patel, Secondary School Teacher, Croydon",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 b.png`,
    rating: 5

  },
  {
    id: 3,
    quote: "“I had ignored my own health for years while running my business. The medical checks, nutritional consulting and aesthetic advice I received as part of Flowergrid’s holistic wellness services helped me reset my habits without judgement. I feel more energised, more confident in my body, and much clearer about how to look after my health long term.”",
    author: "Sophie Turner, Small Business Owner, Surrey",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 c.png`,
    rating: 5

  },
  {
    id: 4,
    quote: "“I originally booked Reiki out of curiosity, but the combination of energy work, meditation and soul reflection sessions helped me in ways I did not expect. Flowergrid’s mind body spirit wellness approach made me feel seen as a whole person, not just a set of symptoms. I left each session feeling lighter, clearer and more connected to myself.”",
    author: "Amir Hussain, Software Engineer, Birmingham",
    image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 d.png`,
    rating: 5

  },
 
]

const page = () => {
  return (
    <>
      <Intro />
<<<<<<< HEAD

      <section className="min-h-screen w-full flex items-center justify-center px-8 py-20">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <ScrollingTextReveal phrases={phrases} />
          </div>

          <div className="flex items-end justify-center h-full ">
            <div className="relative">
                <Image
                  src={img}
                  alt="Flowergrid"
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
=======
      <ServiceCards />
>>>>>>> dev
      <MedicalServices />
      <MeetExperts />
      <CoreValues values={coreValues} />
      <Connect image={`${process.env.NEXT_PUBLIC_IMGURL}about/person2/5.png`} title='Ready to explore our holistic wellness services?' description='Book a conversation today to find the path that supports your transformation best.' btnText='Book a Consultation' />
      <ServiceConsultation />
      <HeroTestimonials title='Testimonials' testimonials={ServiceTestimonials} />
      <FaqSection />
    </>
  )
}

export default page