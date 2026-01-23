import React from 'react'

const Intro = () => {
    return (
        <div
            style={{ background: "url('/services/intro.jpg') no-repeat center center/cover" }}
            // 1. Changed min-h-screen to min-h-[60vh] for mobile so it doesn't take up too much vertical space
            // 2. Added overflow-hidden to prevent scrollbars
            className='relative flex items-center min-h-[60vh] md:min-h-screen w-full overflow-hidden'
        >
            {/* Overlay: Changed to standard 'bg-gradient-to-r' and increased darkness on the left for readability */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent'></div>

            {/* Content Wrapper */}
            {/* 3. Replaced fixed ml-12 with responsive padding (px-6 md:px-12) */}
            <div className='relative z-10 w-full px-6 md:px-12 lg:pl-20 max-w-5xl'>
                
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-normal mb-6 md:mb-8 !text-white drop-shadow-lg'>
                   Your Journey to Wholeness<br/> Begins Here
                </h1>
                
                <p className='text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-wide !text-white/95 max-w-3xl drop-shadow-md'>
                    Our services combine medical science, holistic therapies and coaching expertise to help you create lasting transformation.
                    Each programme is designed to support your physical health, emotional balance and personal growth.
                </p>
            </div>

        </div>
    )
}

export default Intro