import React from 'react'
import Image from 'next/image'
import { teamTree } from '@/app/about/data'

const TeamTreeSection = () => {
  return (
    <div
      style={{ background: "url('/About/team/bg.png') no-repeat center center/cover" }}
      // Changed p-10 to py-10 px-4 for better mobile spacing
      className='flex flex-col items-center py-10 px-4 lg:px-12 md:px-20 min-h-screen relative overflow-hidden'
    >
      {/* Title responsive text size */}
      <h1 className='text-3xl md:text-5xl font-normal mt-12 text-center'>Meet Our Team</h1>

      {/* -- Decorative Leaves (Adjusted positions slightly for safety) -- */}
      <Image
        src='/Home/left-leaf.png'
        width={120}
        height={120}
        alt=""
        className='absolute top-24 left-[-20px] md:top-8 md:left-1 opacity-70 w-[80px] md:w-[120px]'
      />
      <Image
        src='/Home/right-leaf.png'
        width={120}
        height={120}
        alt=""
        className='absolute top-36 right-[-20px] md:top-8 md:right-1 opacity-70 w-[80px] md:w-[120px]'
      />
      <Image
        src='/Home/right-leaf.png'
        width={120}
        height={120}
        alt=""
        className='absolute bottom-4 left-[-20px] md:bottom-8 md:left-0 opacity-70 rotate-180 w-[80px] md:w-[120px]'
      />
      <Image
        src='/Home/left-leaf.png'
        width={120}
        height={120}
        alt=""
        className='absolute bottom-4 right-[-20px] md:bottom-8 md:right-0 opacity-70 rotate-180 w-[80px] md:w-[120px]'
      />

      <div className="max-w-5xl w-full mx-auto relative mt-8 md:mt-12">
        
        <div className="relative z-10 flex flex-col gap-10 md:gap-20 py-8">
          {teamTree.map((row, index) => (
            <div
              key={row.id}
              // MOBILE FIX: Use flex-wrap and justify-center by default for mobile.
              // Only apply justify-between on MD screens and up.
              className={`
                flex w-full flex-wrap md:flex-nowrap items-center
                justify-center gap-8 md:gap-0
                ${row.type === 'single' ? 'md:justify-center' : 'md:justify-between'}
              `}
            >
              {row.members.map((member, mIndex) => (
                <div key={mIndex} className="flex flex-col items-center text-center shrink-0">

                  {/* MOBILE FIX: Width is 160px on mobile, 240px on desktop */}
                  <div className="relative w-[160px] h-[200px] md:w-[240px] md:h-[280px] mb-4 rounded-[120px] bg-[#D7C3A3] overflow-hidden shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top h-full w-full"
                    />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-semibold text-[#2C1810] leading-snug mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-lg xl:text-xl  !text-[#714C24] leading-relaxed font-normal px-2 max-w-[160px] md:max-w-[240px]">
                    {member.role}
                  </p>

                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamTreeSection