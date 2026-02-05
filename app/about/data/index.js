import { i, image } from "framer-motion/client";
import { title } from "process";

const imageUrl = process.env.NEXT_PUBLIC_IMGURL;
export const personsData = {
    "person1": {
        slug: "person1",
        name: "Samina Khan",

        // PersonHero component data
        hero: {
            imageSrc: `${imageUrl}about/person1/Samina.png`,
            text: "Hi, I'm Samina Khan, wellbeing coach with expertise in integrated holistic practices for mind & body"
        },

        // PersonBio component data
        bio: {
            title: "A Little About Me",
            imageSrc: `${imageUrl}about/person1/1.png`,
            bioText: [
                "Over the past 12 years, I've supported individuals through mental health and wellness initiatives, helping them navigate life's challenges. Alongside this, I have more than 20 years of experience in business and startups, bringing people and ideas together in meaningful ways.",
                "I'm also a mother of three and a sister who cares deeply about my family and community. Balancing multiple roles has taught me how to create harmony in life, and I use this experience to help my clients do the same.",
                "I specialize in guiding you to uncover your true desires, confront your fears, and take practical steps towards creating the life you want. Whether your focus is health, career, relationships, or overall well-being, I'm here to help you turn challenges into opportunities for growth."
            ]
        },

        // ScrollingTextReveal component data
        scrollingText: {
            phrases: [
                "Transform Your",
                "Mind, Body,",
                "and Spirit."
            ]
        },

        // WorkIncludes component data
        workIncludes: {
            title: "How I Work",
            title2: "Here's what I focus on with my clients:",
            description: "I take a holistic approach that combines mind, body, and spirit, because I believe true transformation starts from within and grows through guided reflection and actionable steps.",
            description2: "Together, we explore your challenges and create practical strategies that fit your life. My goal is for you to leave each session with insight, confidence, and tools that create lasting change.",
            steps: [
                {
                    title: "Body",
                    image: `${imageUrl}about/person1/2c.png`,
                    description: "Aligning your physical health, energy, and lifestyle habits"
                },
                {
                    title: "Mind",
                    image: `${imageUrl}about/person1/2b.png`,
                    description: "Helping you gain clarity, build resilience, and develop a positive mindset"

                },
                {
                    title: "Spirit",
                    image: `${imageUrl}about/person1/2a.png`,
                    description: "Fostering purpose, presence, and inner balance"
                }
            ]
        },

        flowerWithText : {
            image: `${imageUrl}about/person1/4.png`,
            description: "I'm proud to be part of Flower Grid, where a team of 15 skilled practitioners provides integrated support for mind, body and spirit. Together we offer coaching, counselling, nutrition guidance, exercise plans, Reiki spiritual direction, and medical Support."
        },
        // JourneySection component data
        journeySection: {
            title: "Your Journey with Me",
            description: "When we work together, we take a structured yet flexible approach:",
            flowerWithCard: [
                {
                    "type": "card",
                    "number": "01",
                    "title": "Self-Discovery",
                    "description": "We explore your desires, challenges, and patterns"
                },
                {
                    "type": "flower",
                    "image": `${imageUrl}about/person1/3a.png`,
                    "alt": "Peony Sketch"
                },
                {
                    "type": "card",
                    "number": "02",
                    "title": "Reflection",
                    "description": "We examine fears and limiting beliefs using holistic life coaching techniques"
                },
                {   
                    "type": "flower",
                    "image": `${imageUrl}about/person1/3b.png`,
                    "alt": "Coneflower Sketch"
                },
                {
                    "type": "flower",
                    "image": `${imageUrl}about/person1/3c.png`,
                    "alt": "Dahlia Sketch"
                },
                {
                    "type": "card",
                    "number": "03",
                    "title": "Growth",
                    "description": "We implement practical strategies to align your life with our goals"
                },
                {
                    "type": "flower",
                    "image": `${imageUrl}about/person1/3d.png`,
                    "alt": "Magnolia Sketch"
                },
                {
                    "type": "card",
                    "number": "04",
                    "title": "Transformation",
                    "description": "We build sustainable habits, resilience, and confidence"
                }
            ]
        },
        connect: {
            image: `${imageUrl}about/person1/5.png`,
            title: "Take The First Step",
            description: "If you're ready to find balance, clarity, and personal growth, I'd love to work with you"
        },


        // Qualifications component data
        qualifications: [
            {
                period: "2023 – Present",
                title: "Strategic Leadership & Community Impact",
                description: "Founder · Trustee · Strategic Partnerships",
            },
            {
                period: "2020 – 2023",
                title: "Wellness & Social Consultancy",
                description: "Management Consultant · Senior Consultant · Head of Business Development",
            },
            {
                period: "2000 – 2018",
                title: "Corporate Strategy & Change Management",
                description: "Promotions Manager · Change Management Manager · Senior Service Delivery Manager",
            },
        ],
        educations: [
            "MA Business Management – Kingston University",
            "Postgraduate Diploma in International Marketing – CIM (Chartered Institute of Marketing)",
            "ITIL Service Delivery – IT Service Management Certification",
            "NLP Practitioner – Neuro-Linguistic Programming",
            "Mental Health First Aider – LSBU University"
        ],
        support : [
            {
                image: `${imageUrl}about/person1/s1.jpg`,
                title: "Personal & Professional Growth Coaching",
            },
            {
                image: `${imageUrl}about/person1/s2.jpg`,
                title: "Leadership & Soft Skills Coaching",
            },
            {
                image: `${imageUrl}about/person1/s3.jpg`,
                title: "Neuro-Linguistic Programming",  
            },
            {
                image: `${imageUrl}about/person1/s4.jpg`,
                title: "Soul Reflection & Transformation Work"
            },
            {
                image: `${imageUrl}about/person1/s5.jpg`,
                title: "Rekhi Healing"
            }
        ]
    },


    "person2": {
        slug: "person2",
        name: "Monira Ahmed",

        // PersonHero component data
        hero: {
            imageSrc: `${imageUrl}about/person2/monira.png`,
            text: "Hi, I'm Monira Ahmed, a global strategist and hypnotherapist in Croydon specialising in conscious leadership and subconscious transformation."
        },

        // PersonBio component data
        bio: {
            title: "My Journey",
            imageSrc: `${imageUrl}about/person2/1.png`,
            bioText: [
                "My journey has taken me through the worlds of business, education, and community development. I began my career with a degree in International Business and Economics, which opened my eyes to how people learn, lead, and adapt in different cultures.",
                "Today, I work as a hypnotherapist in Croydon and global strategist. Along the way, I trained as a Master NLP Coach and became a certified trainer in nutrition and soft skills. These disciplines gave me the tools to understand human behaviour and guide others through meaningful transformation.",
                "My career has been shaped by one idea: progress happens when people grow together. Whether I am mentoring young adults, supporting women settling into new environments, or leading wellbeing programmes, I aim to help people feel confident, capable, and connected."
            ]
        },

        // WorkIncludes component data
        workIncludes: {
            title: "My Approach to Leadership and Wellbeing",
            description: "I believe true leadership begins with self-awareness. Before you can guide others, you need to understand your own values, emotions and patterns.",
            title2: "My coaching style brings together:",
            description2: "This combination allows me to help clients achieve both personal and professional transformation. It is astructured yet compassionate approach that blends intellect with intuition.",
            steps: [
                {
                    title: "Strategic Insight",
                    image: `${imageUrl}about/person2/2a.png`,
                    description: "developed through years in business and education"
                },
                {
                    title: "Psychological Techniques Insight",
                    image: `${imageUrl}about/person2/2b.png`,
                    description: " Using my expertise as an NLP coach in Croydon and RTT practitioner to shift mindsets."

                },
                {
                    title: "Wellbeing Practices",
                    image: `${imageUrl}about/person2/2c.png`,
                    description: "such as nutrition, mindfulness and energy balance"
                }
            ]
        },
        flowerWithText : {
            image: `${imageUrl}about/person2/4.png`,
            description: "Flower Grid was created from a shared vision with Samina Khan to unite science and spirituality in one space. Our platform, known as “The Intelligent Soul's Wellness Platform”, helps people explore personal growth through both structured learning and intuitive guidance."
        },
        // JourneySection component data
        journeySection: {
            title: "Community and Impact",
            description: "Community work is central to what I do. I have collaborated with schools, charities and local organisations to design programmes that make a lasting difference. These include:",
            flowerWithCard: [
                {
                    "type": "card",
                    "number": "01",
                    "title": "Mindset Coaching",
                    "description": "Mindset coaching for young people and those managing long-term illness"
                },
                {
                    "type": "flower",
                    "image": `${imageUrl}about/person2/3a.png`,
                    "alt": "Flower Sketch"
                },
                {
                    "type": "card",
                    "number": "02",
                    "title": "Leadership Programs",
                    "description": "Leadership and wellbeing programmes for older adults"
                },
                {
                    "type": "flower",
                    "image": `${imageUrl}about/person2/3b.png`,
                    "alt": "Coneflower Sketch"
                },
                {
                    "type": "flower",
                    "image": `${imageUrl}about/person2/3c.png`,
                    "alt": "Dahlia Sketch"
                },
                {
                    "type": "card",
                    "number": "03",
                    "title": "Life Changes Support",
                    "description": "Support for women rebuilding confidence after major life changes"
                },
                {
                    "type": "flower",
                    "image": `${imageUrl}about/person2/3d.png`,
                    "alt": "Magnolia Sketch"
                },
                {
                    "type": "card",
                    "number": "04",
                    "title": "Cultural Initiatives",
                    "description": "Initiatives that bring generations and cultures together"
                }
            ]
        },

        connect: {
            image: `${imageUrl}about/person2/5.png`,
            title: "Begin Your Journey with a Hypnotherapist in Croydon",
            description: "If you are ready to explore your potential, strengthen your mindset and live with greater purpose, I would love to connect.",

        },

        // Vision component data
        vision: {
            title: "Leadership with Purpose",
            image: `${imageUrl}home/connection-logo.png`, // Assuming a similar asset exists or using a placeholder
            text: [
                "My vision is to inspire leadership that values empathy, awareness and purpose. I want to see workplaces and communities where wellbeing is part of success, not separate from it. Through Flower Grid and my coaching work",
                "I help people lead with confidence, clarity and compassion. True leadership begins from within, and my goal is to help more people discover that strength."
            ]
        },

        // Qualifications component data
        qualifications: [
           {
            period: "2023 - Present",
            title: "Strategic Leadership & Community Impact",
            description: "Founder · Trustee · Strategic Partnerships"
           },
            {   
            period: "2020 - 2023",
            title: "Wellness & Social Consultancy",
            description: "Management Consultant · Senior Consultant · Head of Business Development"
           },
           {
            period: "2000 – 2018",
            title: "Corporate Strategy & Change Management",
            description: "Promotions Manager · Change Management Manager · Senior Service Delivery Manager"
           }
        ],
        educations: [
            "MA Business Management – Kingston University",
            "Postgraduate Diploma in International Marketing – CIM (Chartered Institute of Marketing)",
            "ITIL Service Delivery – IT Service Management Certification",
            "NLP Practitioner – Neuro-Linguistic Programming",
            "Mental Health First Aider – LSBU University"
        ],
        support : [

            {
                image: `${imageUrl}about/person2/ps3.jpg`,
                title: "Hypnotherapy",
            },
            {
                image: `${imageUrl}about/person2/ps2.png`,
                title: "Rapid Transformational Therapy (RTT)",
            },
            {
                image: `${imageUrl}about/person1/s3.jpg`,
                title: "Neuro-Linguistic Programming (NLP)",
            },
            {
                image: `${imageUrl}about/person2/ps1.jpg`,
                title: "Anxiety & Stress Management Techniques",
            },
            {
                image: `${imageUrl}about/person1/s4.jpg`,
                title: "Soul Reflection & Transformation Work"
            }
        ]
    },
};


