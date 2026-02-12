import { ProgramData } from "@/components/Programme/ProgramCarousal";

const imgurl = process.env.NEXT_PUBLIC_IMGURL;
export const myPrograms: ProgramData[] = [
    {
        id: 1,
        title: "5-Day Inner Transform Program",
        description: "Dive deep into a complete mind-body-spirit transformation. Our expert-led 5-day programme combines assessments, personalised planning, and ongoing support to create measurable, lasting change, giving you clarity, balance, and the tools to thrive both online or onsite.",
        benefits: ["Personalised transformation plan", "Expert guidance across mind, body, and spirit", "Biomarker tracking and progress check-ins", "Flexible online or onsite participation"],
        buttonText: "Enquire About the 5-Day Program",
        buttonLink: "/your-link", // optional
        imageUrl: `/programme/p2.jpg`,
        imageAlt: "Description for accessibility",
        decorativeImages: [
            {
                src: `${imgurl}programme/decorations/flower1.png`,
                alt: "Decorative element",
                position: "top-left", // top-left, top-right, bottom-left, bottom-right
                className: "rotate-45" // optional Tailwind classes
            },
            {
                src: `${imgurl}programme/decorations/flower2.png`,
                alt: "Decorative element",
                position: "bottom-right", // top-left, top-right, bottom-left, bottom-right
                className: "rotate-45" // optional Tailwind classes
            }
            // Add more decorations...
        ]
    },
    {
        id: 2,
        title: "Power Hour Sessions",
        description: "Supercharge your journey with a dedicated one-on-one session. Our Power Hour gives you tailored guidance from an expert, providing actionable strategies, clarity, and support to tackle challenges, enhance skills, and accelerate your personal or professional growth.",
        benefits: ["Personalised advice tailored to your goals", "One-on-one time with an experienced expert", "Flexible scheduling to fit your lifestyle", "Immediate actionable insights for tangible results"],
        buttonText: "Book Your Power Hour",
        buttonLink: "/your-link", // optional
        imageUrl: `/programme/p3.jpg`,
        imageAlt: "power hour session",
        decorativeImages: [
            {
                src: `${imgurl}programme/decorations/flower3.png`,
                alt: "Decorative element",
                position: "top-left", // top-left, top-right, bottom-left, bottom-right
                className: "rotate-45" // optional Tailwind classes
            },
            {
                src: `${imgurl}programme/decorations/pot.png`,
                alt: "Decorative element",
                position: "bottom-right", // top-left, top-right, bottom-left, bottom-right
                className: "rotate-45" // optional Tailwind classes
            }
            // Add more decorations...
        ]
    },
    {
        id: 3,
        title: "1-Day Workshops",
        description: "Immerse yourself in a full-day workshop designed to restore balance to mind, body, and spirit. Learn practical techniques to manage stress, heal emotionally, enhance communication, and cultivate self-awareness for a more confident, vibrant, and connected life.",
        benefits: ["Holistic approach to trauma, anxiety, and emotional healing", "Practical skills in communication, self-image, and relationships", "Breathwork and meditation techniques for lasting calm", "Boost self-awareness, self-worth, and personal growth"],
        buttonText: "View Workshop Schedule",
        buttonLink: "/your-link",
        imageUrl: `/programme/p4.jpg`,
        imageAlt: "1-day workshop",
        decorativeImages: [
            {
                src: `${imgurl}programme/decorations/flower4.png`,
                alt: "Decorative element",
                position: "top-left", // top-left, top-right, bottom-left, bottom-right
                className: "rotate-45" // optional Tailwind classes
            },
            {
                src: `${imgurl}programme/decorations/flower5.png`,
                alt: "Decorative element",
                position: "bottom-right", // top-left, top-right, bottom-left, bottom-right
                className: "rotate-45" // optional Tailwind classes
            }
            // Add more decorations...
        ]

    },
    {
        id: 5,
        title: "Tailored Coaching Programs (6 & 12 Weeks)",
        description: "Experience deep, lasting transformation with personalised coaching. Our 6- and 12-week programmes combine life coaching, reflective exercises, and integrated support to help you build new habits, align mind, body, and spirit, and achieve meaningful, measurable change.",
        benefits: ["One-to-one coaching tailored to your personal journey", "Weekly sessions with ongoing WhatsApp support", "Reflective exercises to foster self-awareness and accountability", "Integration of values, ego deconstruction, and soul alignment", "Sustainable habit formation and long-term transformation"],
        buttonText: "Start Your Transformation Journey",
        buttonLink: "/your-link",
        imageUrl: `${imgurl}programme/p5.jpg`,
        imageAlt: "Tailored coaching program",
        decorativeImages: [
            {
                src: `${imgurl}programme/decorations/flower7.png`,
                alt: "Decorative element",
                position: "top-left", // top-left, top-right, bottom-left, bottom-right
                className: "rotate-45" // optional Tailwind classes
            },
            {
                src: `${imgurl}programme/decorations/flower6.png`,
                alt: "Decorative element",
                position: "bottom-right", // top-left, top-right, bottom-left, bottom-right
                className: "rotate-45" // optional Tailwind classes
            }
            // Add more decorations...
        ]

    },
    {
        id: 6,
        title: "Corporate & Community Programs",
        description: "Empower your teams and communities with workshops designed to enhance leadership, communication, resilience, and overall wellbeing. Our expert-led sessions foster a conscious, collaborative culture, boost productivity, and develop emotional intelligence for lasting impact in any organisation or group.",
        benefits: ["Tailored workshops for organisations, schools, NHS, and community groups", "Practical strategies to enhance leadership and teamwork", "Tools for stress management, resilience, and wellbeing", "Cultivates conscious, supportive, and high-performing workplace culture"],
        buttonText: "Learn More about Corporate Programs",
        buttonLink: "/corporate-wellbeing-programmes",
        imageUrl: `/programme/p6.jpg`,
        imageAlt: "Corporate & Community Programs",
        decorativeImages: [
            {
                src: `${imgurl}programme/decorations/flower8.png`,
                alt: "Decorative element",
                position: "top-left",
                className: "rotate-45"
            },
            {
                src: `${imgurl}programme/decorations/flower9.png`,
                alt: "Decorative element",
                position: "bottom-right",
                className: "rotate-45"
            }
        ]
    }


];