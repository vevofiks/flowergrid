import React from 'react'

const TeamHero = () => {
    const imageUrl = process.env.NEXT_PUBLIC_IMGURL
    return (
        <div
            style={{ background: `url('${imageUrl}about/team/teamhero.jpg') no-repeat center center/cover` }}
            // 1. Changed min-h-screen to min-h-[60vh] for mobile so it doesn't take up too much vertical space
            // 2. Added overflow-hidden to prevent scrollbars
            className='relative flex items-center h-screen md:min-h-screen w-full overflow-hidden'
        >
            {/* Overlay: Changed to standard 'bg-gradient-to-r' and increased darkness on the left for readability */}
            <div className='absolute inset-0 bg-linear-to-r from-black/40 via-black/20 to-transparent'></div>

            {/* Content Wrapper */}
            {/* 3. Replaced fixed ml-12 with responsive padding (px-6 md:px-12) */}
            <div className='relative z-10 w-full px-6 md:px-12 lg:pl-20 max-w-5xl'>
                
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal mb-6 md:mb-8 text-white! drop-shadow-lg'>
                    Our Panel Of Experts
                </h1>
                
                <p className='text-md md:text-xl lg:text-2xl font-normal leading-relaxed tracking-wide text-white/95! max-w-3xl drop-shadow-md'>
                    We bring to you our panel of experts with expertise in NHS Mental Health and functional nutrition along with an inclusive experience in charity work, community service, holistic practices and meditation.
                </p>
            </div>

        </div>
    )
}

export default TeamHero