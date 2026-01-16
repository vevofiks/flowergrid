import Hero from "@/components/Home/Hero";
import MaskScroll from "@/components/Home/MaskScroll";
import Connections from "@/components/Home/Connections";
import CoreValues from "@/components/Home/CoreValues";
import TransformationServices from "@/components/Home/TransformationServices";
import LeafScrollText from "@/components/Home/LeafScrollText";

export   default function Home() {
  return (
    <>
      <Hero />
      <MaskScroll />
      <Connections />
      <CoreValues />
      <TransformationServices />
      <LeafScrollText />
    </>
  );
}
