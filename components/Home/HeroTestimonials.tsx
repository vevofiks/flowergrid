import MovingTestimonials from "../ui/MovingTestimonials";

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    image?: string;
    rating: number;
}

const defaultTestimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Before coming to Flowergrid, I struggled with daily stress and imbalance. Their holistic wellness programs helped me restore harmony in my life and feel truly supported.",
        author: "Sarah Thompson, Surrey",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 a.png`,
        rating: 5,
    },
    {
        id: 2,
        quote: "The life and transformation coaching at Flowergrid was tailored to my needs. Each session helped me build clarity, confidence, and sustainable change in both my personal and professional life.",
        author: "James Morgan, London",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 b.png`,
        rating: 5,
    },
    {
        id: 3,
        quote: "My holistic wellbeing has improved significantly since joining Flowergrid. I feel calmer, more focused, and better equipped to manage my mind, body, and spirit.",
        author: "Emily Carter, Manchester",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 c.png`,
        rating: 5,
    },
    {
        id: 4,
        quote: "I felt genuinely understood from day one. The guidance I received helped me reconnect with myself and achieve a deeper level of mind body spirit wellness.",
        author: "David Wilson, UK",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 d.png`,
        rating: 5,
    },
    {
        id: 5,
        quote: "I had tried several holistic wellness programs before, but Flowergrid was different. The personalised approach helped me make real, lasting changes in my life.",
        author: "Olivia Bennett, Kent",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 a.png`,
        rating: 5,
    },
    {
        id: 6,
        quote: "Flowergrid's integrative wellness approach reminded me that healing is a personal journey. Their support allowed me to progress at my own pace and feel fully restored.",
        author: "Michael Foster, Brighton",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 b.png`,
        rating: 5,
    },
    {
        id: 7,
        quote: "The combination of life and transformation coaching with holistic practices at Flowergrid helped me shift my mindset, improve emotional wellbeing, and achieve meaningful personal growth.",
        author: "Charlotte Hughes, London",
        image: `${process.env.NEXT_PUBLIC_IMGURL}home/H5 c.png`,
        rating: 5,
    },
];

interface HeroTestimonialsProps {
    testimonials?: Testimonial[];
    title?: string;
    subtitle?: string;
}

export default function HeroTestimonials({
    testimonials = defaultTestimonials,
    title = "Client Experiences with Flowergrid",
    subtitle = "Flowergrid's Testimonials"
}: HeroTestimonialsProps) {
    return (
        <section className="w-full h-auto py-10 bg-[#F3EAD8] overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 mb-30 md:mb-10 mt-5 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-normal uppercase tracking-wide mt-30 md:mt-0 mb-4 text-center">
                    {title}
                </h2>
                <p className="text-black! text-lg md:text-xl font-sans uppercase tracking-widest text-center">
                    {subtitle}
                </p>
            </div>

            <MovingTestimonials testimonials={testimonials} />
        </section>
    );
}