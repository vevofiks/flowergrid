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
import ConsultationSection from "@/components/Home/ConsultationSection";

const lines = [
  "YOU ARE NOT JUST A MIND TO BE UNDERSTOOD.",
  "YOU ARE NOT JUST A SOUL TO BE HEALED.",
  "YOU ARE AN EVOLVING STORY WRITTEN IN",
  "SYMBOLS, STARS, AND PSYCHOLOGY.",
  "ONLY WHEN YOU READ ALL OF YOU, DOES TRUE",
  "TRANSFORMATION BEGIN."
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
    desc: "Whether you're seeking in-person support or prefer online guidance, our global network ensures conscious living is accessible—anytime, anywhere."
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
      <BodyMindSpirit />
      <FadeInText />
      <CorporateProgram />
      <HeroTestimonials />
      <Vision />
      <BlogSection />
      <ConsultationSection />
    </>
  );
}
