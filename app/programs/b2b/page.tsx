import AboutB2b from '@/components/B2B/AboutB2b'
import B2bConsultation from '@/components/B2B/B2bConsultation'
import B2bHero from '@/components/B2B/B2bHero'
import B2bValues from '@/components/B2B/B2bValues'
import OfferSection from '@/components/B2B/OfferSection'
import ProgramFormat from '@/components/B2B/ProgramFormat'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import React from 'react'

const B2BPage = () => {
    return (
        <div>
            <B2bHero />
            <AboutB2b />
            <OfferSection />
            <ProgramFormat />
            <B2bValues />
            <HeroTestimonials />
            <B2bConsultation />
        </div>
    )
}

export default B2BPage