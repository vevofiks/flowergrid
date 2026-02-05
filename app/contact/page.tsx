import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import FAQSection from '@/components/Contact/FAQSection'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import React from 'react'

const contactFaqs = [
    {
        id: 1,
        question: "I am new to holistic wellness. Where is the best place to start?",
        answer: "The best starting point is our complimentary discovery call. This is a relaxed, confidential conversation where we can understand your personal goals and challenges. We can then recommend the most suitable path for you, whether that is one-to-one coaching, a specific wellness programme, or joining a workshop."
    },
    {
        id: 2,
        question: "How do I book a holistic wellness consultation at Flowergrid?",
        answer: "Booking is simple. You can schedule online, ring us on +44 7432 211096, or drop us an email at sk@flowergrid.co.uk. We offer a free 30-minute discovery session where we'll chat about what you're looking for and suggest the right holistic wellbeing programme to help you get there."
    },
    {
        id: 3,
        question: "What qualifications do your holistic wellness practitioners have?",
        answer: "Our team includes qualified doctors, certified life coaches, licensed therapists and accredited holistic practitioners. Each professional holds proper certifications in their speciality, whether that's NLP, hypnotherapy, Reiki or clinical qualifications. We take professional standards seriously to ensure you receive safe, effective integrative wellness support."
    },
    {
        id: 4,
        question: "Can I combine different holistic wellbeing services in my programme?",
        answer: "Absolutely. Our holistic wellness approach works best when combining complementary services. Many clients benefit from pairing life and transformation coaching with stress management, or medical consultations with energy healing for complete mind body spirit wellness."
    },
    {
        id: 5,
        question: "Do you offer holistic wellness services in Croydon and South London?",
        answer: "Yes, our holistic wellness centre in Coulsdon, CR5 2JA, serves Croydon, Surrey and South London. We also provide online integrative wellness consultations across the UK and internationally, making mind body spirit wellness accessible wherever you are."
    },
    {
        id: 6,
        question: "What are your fees for a discovery call or initial session?",
        answer: "Our initial discovery call is offered free of charge, with no obligation. This ensures you can explore how Flowergrid can help you before making a commitment. Fees for subsequent coaching or therapy sessions vary depending on the practitioner and programme length. Please contact us for our current rate card."
    },
    {
        id: 7,
        question: "What happens during a corporate wellness workshop?",
        answer: "Our corporate workshops are interactive and practical. We focus on key areas such as resilience, leadership, communication, and stress management. The aim is to provide your team with tangible tools and strategies they can apply immediately to improve their performance, wellbeing, and workplace environment."
    },
    {
        id: 8,
        question: "What is your policy for cancelling or rescheduling an appointment?",
        answer: "We operate a 48-hour cancellation policy. If you need to reschedule or cancel an appointment, please let us know at least 48 hours in advance to avoid a cancellation fee. This policy helps us manage our practitioners' schedules and offer appointments to clients on our waiting list."
    }
];

const contactTestimonials = [
    {
        id: 1,
        quote: "Samina’s Reiki sessions helped me release emotional blockages and restore calm. I left feeling lighter, centred, and more balanced. Her guidance made a noticeable difference in my holistic wellbeing.",
        author: "Teresa Cramer, London",
        rating: 5,
    },
    {
        id: 2,
        quote: "Through guided mindfulness and meditation with Munira, I’ve learned to stay present and manage daily stress. These practices have significantly improved my mental clarity and overall mind body spirit wellness.",
        author: "Nina Morrison, Manchester",
        rating: 5,
    },
    {
        id: 3,
        quote: "The life coaching sessions at Flowergrid with Samina helped me gain clarity in my personal and professional life. I now approach challenges with confidence and feel more aligned with my purpose.",
        author: "Reggie Harper, Surrey",
        rating: 5,
    },
    {
        id: 4,
        quote: "Munira’s NLP and hypnotherapy techniques taught me to reframe negative thought patterns. I feel calmer, more resilient, and better equipped to handle stress and anxiety.",
        author: "Emma Pemma, Brighton",
        rating: 5,
    },
    {
        id: 5,
        quote: "The integrative health programme combining doctor consultations, nutritional guidance, and fitness planning was exceptional. My energy levels, physical health, and overall holistic wellbeing have improved dramatically.",
        author: "Nicole Benford-Beck, London",
        rating: 5,
    },
    {
        id: 6,
        quote: "The Soul Reflection sessions with Samina encouraged deep self-awareness and personal growth. I’ve gained clarity on life choices and feel more connected to my mind, body, and spirit.",
        author: "Kate Downey, Kent",
        rating: 5,
    }
];

const ContactPage = () => {
    return (
        <div>
            <div className="h-screen flex items-center justify-center" style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_IMGURL}contact/contactHero.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-6xl lg:text-8xl font-medium text-white! text-center'>Contact Us</h1>
            </div>

            <ContactForm />
            <ContactInfo />
            <FAQSection faqs={contactFaqs} />
            <HeroTestimonials
                testimonials={contactTestimonials}
                title="Client Experiences and Insights"
                subtitle="Voices of Tranquility"
            />
        </div>
    )
}

export default ContactPage