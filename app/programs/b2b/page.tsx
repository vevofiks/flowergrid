import AboutB2b from '@/components/B2B/AboutB2b'
import B2bConsultation from '@/components/B2B/B2bConsultation'
import B2bHero from '@/components/B2B/B2bHero'
import B2bValues from '@/components/B2B/B2bValues'
import OfferSection from '@/components/B2B/OfferSection'
import ProgramFormat from '@/components/B2B/ProgramFormat'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import React from 'react'

const b2bTestimonials = [
    {
        id: 1,
        quote: "We have engaged with several providers in the past, but Flowergrid’s corporate wellbeing programmes offered the strategic depth we were missing. Their focus on leadership and emotional intelligence coaching has transformed how our managers handle pressure. We aren't just seeing happier staff; we are seeing leaders who can spot burnout before it happens and support their teams effectively.",
        author: "Sarah Thomson., Head of People & Culture, Financial Services",
        rating: 5,
    },
    {
        id: 2,
        quote: "In our high-pressure industry, generic wellness perks don't cut it. Flowergrid delivered stress resilience training that actually stuck. It wasn't just a one-off workshop; it was a cultural shift towards holistic workplace wellness. Our team now has a shared language for managing stress, and the energy in the office has moved from frantic to focused. A truly worthwhile investment.",
        author: "James Turner, CEO, Tech Start-up",
        rating: 5,
    },
    {
        id: 3,
        quote: "Before working with Flowergrid, our departments were operating in silos with frequent miscommunication. The communication and relationship coaching helped bridge that gap immediately. It is rare to find corporate wellbeing coaching that balances psychological insight with practical business application so well. Our team cohesion has never been stronger.",
        author: "Sarah Malik, Operations Director, Healthcare Sector",
        rating: 5,
    },
    {
        id: 4,
        quote: "Our staff needed a safe space to navigate recent changes, and Flowergrid provided exactly that. Their trauma-informed workplace support was handled with incredible sensitivity and professionalism. It gave our team the tools to build psychological safety and trust again. I would highly recommend their bespoke approach to any educational institution.",
        author: "Dr. David Reynolds., Dean of Student Services, London University",
        rating: 5,
    },
    {
        id: 5,
        quote: "“Our teams were under pressure and struggling to communicate well. The corporate wellbeing programme delivered by Flowergrid helped us rebuild trust and cohesion in a very grounded way. Colleagues now have a shared language around stress, boundaries, and wellbeing, and we are already noticing better collaboration and fewer conflicts.”",
        author: "Elena Rico, Operations Manager, Techminds",
        rating: 5,
    }
];

const B2BPage = () => {
    return (
        <div>
            <B2bHero />
            <AboutB2b />
            <OfferSection />
            <ProgramFormat />
            <B2bValues />
            <HeroTestimonials
                testimonials={b2bTestimonials}
                title="Impactful Experiences"
                subtitle="What our B2B partners say"
            />
            <B2bConsultation />
        </div>
    )
}

export default B2BPage