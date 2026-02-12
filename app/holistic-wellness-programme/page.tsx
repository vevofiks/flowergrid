import React from 'react'
import { myPrograms } from '../data/programs'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import Connect from '@/components/About/person/Connect'
import FaqSection from '@/components/Contact/FAQSection'
import CurvedPathAnimation from '@/components/Programme/CurvedPathAnimation'
import HeaderSecrtion from '@/components/Programme/HeaderSecrtion'
import ProgramCarousel from '@/components/Programme/ProgramCarousal'
import Achievement from '@/components/Programme/Achievement'
import ProgramCards from '@/components/Programme/ProgrammeCards'
import ProgramIntro from '@/components/Programme/ProgrammeIntro'


const faqs = [
  {
    "id": 1,
    "question": "What makes Flowergrid holistic wellness programmes different?",
    "answer": "Unlike standard courses, our Flowergrid holistic wellness programmes integrate mind, body, and spirit practices with evidence-based medical insights. You receive a personalised approach that combines coaching, hypnotherapy, and energy work with clinical understanding, ensuring transformation is both measurable and sustainable."
  },
  {
    "id": 2,
    "question": "How do I know which holistic wellness programme is right for me?",
    "answer": "Every journey begins with a detailed assessment of your goals and needs. Our expert team will guide you to the most suitable path, whether it’s a focused Power Hour, an immersive 1-Day Workshop, or an extended 6- or 12-week holistic wellness programme."
  },
  {
    "id": 3,
    "question": "Can I attend sessions online, onsite, or both?",
    "answer": "We offer fully flexible delivery. You can join our holistic wellness programmes online via secure video call from anywhere in the world, or attend onsite sessions at our Croydon centre for a more immersive experience. Many clients choose a hybrid model for maximum convenience."
  },
  {
    "id": 4,
    "question": "How long does each programme take, and what is included?",
    "answer": "Our programmes range from single one-hour sessions to comprehensive 12-week journeys. Each Flowergrid holistic wellness programme includes expert-led sessions, personalised wellness plans, digital resources, and progress tracking to support your mind, body, and spirit alignment."
  },
  {
    "id": 5,
    "question": "What support will I receive between sessions?",
    "answer": "True transformation happens daily, not just during appointments. You will have access to follow-up check-ins, messaging support, and ongoing resources to reinforce your learning. This ensures your holistic wellness programme continues to support your growth well beyond the live sessions."
  },
  {
    "id": 6,
    "question": "Are the programmes suitable for beginners with no experience?",
    "answer": "Absolutely. Our holistic wellness programmes are designed for all levels of experience. Whether you are new to wellness or looking to deepen your practice, our experts guide you step-by-step, adapting techniques to your comfort level and personal goals."
  },
  {
    "id": 7,
    "question": "How do I track my progress and measure results?",
    "answer": "We use a robust combination of health assessments, biomarker tracking, and reflective exercises. This data-driven approach allows you to see tangible improvements in both mental clarity and physical health throughout your Flowergrid holistic wellness programme."
  }
]

const ProgramTestimonials = [
  {
   id : 1,
   quote : "I arrived at the 5 Day Inner Transform overwhelmed and scattered. The structure, assessments and calm guidance helped me slow down, notice my patterns and reset my routines. I left with a clearer head, better sleep and a plan that actually feels doable.",
   author : "Emma, Operations Manager, London",
   image : "/home/H5 a.png",
   rating : 5

  },
  {
   id : 2,
   quote : "I joined a six week Flowergrid holistic wellness programme after years of starting and abandoning self help plans. The mix of coaching, reflection and practical tools helped me build simple habits and keep them. I feel steadier, more organised and less at war with myself.",
   author : "Tom, Financial Analyst, Manchester",
   image : "/home/H5 b.png",
   rating : 5

  },
  {
   id : 3,
   quote : "“I booked a Power Hour because I was stuck on one decision that was eating up all my energy. In that one session I felt properly listened to, and left with clear options, next steps and a lot less noise in my head.",
   author : "Rina, Freelance Designer, Birmingham",
   image : "/home/H5 c.png",
   rating : 5

  },
  {
   id : 4,
   quote : "“I went to a one day workshop expecting theory. Instead I left with three or four specific practices I now use when stress spikes at work and at home. The day was honest, grounded and surprisingly practical, not just talk about wellbeing.”",
   author : "Hassan, Team Leader, Croydon",
   image : "/home/H5 d.png",
   rating : 4

  },
  {
   id : 5,
   quote : "“Our team was burnt out and communication had become tense. The Flowergrid holistic wellness programmes for our organisation gave us a shared language for stress, simple regulation tools and space to speak honestly. Meetings feel calmer and people seem more human with each other again.”",
   author : "Laura, Head of People, Surrey",
   image : "/home/H5 c.png",
   rating : 5

  },
  
]
const page = () => {
  return (
    <>
      <ProgramIntro />
      <ProgramCards />
      <HeroTestimonials title='Client Experiences with Flowergrid Holistic Wellness Programmes' testimonials={ProgramTestimonials} />
      <ProgramCarousel programs={myPrograms} />
      <HeaderSecrtion />
      <CurvedPathAnimation />
      <Achievement />
      <FaqSection title='Your Questions About Flowergrid Programmes Answered' faqs={faqs} />
      <Connect image={`/about/person2/5.png`} title="Unlock your transformation. Start your new life today" btnText='Join The Membership' description='' />
    </>
  )
}

export default page