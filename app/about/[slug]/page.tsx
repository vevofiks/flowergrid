"use client"
import React from 'react'
import PersonHero from '@/components/about/person/PersonHero'
import PersonBio from '@/components/about/person/Bio'
import ScrollingTextReveal from '@/components/UI/ScrollingTextReveal'
import WorkIncludes from '@/components/about/person/WorkIncludes'
import { usePathname } from 'next/navigation'
import { getPersonBySlug } from '../data'
import FlowerGridSection from '@/components/about/person/FlowerGridSection'
import JourneySection from '@/components/about/person/JourneySection'
import Connect from '@/components/about/person/Connect'

const PersonPage = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();

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

  console.log(personData.hero.imageSrc)

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

      <FlowerGridSection />
      {personData?.journeySection && (
        <JourneySection
          title={personData.journeySection.title}
          description={personData.journeySection.description}
          items={personData.journeySection.flowerWithCard}
        />
      )}

      <Connect
        image={personData.connect.image}
        title={personData.connect.title}
        description={personData.connect.description}
      />
    </div>
  )
}

export default PersonPage