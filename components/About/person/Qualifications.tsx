'use client'
import React, { useState } from 'react'
import Image from 'next/image'
interface QualificationItem {
    period: string;
    title: string;
    institution?: string;
    description?: string;
    details?: string[];
}

interface VisionData {
    title: string;
    image: string;
    text: string[];
}

interface QualificationsProps {
    qualifications?: QualificationItem[];
    educations?: string[];
    vision?: VisionData;
}

const Qualifications: React.FC<QualificationsProps> = ({ qualifications = [], educations = [], vision }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [expandedEducation, setExpandedEducation] = useState<boolean>(false);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    if (!qualifications && !vision) {
        return null;
    }

    return (
        <div className='flex flex-col'>

            {/* Vision Section */}
            {vision && (
                <div className='flex flex-col px-6 md:px-12 lg:px-20 py-12 md:py-16'>
                    <h1 className='flex flex-wrap items-center text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight gap-4'>
                        {vision.title}
                        {vision.image && (
                            <Image
                                src={vision.image}
                                width={80}
                                height={80}
                                alt="Vision Logo"
                                className="object-contain"
                            />
                        )}
                    </h1>

                    <div className='flex flex-col md:flex-row gap-6 md:gap-10 mt-8 md:mt-10'>
                        {vision.text && vision.text.map((paragraph, index) => (
                            <p key={index} className='text-base md:text-lg lg:text-xl font-light leading-relaxed text-[#2C2C2C] md:w-1/2'>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            {(qualifications.length > 0) && (
                <div className='flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20'>
                    <div className='md:w-1/3'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight'>
                            My Qualifications
                        </h2>
                    </div>

                    <div className='md:w-2/3 flex flex-col gap-4'>
                        {qualifications.map((item, index) => (
                            <div
                                key={index}
                                className='border-b border-[#4A4A4A] pb-4'
                            >
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className='w-full flex justify-between items-center py-4 text-left hover:opacity-70 transition-opacity'
                                >
                                    <div className='flex-1'>
                                        <h3 className='text-xl md:text-2xl font-heading font-medium text-[#2C2C2C]'>
                                            {item.period}
                                        </h3>
                                    </div>
                                    <div className='text-3xl font-light text-[#2C2C2C]'>
                                        {expandedIndex === index ? '−' : '+'}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className='pt-2 pb-4 space-y-3'>
                                        <h4 className='text-lg md:text-xl font-semibold text-[#2C2C2C]'>
                                            {item.title}
                                        </h4>
                                        {item.description && (
                                            <p className='text-base md:text-lg text-[#4A4A4A] font-light'>
                                                {item.description}
                                            </p>
                                        )}
                           
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className='flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 border-t border-[#D0C4AC]'>
                <div className='md:w-1/3'>

                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-heading font-normal leading-tight'>
                        My Education
                    </h2>
                </div>

                <div className='md:w-2/3 flex flex-col gap-4'>
                    <div className='border-b border-[#4A4A4A] pb-4'>
                        <button
                            onClick={() => setExpandedEducation(!expandedEducation)}
                            className='w-full flex justify-between items-center py-4 text-left hover:opacity-70 transition-opacity'
                        >
                            <div className='flex-1'>
                                <h3 className='text-xl md:text-2xl font-heading font-medium text-[#2C2C2C]'>
                                    Education & Qualifications
                                </h3>
                            </div>
                            <div className='text-3xl font-light text-[#2C2C2C]'>
                                {expandedEducation ? '−' : '+'}
                            </div>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedEducation ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            {
                                educations.map((education, index) => (
                                    <div key={index}>
                                        <h4 className='text-lg md:text-xl font-normal text-[#2C2C2C]'>
                                            {education}
                                        </h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-6 md:px-12 lg:px-10 py-10 md:py-12'>
                <p className='text-center md:text-2xl lg:text-2xl xl:text-3xl font-light leading-relaxed'>
                    Twenty-five years of building things that matter – businesses, <br className='hidden md:block' />
                    teams, communities, and now spaces where people can finally <br className='hidden md:block' />
                    feel safe enough to grow.
                </p>
            </div>

        </div>
    )
}

export default Qualifications