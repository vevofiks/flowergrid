import Image from 'next/image';
import Link from 'next/link';

export default function AuthorSidebar({ author }: { author: any }) {
    if (!author) return null;

    return (
        <div className="bg-[#ECDDC4]/30 rounded-2xl p-8 border border-[#8C7A65]/10 text-center lg:sticky lg:top-32">

            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#fff] shadow-sm">
                {author.avatar ? (
                    <Image
                        src={author.avatar}
                        alt={author.name}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-[#E6D7C3] flex items-center justify-center text-[#8C7A65] font-bold text-2xl">
                        {author.name.charAt(0)}
                    </div>
                )}
            </div>

            <h3 className="font-heading text-lg text-[#1C1C1C] mb-1">{author.name}</h3>
            <p className="text-xs text-[#8C7A65] uppercase tracking-widest mb-4">
                {author.title || 'Author'}
            </p>

            <p className="text-sm text-[#4A4A4A] font-sans leading-relaxed mb-6">
                {author.bio || 'A passionate writer sharing insights on holistic living.'}
            </p>
            <Link href="https://calendly.com/flowergridmarketing/30min?month=2026-02" className="block">
                <button className="w-full py-3 px-6 bg-[#8C7A65] text-white rounded-full text-xs uppercase tracking-widest hover:bg-[#726250] transition-colors">
                    Book Consultation
                </button>
            </Link>

        </div>
    );
}
