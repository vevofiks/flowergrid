import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import FAQSection from '@/components/Contact/FAQSection'
import HeroTestimonials from '@/components/Home/HeroTestimonials'
import React from 'react'

const ContactPage = () => {
    return (
        <div>
            <div className="h-screen flex items-center justify-center" style={{ backgroundImage: 'url(/Contact/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1 className='text-6xl lg:text-8xl font-medium text-white! text-center'>Contact Us</h1>
            </div>

            <ContactForm />
            <ContactInfo />
            <FAQSection />
            <HeroTestimonials />
        </div>
    )
}

export default ContactPage