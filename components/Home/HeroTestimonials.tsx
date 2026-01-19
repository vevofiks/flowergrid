import MovingTestimonials from "../UI/MovingTestimonials";

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    image: string; 
    rating: number; 
}

const testimonialsData: Testimonial[] = [
    {
        id: 1,
        quote: "FlowerGrid helped me find balance when I didn't even realize how much I needed it. The care I received was more than service. It was healing. I've tried so many wellness programs before, but nothing felt as personal and transforming as this. It's like they see the real you. Thank you so much!!!",
        author: "Aisha M.",
        image: "/Home/H5 a.png",
        rating: 5,
    },
    {
        id: 2,
        quote: "FlowerGrid helped me find balance when I didn't even realize how much I needed it. The care I received was more than service. It was healing. I've tried so many wellness programs before, but nothing felt as personal and transforming as this. It's like they see the real you. Thank you so much!!!",
        author: "Jonathan L.",
        image: "/Home/H5 b.png",
        rating: 5,
    },
    {
        id: 3,
        quote: "FlowerGrid helped me find balance when I didn't even realize how much I needed it. The care I received was more than service. It was healing. I've tried so many wellness programs before, but nothing felt as personal and transforming as this. It's like they see the real you. Thank you so much!!!",
        author: "Winona",
        image: "/Home/H5 c.png",
        rating: 5,
    },
    {
        id: 4,
        quote: "FlowerGrid helped me find balance when I didn't even realize how much I needed it. The care I received was more than service. It was healing. I've tried so many wellness programs before, but nothing felt as personal and transforming as this. It's like they see the real you. Thank you so much!!!",
        author: "Sarah K.",
        image: "/Home/H5 d.png",
        rating: 5,
    },
];

export default function HeroTestimonials() {
    return (
        <section className="w-full h-auto py-10 bg-[#F3EAD8] overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 mb-30 md:mb-10 mt-5 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-normal uppercase tracking-wide mt-30 md:mt-0 mb-4 text-center">
                    WHAT OUR CLIENTS SAY ABOUT US
                </h2>
                <p className="text-black! text-lg md:text-xl font-sans uppercase tracking-widest text-center">
                    Flowergrid's Testimonials
                </p>
            </div>

            <MovingTestimonials testimonials={testimonialsData} />
        </section>
    );
}