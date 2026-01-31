import React from 'react'
import Image from 'next/image'

interface ConnectProps {
    image: string;
    title: string;
    description: string;
    btnText?: string;
}

const Connect = ({ image, title, description, btnText = "Schedule Appointment" }: ConnectProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] overflow-hidden p-10 rounded-2xl">
            <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-t-2xl md:rounded-t-none md:rounded-l-2xl md:rounded overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                />
            </div>

            {/* Right side - Content */}
            <div className="bg-[#E5CCA1] flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 rounded-b-2xl md:rounded md:rounded-r-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-[#2d3e2d] mb-4">
                    {title}
                </h2>
                {description && (
                    <p className="text-base md:text-lg font-body text-[#2d3e2d]/80 leading-relaxed mb-8 max-w-md">
                        {description}
                    </p>
                )}
                <button className="bg-[#A68653] transition-colors duration-300 text-white font-medium px-8 lg:px-20 py-4 rounded-full text-sm md:text-base shadow-md">
                    {btnText}
                </button>
            </div>
        </div>
    )
}

export default Connect