export const teamTree = [
    {
        "id": "row-1",
        "type": "single",
        "members": [
            {
                "name": "Dr. Hana Patel",
                "role": "General Practitioner, Medical Exert Witness & Family Doctor",
                "image": `${imageUrl}about/team/hana.png`,
                "description": "Dr. Hana, our skilled and acclaimed doctor in wellness, specializes in assessing and reviewing chronic conditions. Whether you are managing a chronic illness or seeking active improvement, Dr. Hana provides expert guidance. With a focus on holistic wellness, she helps individuals refine their health goals and achieve optimal well-being. Trust Dr. Hana to support you in your journey towards better health and vitality"
            }
        ]
    },
    {
        "id": "row-2",
        "type": "pair",
        "members": [
            {
                "name": "Tamkin",
                "role": "Trained Counselling Services & Career Education Direction",
                "image": `${imageUrl}about/team/tamkin.png`,
                "description": "Wanting a listening ear on relationships, guidance, career, Education, Social improvement. Serving the community, individuals in a journey to link needs and solutions"
            },
            {
                "name": "Yvonne Hewitt",
                "role": "Hypnotherapist, RTT",
                "image": `${imageUrl}about/team/yvonne.png`,
                "description": "Yvonne, our skilled specialist, excels in hypnotherapy and harnessing the power of the mind. With expertise in Rapid Transformational Therapy (RTT) and energy work, she guides you towards profound personal breakthroughs. Yvonne's holistic approach helps you unlock your inner potential, overcome limiting beliefs, and achieve lasting change. Trust her to empower you on your journey to mental clarity and emotional well-being."
            }
        ]
    },
    {
        "id": "row-3",
        "type": "single",
        "members": [
            {
                "name": "Dr. Ravinder",
                "role": "Auricular Acupuncturist, Colour Therapist, Angel Healer & Reiki Grand Master",
                "image": `${imageUrl}about/team/ravinder.png`,
                "description": "Dr. Ravinder is a licensed Auricular Acupuncturist & accredited Reiki Grand Master offering holistic healing. He utilizes reiki, energy, color therapy, & angelic healing to enhance overall well-being. With professional memberships in Microsystems Acupuncture Society, CNHC, & The Acupuncture Society, his comprehensive care blends ancient healing traditions with modern modalities to relieve physical pain, heal emotionally, & improve vitality."
            }
        ]
    },
    {
        "id": "row-4",
        "type": "pair",
        "members": [
            {
                "name": "Dr. Renuka Marley",
                "role": "Healthcare Consultant and Lifecoach",
                "image": `${imageUrl}about/team/renuka.png`,
                "description": "Dr. Renu offers comprehensive body scans to analyze mineral & vitamin levels, utilizing functional nutrition to address deficiencies. With expertise in personalized supplementation and dietary recommendations, she helps clients optimize their nutritional intake. Dr. Renu goes beyond the basics, incorporating additional elements to support overall health & wellness. Trust Dr. Renu for a tailored approach to enhancing your well-being through nutrient balancing with Dr. Renu."
            },
            {
                "name": "Runa Boolaky",
                "role": "NLP Practitioner, Lifecoach & Mental First Aider",
                "image": `${imageUrl}about/team/runa.png`,
                "description": "Runa is your guide to leadership development, goal achievement, and the cultivation of healthy habits. She offers support with a range of products designed to enhance your financial health and investment strategies. Runa's holistic approach empowers you to evolve personally and professionally, helping you build a balanced and prosperous life. Trust her expertise to unlock your potential and achieve lasting success.  "
            }
        ]
    },
    {
        "id": "row-5",
        "type": "single",
        "members": [
            {
                "name": "Rico Wagner Caleep",
                "role": "Leadership • Growth • Mental Performance Coaching executives & organisations",
                "image": `${imageUrl}about/team/rico.png`,
                "description": "Rico supports executives and leaders in navigating high-pressure roles with clarity and resilience. Using the Wagner Method, he blends cognitive behavioural strategies, emotional intelligence, and holistic coaching to enhance performance, balance, and wellbeing. Trust Rico to guide you towards sustainable growth and empowered leadership."
            }
        ]
    },
    {
        "id": "row-6",
        "type": "pair",
        "members": [
            {
                "name": "Rebecca",
                "role": "The Nutrition And Fitness Coach",
                "image": `${imageUrl}about/team/rebecca.png`,
                "description": "Rebecca the nutrition and fitness coach trained in nutrition and training. Taylored nutrition plans, strength training and Pilates, balancing cardio and Tonning to get results. We are running boot camps for women, menopause programs, and specializing in fitness and body strength still being individual."
            },
            {
                "name": "Husna Hoque",
                "role": "Personal Trainer & Wellness Coach",
                "image": `${imageUrl}about/team/husna.png`,
                "description": "Trainer Husna specializes in creating customized workout routines and managing your macros to help you adopt healthier habits. With a focus on personalized fitness plans, she guides clients towards achieving their goals effectively. Trust in Trainer Husna to design workouts tailored to your needs and support you in making positive lifestyle changes. Elevate your fitness journey with Husna's expertise and commitment to your well-being."
            }
        ]

    },
    {
        "id": "row-7",
        "type": "pair",
        "members": [
            {
                "name": "Samin Khan",
                "role": "Lifecoach & Reiki Healer",
                "image": `${imageUrl}about/team/samina.png`,
                "description": "Simmi, your dedicated life coach councilor, healer & holistic therapist specializing in integrating personalized plans into your daily routine. With a focus on holistic modalities, she selects practices to support your overall health and mental well-being. Simmi brings a unique approach to inner healing, consciousness, and mindfulness, guiding you towards a more balanced and mindful lifestyle. Trust in Simmi to help you cultivate inner peace, develop greater self-awareness, and foster positive habits for sustainable well-being."
            },
            {
                "name": "Munira",
                "role": "NLP Practitioner, Hypnotherapist, RTT",
                "image": `${imageUrl}about/team/munira.png`,
                "description": "Munira, our alchemist, specializes in transforming mindsets into positive habits through the potent tools of NLP, hypnotherapy, and RTT. With a focus on elevating consciousness and refining your internal being, she guides you on a journey of self-discovery and empowerment. Trust her expertise to unlock your fullest potential and cultivate lasting change from within."
            }
        ]
    }
]

export const lines = [
    "“THE SOUL ALWAYS KNOWS",
    "WHAT TO DO TO HEAL ITSELF.",
    "THE CHALLENGE IS TO SILENCE",
    "THE MIND”",
]

// Helper function to get person data by slug
export const getPersonBySlug = (slug) => {
    return personsData[slug] || null;
};

// Helper function to get all person slugs
export const getAllPersonSlugs = () => {
    return Object.keys(personsData);
};

