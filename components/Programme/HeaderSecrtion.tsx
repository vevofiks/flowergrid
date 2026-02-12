import Link from 'next/link'

function HeaderSecrtion() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mt-32 md:mb-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium text-text-heading mb-8 leading-[1.1]">
            How You Will Experience a <br className="hidden md:block" /> Flowergrid Program
        </h1>
        <p className="text-lg md:text-xl text-text-body max-w-2xl mb-10 leading-relaxed opacity-80">
            Take the guesswork out of your transformation. Flowergrid holistic wellness programmes guide you through a clear, personalised journey that nurtures your mind, body, and spirit.
        </p>

        <div className="flex flex-col items-center gap-8">
            <p className="text-xl md:text-2xl font-heading font-semibold text-text-heading">
                Step-by-Step Experience:
            </p>
            <Link
            href={'https://calendly.com/flowergridmarketing/30min?month=2026-02'}>
            <button className="bg-[#9C7D4D] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#8A6D42] transition-colors duration-300 shadow-lg">
                Book Your Discovery Session
            </button>
            </Link>
        </div>
    </div>
  )
}

export default HeaderSecrtion