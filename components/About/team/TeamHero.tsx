import React from 'react'

const TeamHero = () => {
  const imageUrl = process.env.NEXT_PUBLIC_IMGURL

  return (
    <section
      style={{
        backgroundImage: `url('${imageUrl}about/team/teamhero.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top', // important for mobile
      }}
      className="
        relative w-full overflow-hidden
        min-h-[65vh] md:min-h-screen
        flex items-center
      "
    >
      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-black/60 via-black/40 to-black/10
          md:from-black/40 md:via-black/20 md:to-transparent
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          w-full max-w-5xl
          px-6 md:px-12 lg:pl-20
          pt-24 md:pt-0
        "
      >
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-normal !text-white
            mb-4 md:mb-6
            drop-shadow-lg
          "
        >
          Our Panel Of Experts
        </h1>

        <p
          className="
            text-sm sm:text-base md:text-xl lg:text-2xl
            leading-relaxed tracking-wide
            !text-white/95
            max-w-3xl
            drop-shadow-md
          "
        >
          We bring to you our panel of experts with expertise in NHS Mental Health
          and functional nutrition along with an inclusive experience in charity
          work, community service, holistic practices and meditation.
        </p>
      </div>
    </section>
  )
}

export default TeamHero
