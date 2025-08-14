'use client';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="flex-grow bg flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 py-10 px-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-xl p-8 opacity-0 animate-fade-up animation-delay-100">
        <h1 className="text-4xl font-bold mb-6 text-center opacity-0 animate-fade-down animation-delay-300" style={{ color: 'rgba(97, 79, 60, 0.75)' }}>
          About Our Book Catalogue 📚
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 opacity-0 animate-fade-up animation-delay-500">
          Welcome to our Book Catalogue! This platform helps readers explore, manage, and share their favorite books with ease.
          Whether you're looking for a new read, organizing your collection, or just browsing classics — this app brings together simplicity
          and clean design to make reading more enjoyable.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6 opacity-0 animate-fade-up animation-delay-500">
          Each book card includes details like title, author, year, and a short description. You can search, sort, and even add your own books to the list.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 opacity-0 animate-fade-up animation-delay-500">
          We're continuously improving and would love your feedback!
        </p>

        <div className="text-center opacity-0 animate-fade-up animation-delay-700">
          <button
            onClick={() => router.push('/reviews')}
            className="px-6 py-3 bg-[rgba(148,94,149,0.90)] hover:bg-[#8b4996] text-white text-lg font-semibold rounded-lg transition hover:-translate-y-1" style={{ boxShadow: '0 8px 20px rgba(97, 79, 60, 0.6)' }}
          >
            See What Users Are Saying →
          </button>
        </div>
      </div>
    </div>
  );
}
