import Connect from '@/components/About/person/Connect'
import AboutB2b from '@/components/B2B/AboutB2b'
import B2bConsultation from '@/components/B2B/B2bConsultation'
import B2bHero from '@/components/B2B/B2bHero'
import B2bValues from '@/components/B2B/B2bValues'
import OfferSection from '@/components/B2B/OfferSection'
import ProgramFormat from '@/components/B2B/ProgramFormat'
import FaqSection from '@/components/Contact/FAQSection'
import ConsultationSection from '@/components/Home/ConsultationSection'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import React from 'react'


const B2BFaqs = [
    {
        id: 1,
        question: "How are your corporate wellbeing programmes different from standard employee assistance plans (EAPs)?",
        answer: "EAPs are often reactive, offering support only when an employee is already in crisis. Our corporate wellbeing programmes are proactive. We focus on building emotional intelligence, resilience and leadership skills before burnout happens. We work with your culture and team dynamics to create an environment where wellbeing is integrated into daily work, not just an add-on service."
    },
    {
        id: 2,
        question: "Can you tailor the programme to our specific industry or team size?",
        answer: "Yes. We understand that a university faculty faces different pressures than a tech start-up or financial firm. Every engagement begins with a consultation to understand your specific challenges. We then design a corporate wellbeing programme that fits your sector, team size and current objectives, whether you need a half-day workshop for ten people or a long-term strategy for a whole department."
    },
    {
        id: 3,
        question: "Do you deliver training online, in person or both?",
        answer: "We offer flexible delivery to suit modern working patterns. Our leadership and emotional intelligence coaching and team workshops can be delivered onsite at your offices, fully online via secure video platforms, or through a hybrid model. For deeper work, we also facilitate off-site corporate wellness retreats to help teams disconnect and reset."
    },
    {
        id: 4,
        question: "How do we measure the impact of a corporate wellbeing programme?",
        answer: "We focus on tangible outcomes, not just attendance numbers. Depending on your goals, we can track metrics such as improved employee engagement scores, reduced sickness absence, or qualitative feedback on team communication and stress levels. We build regular review points into our corporate wellbeing programmes to ensure we are delivering real value and sustainable change."
    },
    {
        id: 5,
        question: " Is your approach suitable for senior leadership teams?",
        answer: "Absolutely. In fact, sustainable culture change often starts at the top. Our executive coaching and leadership and emotional intelligence coaching are designed specifically for senior decision-makers. We help leaders manage their own nervous systems and stress responses so they can lead with greater clarity, empathy and stability during high-pressure periods."
    },
    {
        id: 6,
        question: "What if our team is cynical about “wellness” initiatives?",
        answer: "We encounter this often, and we welcome it. Our approach is grounded in psychology, neuroscience and practical application. We avoid generic advice and focus on evidence-based tools that help people do their jobs better and feel less exhausted. Feedback consistently shows that even skeptical participants value the practical nature of our mindfulness and stress resilience training."
    },
    {
        id: 7,
        question: "How quickly can we get started?",
        answer: "We can usually begin the discovery process within a few days of your enquiry. Once we have agreed on the scope and focus of your corporate wellbeing programme, we can typically schedule workshops or coaching sessions to start within a few weeks, depending on the scale of the rollout and your internal timelines."
    },
];

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
            {/* <B2bConsultation /> */}
            <FaqSection faqs={B2BFaqs} />
            <Connect image={`/about/person2/5.png`} title="Unlock your transformation. Start your new life today" btnText='Join The Membership' description='' />


        </div>
    )
}

export default B2BPage