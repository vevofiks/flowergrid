import Hero from "@/components/Home/Hero";
import MaskScroll from "@/components/Home/MaskScroll";
import Connections from "@/components/Home/Connections";
import CoreValues from "@/components/Home/CoreValues";

import TransformationServices from "@/components/Home/TransformationServices";
import LeafScrollText from "@/components/Home/LeafScrollText";
import BodyMindSpirit from "@/components/Home/BodyMindSpirit";
import FadeInText from "@/components/Home/FadeInText";
import CorporateProgram from "@/components/Home/CorporateProgram";
import HeroTestimonials from "@/components/Home/HeroTestimonials";
import Vision from "@/components/Home/Vision";
import BlogSection from "@/components/Home/BlogSection";
import Connect from "@/components/About/person/Connect";
import DesktopOnlyFadeInText from "@/components/ui/DesktopOnlyFadeInText";

const lines = [
  "YOU ARE NOT JUST A MIND TO BE UNDERSTOOD.",
  "YOU ARE NOT JUST A SOUL TO BE HEALED.",
  "YOU ARE AN EVOLVING STORY WRITTEN IN",
  "SYMBOLS, STARS, AND PSYCHOLOGY.",
  "ONLY WHEN YOU READ ALL OF YOU, DOES TRUE",
  "TRANSFORMATION BEGIN."
];






const HomeFaqs = [
  {
    id: 1,
    question: "What does Holistic Wellness mean at Flowergrid?",
    answer: "Holistic Wellness at Flowergrid focuses on your mind, body and spirit as one connected system. We combine therapeutic support, physical health guidance and reflective practices to help you build lasting balance and genuine holistic wellbeing."
  },
  {
    id: 2,
    question: "How does Flowergrid support mind body spirit wellness?",
    answer: "Our approach brings together medical insight, emotional support and gentle energy practices to encourage mind body spirit wellness. Each programme is designed to help you feel grounded, centred and more aware of your personal needs."
  },
  {
    id: 3,
    question: "What is included in your life and transformation coaching?",
    answer: "Our life and transformation coaching offers structured guidance that supports clarity, confidence and personal direction. Sessions may include mindset work, emotional wellbeing support and practical tools that help you move forward with purpose."
  },
  {
    id: 4,
    question: "Do you offer services that support mental and emotional wellbeing?",
    answer: "Yes. Flowergrid provides programmes that address anxiety, stress, confidence and emotional balance. Techniques such as NLP, hypnotherapy and mindfulness help you understand your patterns and develop healthier ways of responding to daily challenges."
  },
  {
    id: 5,
    question: "What integrative wellness treatments do you offer for physical health?",
    answer: "Our integrative wellness services include nutritional consulting, medical and aesthetic treatments and personalised health plans. Each option is designed to improve physical vitality while supporting your wider holistic wellbeing."
  },
  {
    id: 6,
    question: "Can I access Flowergrid’s holistic wellness services online?",
    answer: "Yes. Many of our holistic wellness and emotional wellbeing services are available both online and in person. This makes it easy to continue your progress even if you are travelling or living outside the local area."
  },
  {
    id: 7,
    question: "Who can benefit from holistic wellbeing programmes at Flowergrid?",
    answer: "Our programmes are suitable for anyone seeking clarity, improved emotional balance, better physical health or deeper personal growth. Whether you are starting a new chapter or rebuilding your energy, holistic wellbeing can support steady and meaningful progress."
  },
];

const coreValues = [
  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}home/i1.png`,
    title: "HOLISTIC & EVIDENCE-BASED CARE",
    desc: "At Flowergrid, we blend ethical, evidence-based holistic practices with modern medical insight to support genuine, lasting wellbeing."
  },
  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}home/i2.png`,
    title: "WELLNESS YOUR WAY",
    desc: "Whether you're seeking in-person support or prefer online guidance, our global network ensures conscious living is accessible - anytime, anywhere."
  },
  {
    icon: `${process.env.NEXT_PUBLIC_IMGURL}home/i3.png`,
    title: "PERSONALISED TRANSFORMATION",
    desc: "Our dedicated team of doctors, coaches, and therapists collaborate to build tailored journeys that respect your personal pace, needs, and goals."
  }
];


export default function Home() {
  return (
    <>
      <Hero />
      <MaskScroll />
      <Connections />
      <CoreValues values={coreValues} />
      <TransformationServices />
      <LeafScrollText lines={lines} />
      <DesktopOnlyFadeInText />
      <CorporateProgram />
      <HeroTestimonials />
      <Vision />
      <BlogSection />
      <Connect
        image={`${process.env.NEXT_PUBLIC_IMGURL}membership/connection.jpg`}
        title="Your Journey Begins"
        description="Connect with our team to design a personalised wellness pathway that fits your unique needs."
        btnText="Request a Consultation"
      />
    </>
  );
}

