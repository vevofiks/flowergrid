import Intro from '@/components/Services/Intro'
import MeetExperts from '@/components/Services/MeetExperts'
import CoreValues from '@/components/Home/CoreValues'
import FaqSection from '@/components/Contact/FAQSection'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import ServiceCards from '@/components/Services/ServiceCards'
import Connect from '@/components/About/person/Connect'

// const phrases = [
//   "The Flower of Life reminds us that everything in the universe is connected, including our own journey of transformation"
// ]

const coreValues = [

  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}services/i1.png`,
    title: "Book A Discovery Call",
    desc: "share your goals and challenges."
  },
  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}services/i2.png`,
    title: "Receive a Personalised Wellness Path",
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

const faqs = [
  {
    "id": 1,
    "question": "What holistic wellness services do you offer at Flowergrid?",
    "answer": "We offer a fully integrated range of holistic wellness services, including life and transformation coaching, therapeutic mental wellness (NLP, Hypnotherapy), energy healing (Reiki, Meditation), and medical aesthetic support. Each service is designed to align your mind, body, and spirit."
  },
  {
    "id": 2,
    "question": "How do I know if I need life and transformation coaching or therapy?",
    "answer": "This is a common question. Life and transformation coaching is generally future-focused, helping you build goals, resilience, and habits. Therapeutic support (like counselling or hypnotherapy) often addresses deeper emotional roots or past trauma. In your discovery call, we will guide you to the right choice."
  },
  {
    "id": 3,
    "question": "Do you offer holistic wellness services online or only in Croydon?",
    "answer": "We offer both. While our physical centre provides holistic wellness services in Croydon, many of our coaching, NLP, and consultation sessions are available online via secure video call, supporting clients across the UK and globally."
  },
  {
    "id": 4,
    "question": "Can I combine medical treatments with holistic therapies?",
    "answer": "Yes. Our unique approach integrates medical science with holistic wellness services. For example, you might combine nutritional consulting (medical) with Reiki or mindfulness (holistic) to support your complete wellbeing."
  },
  {
    "id": 5,
    "question": "Are your practitioners qualified to deliver these services?",
    "answer": "Absolutely. Flowergrid is led by qualified professionals. Our team includes doctors, certified life and transformation coaches, NLP practitioners, and clinical hypnotherapists. We ensure high standards of care across all our holistic wellness services."
  },
  {
    "id": 6,
    "question": "Are your practitioners qualified?",
    "answer": "Yes. Our team includes doctors, therapists and certified practitioners with expertise in medicine, psychology, hypnotherapy, NLP, counselling and complementary therapies. Every professional meets the required standards for safe, effective care."
  },
  {
    "id": 7,
    "question": "How long does a typical programme last?",
    "answer": "Programme length depends on your goals. One-to-one coaching is often delivered in 6 or 12-week formats, while therapy and medical plans are tailored individually. Your practitioner will outline a clear structure during your consultation."
  }
]

const page = () => {
  return (
    <>
      <Intro />
      <ServiceCards />
      <MeetExperts />
      <CoreValues values={coreValues} />
      <HeroTestimonials title='Testimonials' testimonials={ServiceTestimonials} />
      <FaqSection faqs={faqs} />
      <Connect image={`${process.env.NEXT_PUBLIC_IMGURL}about/person2/5.png`} title='Ready to explore our holistic wellness services?' description='Book a conversation today to find the path that supports your transformation best.' btnText='Book a Consultation' />
    </>
  )
}

export default page