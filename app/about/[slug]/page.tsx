"use client"
import React from 'react'
import PersonHero from '@/components/About/person/PersonHero'
import PersonBio from '@/components/About/person/Bio'
import ScrollingTextReveal from '@/components/ui/ScrollingTextReveal'
import WorkIncludes from '@/components/About/person/WorkIncludes'
import { usePathname } from 'next/navigation'
import { getPersonBySlug } from '../data'
import FlowerGridSection from '@/components/About/person/FlowerGridSection'
import JourneySection from '@/components/About/person/JourneySection'
import Connect from '@/components/About/person/Connect'
import WorkSpecifications from '@/components/About/person/WorkSpecifications'
import Vision from '@/components/About/person/Vision'
import Qualifications from '@/components/About/person/Qualifications'
import Support from '@/components/About/person/Support'

const PersonPage = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  const isPerson2 = slug === 'person2';

  // Get person data based on slug
  const personData = getPersonBySlug(slug || '');

  if (!personData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Person Not Found</h1>
          <p className="text-xl text-gray-600">The person you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  console.log(personData.flowerWithText);

  return (
    <div>
      <PersonHero
        imageSrc={personData.hero.imageSrc}
        text={personData.hero.text}
      />
      <PersonBio
        imageSrc={personData.bio.imageSrc}
        bio={personData.bio.bioText}
        title={personData.bio.title}
      />
      {personData?.scrollingText?.phrases && (
        <ScrollingTextReveal
          phrases={personData.scrollingText.phrases}
        />
      )}
      
      <WorkIncludes
        description={personData.workIncludes.description}
        steps={personData.workIncludes.steps}
        title={personData.workIncludes.title}
        description2={personData.workIncludes.description2}
        title2={personData.workIncludes.title2}
      />

      {personData?.flowerWithText && (
        <FlowerGridSection
          text={personData.flowerWithText.description}
          img={personData.flowerWithText.image}
        />
      )}

      {isPerson2 && (
        <WorkSpecifications />
      )}
      
      {personData?.journeySection && (
        <JourneySection
          title={personData.journeySection.title}
          description={personData.journeySection.description}
          items={personData.journeySection.flowerWithCard}
        />
      )}

      <Qualifications qualifications={personData.qualifications} educations={personData.educations} vision={personData.vision} />

      {isPerson2 && (
        <Vision />
      )}
      <Support data={personData.support} />

      <Connect
        image={personData.connect.image}
        title={personData.connect.title}
        description={personData.connect.description}
      />
    </div>
  )
}

export default PersonPage